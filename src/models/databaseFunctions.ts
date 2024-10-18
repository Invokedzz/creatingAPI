import { Request, Response } from "express";

import { handlersError404 } from "../errors/error404";

import { handlersError401 } from "../errors/error401";

export async function registerUser (request: Request, response: Response): Promise <void> {

    try {

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

export async function createFanfic (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error(error);

        handlersError401(request, response);

    };

};