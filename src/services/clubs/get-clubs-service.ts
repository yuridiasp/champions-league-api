import { HTTPResponse } from "../../model/htpp-response-model";
import { findAllClubs } from "../../repositories/clubs/find-all-clubs-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getClubsService = async ():Promise<HTTPResponse> => {

    const data = await findAllClubs();

    const response = await HttpResponse.ok(data);

    return response;
};