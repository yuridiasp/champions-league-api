import * as HttpResponse from "../../utils/http-helper";
import { HTTPResponse } from "../../model/htpp-response-model";
import { findPlayerByID } from "../../repositories/players/find-player-by-id-repository";

export const getPlayerByIdService = async (id: number): Promise<HTTPResponse> => {
    const data = await findPlayerByID(id);

    if (data) {
        return await HttpResponse.ok(data);
    }

    return await HttpResponse.noContent();
};