import { IPlayer } from '../../model/player-model';
import * as database from '../../utils/data-utils';

export const findAllPlayers = async (): Promise<IPlayer[]> => {
    const data = await database.loadPlayerData();
    
    return data;
};