import { Request, Response, NextFunction } from "express";

import { messageHome, messageAbout } from "./messageGET";

import { handlersError404 } from "../errors/error404";

export async function homeMethod (request: Request, response: Response, next: NextFunction): Promise <void> {
  
    try {

        await messageHome(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);
        
        handlersError404(request, response);

    };

};

export async function aboutMethod (request: Request, response: Response, next: NextFunction): Promise <void> {

    try {

        await messageAbout(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);

        handlersError404(request, response);

    };

};