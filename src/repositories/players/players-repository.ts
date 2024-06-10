import fs from 'fs';
import path from 'path';

import { IPlayer } from '../../model/player-model';

const loadData = async ():Promise<IPlayer[]> => {
    const dataPath = path.join(__dirname,"..", "..","data", "players.json");
    const data = fs.readFileSync(dataPath, 'utf8');

    const json:IPlayer[] = JSON.parse(data);

    return json;
}

export const findAllPlayers = async (): Promise<IPlayer[]> => {
    const database = await loadData();
    return database;
}

export const findPlayerByID = async (id: number):Promise<IPlayer | undefined> => {
    const database = await loadData();
    
    return database.find( (player: { id: number; }) => player.id === id );
}