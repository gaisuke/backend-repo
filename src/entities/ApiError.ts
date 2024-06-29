import { Response } from "express";

export class ApiError extends Error {
    statusCode: number;
    
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleApiError = (err: ApiError, res: Response) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({status: 'error', statusCode, message});
}