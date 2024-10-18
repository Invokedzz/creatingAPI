import { Request, Response } from "express";

export async function lengthPasswordError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a password that is at least 6 characters long!",

        status: "Bad request",

    });

};

export async function lengthEmailError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a valid email",

        status: "Bad request",

    });

};

export async function lengthUsernameError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a username that is at least 6 characters long!",

        status: "Bad request",

    });

};