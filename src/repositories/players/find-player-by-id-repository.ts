import { IPlayer } from '../../model/player-model';
import * as database from '../../utils/data-utils';

export const findPlayerByID = async (id: number):Promise<IPlayer | undefined> => {
    const data = await database.loadPlayerData();
    
    return data.find( (player: { id: number; }) => player.id === id );
};