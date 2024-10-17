import { Request, Response } from "express";

export function handlersError404 (request: Request, response: Response): void {

    response.status(404).json({

        status: "Not found",

        message: "Please, try another route",

    });

};