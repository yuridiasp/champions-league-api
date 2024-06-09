import fs from 'fs';
import path from 'path';

import { IPlayer } from '../../model/players-model';

const dataBase: IPlayer[] = [
    { id:1, name: "Messi" },
    { id:1, name: "Ronaldo" },
]

export const findAllPlayers = async (): Promise<IPlayer[]> => {
    return dataBase;
}

export const findPlayerByID = async (id: number):Promise<IPlayer | undefined> => {
    return dataBase.find( player => player.id === id );
}