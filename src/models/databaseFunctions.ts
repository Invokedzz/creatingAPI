import { Request, Response } from "express";

import { z } from "zod";

import { PrismaClient } from "@prisma/client/extension";

import { handlersError404 } from "../errors/error404";

import { handlersError401 } from "../errors/error401";

export async function registerUser (request: Request, response: Response): Promise <void> {

    try {

        const { username, email, password } = request.body;

        const registerUser = await PrismaClient.user.create({ data: { username, email, password } });

    } catch (error) {

        console.error(error);

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