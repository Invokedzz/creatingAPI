import { fanficValidation } from "../types/fanficType";

import { loginType } from "../types/loginType";

import { registerType } from "../types/registerType";

import { Request, Response } from "express";

import { lengthEmailError, lengthPasswordError, lengthUsernameError } from "../errors/lengthErrorUser";

import { textLengthError, titleLengthError, genreLengthError } from "../errors/fanficInputErrors";

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
    
    fanficValue: fanficValidation,

    request: Request,

    response: Response,

): Promise <string []> {

    const errors: string [] = [];

    if (fanficValue.title.length < 10) {

        errors.push("Title must be at least 10 characters long");

        await titleLengthError(request, response);

    };

    if (fanficValue.text.length < 100) {

        errors.push("Text must be at least 100 characters long");

        await textLengthError(request, response);

    };

    if (fanficValue.genre.length < 3) {

        errors.push("Genre must be at least 3 characters long");

        await genreLengthError(request, response);

    };

    return errors;

}