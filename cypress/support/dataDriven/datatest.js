require('dotenv').config({path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.staging"});

export const email = 'LucileneMartinsQA';
export const name = 'Lucilene';
export const lastName = 'QA';
export const password = process.env.PASSWORDEMAIL;
export const confirmPassword = process.env.PASSWORDEMAIL;


