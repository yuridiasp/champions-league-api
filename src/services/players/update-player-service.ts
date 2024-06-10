import { HTTPResponse } from "../../model/htpp-response-model";
import { IStatistics } from "../../model/statistics-model";
import { findAndModifyPlayer } from "../../repositories/players/find-and-modify-player-repository";
import * as HttpResponse from "../../utils/http-helper";
import { validateStatistics } from "../../utils/validation-utils";


export const updatePlayerService = async (id: number, statistics: IStatistics):Promise<HTTPResponse> => {
    try {
        if (Object.keys(statistics).length) {

            const erros = await validateStatistics(statistics);

            if (!erros.length) {
                const data = await findAndModifyPlayer(id, statistics);
                
                return await HttpResponse.ok(data);
            }

            throw new Error("There is missing data: " + erros.join(", "));
        }

        throw new Error("No information received");
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            return await HttpResponse.badRequest(error);
        } else {
            return await HttpResponse.badRequest();
        }
    }
}