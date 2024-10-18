import { Request, Response } from "express";

export async function titleLengthError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a title that is at least 10 characters long!",

        status: "Bad request",

    });

};

export async function genreLengthError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a genre that is at least 3 characters long!",

        status: "Bad request",

    });

};

export async function textLengthError (request: Request, response: Response): Promise <void> {

    response.status(400).json({

        message: "Insert a text that is at least 100 characters long!",

        status: "Bad request",

    });

};