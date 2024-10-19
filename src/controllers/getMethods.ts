import { Request, Response } from "express";

import { messageHome, messageAbout, loginPage, registerPage } from "./messageGET";

import { handlersError404 } from "../errors/error404";

// GET methods

export async function homeMethod (request: Request, response: Response): Promise <void> {
  
    try {

        await messageHome(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);
        
        handlersError404(request, response);

    };

};

export async function aboutMethod (request: Request, response: Response): Promise <void> {

    try {

        await messageAbout(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);

        handlersError404(request, response);

    };

};

export async function registerMethodRender (request: Request, response: Response): Promise <void> {
  
    try {

        await registerPage(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);

        handlersError404(request, response);

    };

};

export async function loginMethodRender (request: Request, response: Response): Promise <void> {

    try {

        await loginPage(request, response);

    } catch (error) {

        console.error("Something went wrong:", error);

        handlersError404(request, response);

    };

};