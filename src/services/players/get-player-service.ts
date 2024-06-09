import * as playerRepository from "../../repositories/players/players-repository";
import { ok, noContent } from "../../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }


    return response;
};