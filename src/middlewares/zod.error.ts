import { z } from "zod";

import { Response } from "express";

export function zodErrorFunction (response: Response, error: unknown): Response | void {

    if (error instanceof z.ZodError) {

        return response.status(400).json({

            message: error.issues,

            status: 400

        });

    };
};