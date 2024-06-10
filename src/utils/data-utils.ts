import fs from 'fs';
import path from 'path';

import { IPlayer } from '../model/player-model';
import { IClub } from '../model/club-model';

const playerDataPath = path.join(__dirname, "..", "data", "players.json");
const clubDataPath = path.join(__dirname, "..", "data", "clubs.json");

export const loadPlayerData = async ():Promise<IPlayer[]> => {
    
    const data = fs.readFileSync(playerDataPath, 'utf8');

    const json:IPlayer[] = JSON.parse(data);

    return json;
};

export const writePlayerData = async (data: IPlayer[]) => {
    fs.writeFileSync(playerDataPath, JSON.stringify(data, null, 2), 'utf-8');
};

export const loadClubData = async ():Promise<IClub[]> => {
    
    const data = fs.readFileSync(clubDataPath, 'utf8');

    const json:IClub[] = JSON.parse(data);

    return json;
};