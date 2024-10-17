import { Request, Response } from "express";

export async function messageHome (request: Request, response: Response): Promise <void> {

    response.status(200).json({

        status: "OK",

        message: "Welcome! Make yourself home",

    });

};

export async function messageAbout (request: Request, response: Response): Promise <void> {

    response.status(200).json({

        status: "OK",

        message: "About? About what?",

    });

};

export async function registerPage (request: Request, response: Response): Promise <void> {

    response.status(202).json({

        status: "OK",

        message: "Register? Register what?",

    });

};

export async function loginPage (request: Request, response: Response): Promise <void> {

    response.status(202).json({

        status: "OK",

        message: "Login? What about Logan?",

    });

};