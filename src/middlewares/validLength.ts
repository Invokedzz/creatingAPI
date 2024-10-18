import { fanficValidation } from "../types/fanficType";

import { loginType } from "../types/loginType";

import { registerType } from "../types/registerType";

import { Request, Response } from "express";

import { lengthEmailError, lengthPasswordError, lengthUsernameError } from "src/errors/lengthErrorUser";

export async function validateRegisterLength (

    registerValues: registerType,

    request: Request,

    response: Response,

): Promise <string []> {

    const errors: string [] = [];

    if (registerValues.username.length < 6) {

        errors.push("Username must be at least 6 characters long");

        await lengthUsernameError(request, response);

    };
    
    if (registerValues.email.length <= 0) {

        errors.push("Insert a valid email");

        await lengthEmailError(request, response);

    };

    if (registerValues.password.length < 6) {

        errors.push("Password must be at least 6 characters long");

        await lengthPasswordError(request, response);

    };

    return errors;

};

export async function validateLoginLength (

    loginValues: loginType,

    request: Request,

    response: Response,

): Promise <string []> {

    const errors: string [] = [];

    if (loginValues.email.length <= 0) {

        errors.push("Insert a valid email");

        await lengthEmailError(request, response);

    };

    if (loginValues.password.length < 6) {

        errors.push("Password must be at least 6 characters long");

        await lengthPasswordError(request, response);

    };

    return errors;

};

export async function validateFanficLength (
    
    fanficValue: fanficValidation

): Promise <string []> {

    const errors: string [] = [];

    if (!fanficValue.title && !fanficValue.genre && !fanficValue.text) {

        errors.push("Insert title, epilogue and text field");

    };

    return errors;

}