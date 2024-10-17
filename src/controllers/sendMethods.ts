import { Request, Response, NextFunction } from "express";

import { homeMethod, aboutMethod } from "./getMethods";

// File created for GET methods only

export const sendHomeMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
  
    await homeMethod(request, response, next);

    next();

};

export const sendAboutMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await aboutMethod(request, response, next);

    next();

};