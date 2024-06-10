import { HTTPResponse } from "../model/htpp-response-model";

export const ok = async (data: any): Promise<HTTPResponse> => {
    return {
        statusCode: 200,
        body: data
    };
};

export const created = async (): Promise<HTTPResponse> => {
    return {
        statusCode: 201,
        body: null
    };
};

export const noContent = async (): Promise<HTTPResponse> => {
    return {
        statusCode: 204,
        body: null
    };
};

export const badRequest = async (error = new Error("Unknown error")): Promise<HTTPResponse> => {
    return {
        statusCode: 400,
        body: error.message
    };
};