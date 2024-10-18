import { fanficValidation } from "../types/fanficType";

import { loginType } from "../types/loginType";

import { registerType } from "../types/registerType";

export function validateRegisterLength (

    registerValues: registerType,

): string [] {

    const errors: string [] = [];  

    if (registerValues.password.length < 6) {

        errors.push("Password must be at least 6 characters long");

        

    };

    return errors;

};

export function validateLoginLength (

    loginValues: loginType,

): string [] {

    const errors: string [] = [];

    return errors;

};

export function validateFanficLength (
    
    fanficValue: fanficValidation

): string [] {

    const errors: string [] = [];

    return errors;

}