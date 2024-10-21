import { Request, Response } from "express";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config({
    path: __dirname + '/file.env' });

import { PrismaClient } from "@prisma/client";

import { userSchema } from "../middlewares/zod.middleware";

import { editFanficSchema, editUserSchema } from "../middlewares/zod.middleware";

import { zodErrorFunction } from "../middlewares/zod.error";

import { handlersError404 } from "../errors/error404";

import { handlersError401 } from "../errors/error401";

const prisma = new PrismaClient();

export async function registerUser (request: Request, response: Response): Promise <void> {

    try {

        const { username, email, password } = request.body;

        userSchema.parse({ username, email, password });

        const passwordHash = await bcrypt.hash(password, 10);

        const registerUser = await prisma.users.create(

            { data: { username, email, password: passwordHash } },

        );

        if (registerUser) {

            response.status(201).json({

                status: 201,

                message: "User created successfully",

                user: { id: registerUser.id, username: registerUser.username, email: registerUser.email, password: registerUser.password },

            });

        };

    } catch (error) {

        console.error(error);

        zodErrorFunction(response, error);

        handlersError404(request, response);

    };

};

export async function loginUser (request: Request, response: Response): Promise <void> {

    try {

        const { email, password } = request.body;

        const loginUser = await prisma.users.findFirst({ where: { email } });

        if (!loginUser) return handlersError404(request, response);

        if (await bcrypt.compare(password, loginUser.password)) {

            const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

            response.cookie("jwt", token, { httpOnly: true, sameSite: "none", secure: true });

            response.status(200).json({

                status: 200,

                message: "User logged in successfully",

                user: { id: loginUser.id, username: loginUser.username, email: loginUser.email, password: loginUser.password },

            });

        };

    } catch (error) {

        console.error(error);

        handlersError404(request, response);

    };

};

export async function findUsers (request: Request, response: Response): Promise <void> {

    try {

        const users = await prisma.users.findMany();

        if (!users) return handlersError404(request, response);

        response.status(200).json({ users });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function editUser (request: Request, response: Response): Promise <void> {
  
    try {

        const { id } = request.params;

        const { username, email, password } = request.body;

        editUserSchema.parse({ username, email, password });

        const passwordHash = await bcrypt.hash(password, 10);

        const editUsers = await prisma.users.update({ where: { id }, data: { username, email, password: passwordHash } });

        response.status(200).json({
             
            editUsers,

            message: "User edited successfully",

         });

    } catch (error) {

        console.error(error);

        zodErrorFunction(response, error);

        handlersError401(request, response);

    };

};

export async function deleteUser (request: Request, response: Response): Promise <void> {

    try {

        const { id } = request.params;

        const user = await prisma.users.delete({ where: { id } });

        response.status(204).json({
            
            user,
             
            message: "User deleted successfully",

        });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function createFanfic (request: Request, response: Response): Promise <void> {

    try {

        const { title, genre, characters, epilogue, text, fanficid, user } = request.body;

        const createFanfic = await prisma.fanCreation.create({ data: { title, genre, characters, epilogue, text, fanficid, user: { connect: { id: user } } }, });

        editFanficSchema.parse({ title, genre, characters, epilogue, text });

        response.status(201).json({
            
            createFanfic,
            
            message: "Fanfic created successfully",
            
        });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function findFanfics (request: Request, response: Response): Promise <void> {

    try {

        const { id } = request.params;

        const fanfics = await prisma.fanCreation.findMany({ where: { user: { id } } });

        response.status(200).json({ fanfics });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function editFanfic (request: Request, response: Response): Promise <void> {

    try {

        const { id } = request.params;

        const { title, genre, characters, epilogue, text } = request.body;

        const editFanfic = await prisma.fanCreation.update({ where: { id }, data: { title, genre, characters, epilogue, text } });

        editFanficSchema.parse({ title, genre, characters, epilogue, text });

        response.status(200).json({

            editFanfic,

            message: "Fanfic edited successfully"

        });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function deleteFanfics (request: Request, response: Response): Promise <void> {

    try {

        const { id } = request.params;

        const fanfics = await prisma.fanCreation.delete({ where: { id } });

        response.status(200).json({
            
            fanfics,
            
            message: "Fanfics deleted successfully",
            
        });

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};