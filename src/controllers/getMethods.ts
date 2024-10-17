import { Request, Response, NextFunction } from "express";

export async function homeMethod (request: Request, response: Response, next: NextFunction): Promise <void> {
  
    try {

        response.status(200).json({
           
            status: "OK",

            message: "Welcome! Make yourself home",

        });

    } catch (error) {

        console.error("Something went wrong:", error);
        
        response.status(401).json({

            status: "Not found",

            message: "Please, try another route",

        });

    };

};

export function aboutMethod (request: Request, response: Response, next: NextFunction): void {

};