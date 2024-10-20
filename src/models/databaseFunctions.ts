import { Request, Response } from "express";

import bcrypt from "bcryptjs";

import { z } from "zod";

import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";

import { handlersError404 } from "../errors/error404";

import { handlersError401 } from "../errors/error401";

const prisma = new PrismaClient();

export async function registerUser (request: Request, response: Response): Promise <void> {

    try {

        const { username, email, password } = request.body;

        const userSchema = z.object({

            username: z.string().min(6),    

            email: z.string().email(),

            password: z.string().min(6),

        });

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

        if (error instanceof z.ZodError) {

            response.status(400).json({

                status: 400,

                message: error.issues,

            });

        };

        handlersError404(request, response);

    };

};

export async function loginUser (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError404(request, response);

    };

};

export async function findUsers (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function editUser (request: Request, response: Response): Promise <void> {
  
    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function deleteUser (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function createFanfic (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function findFanfics (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function editFanfic (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};

export async function deleteFanfics (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};