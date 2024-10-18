import { Request, Response, NextFunction } from "express";

import { registerUser, loginUser, createFanfic } from "./databaseFunctions";

export const registerPostUser = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await registerUser(request, response);

    next();

};

export const loginPostUser = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
    
    await loginUser(request, response);

    next();

};

export const fanficCreationMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await createFanfic(request, response);

    next();

};