import { Request, Response, NextFunction } from "express";

import { homeMethod, aboutMethod, registerMethodRender, loginMethodRender } from "./getMethods";

// File created for GET methods only

export const sendHomeMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
  
    await homeMethod(request, response, next);

    next();

};

export const sendAboutMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await aboutMethod(request, response, next);

    next();

};

export const sendRegisterRender = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await registerMethodRender(request, response, next);

    next();

};

export const sendLoginRender = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await loginMethodRender(request, response, next);

    next();

};