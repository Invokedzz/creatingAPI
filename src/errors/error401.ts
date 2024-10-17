// Page for Unauthorized error

import { Request, Response } from "express";

export function handlersError401 (request: Request, response: Response): void {

    response.status(401).json({

        status: "Unauthorized",

        message: "Just register in the page, dumbass",

    });

};