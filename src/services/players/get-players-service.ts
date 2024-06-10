import { findAllPlayers } from "../../repositories/players/find-all-players-repository";
import * as HttpResponse from "../../utils/http-helper";


export const getPlayersService = async () => {
    const data = await findAllPlayers();

    if (data) {
        return  await HttpResponse.ok(data);
    }

    return await HttpResponse.noContent();
};
