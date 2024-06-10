import { validatePlayer } from "../../utils/validation-utils";
import { IPlayer } from "../../model/player-model";
import { HTTPResponse } from "../../model/htpp-response-model";
import * as HttpResponse from "../../utils/http-helper";
import { insertPlayer } from "../../repositories/players/insert-player-repository";

export const postPlayerService = async (player: IPlayer): Promise<HTTPResponse> => {

    try {
        if (Object.keys(player).length) {

            const erros = await validatePlayer(player);

            if (!erros.length) {
                await insertPlayer(player);
                
                return HttpResponse.created();
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
};