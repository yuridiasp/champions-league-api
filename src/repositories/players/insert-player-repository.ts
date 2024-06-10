import { IPlayer } from '../../model/player-model';
import * as database from '../../utils/data-utils';


export const insertPlayer = async (player: IPlayer) => {
    const data = await database.loadPlayerData();

    data.push(player);

    database.writePlayerData(data);
};