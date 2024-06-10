import { HTTPResponse } from "../../model/htpp-response-model";
import { deleteOnePlayer } from "../../repositories/players/delete-one-player-repository";
import * as HttpResponse from "../../utils/http-helper";


export const deletePlayerService = async (id: number): Promise<HTTPResponse> => {

    try {
        await deleteOnePlayer(id);
        return HttpResponse.ok({ message: "deleted" });
    } catch (error) {
        
        if (error instanceof Error) {
            return await HttpResponse.noContent();
        }

        return await HttpResponse.badRequest();
    }
};