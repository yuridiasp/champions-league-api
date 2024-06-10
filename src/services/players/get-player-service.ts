import * as playerRepository from "../../repositories/players/players-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getPlayersService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }


    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerByID(id);
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};