import { Request, Response } from 'express';

import { getPlayersService } from '../services/players/get-players-service';
import { getPlayerByIdService } from '../services/players/get-player-by-id-service';
import { postPlayerService } from '../services/players/post-player-service';
import { deletePlayerService } from '../services/players/delete-player-service';
import { IStatistics } from '../model/statistics-model';
import { updatePlayerService } from '../services/players/update-player-service';

export const getPlayers = async (req: Request, res: Response) => {
    const { statusCode, body } = await getPlayersService();

    res.status(statusCode).json(body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const { statusCode, body } = await getPlayerByIdService(id);

    res.status(statusCode).json(body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;

    const { statusCode, body } = await postPlayerService(bodyValue);
    
    res.status(statusCode).json(body);
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const { statusCode, body } = await deletePlayerService(id);

    res.status(statusCode).json(body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const bodyValues:IStatistics = req.body;

    const { statusCode, body } = await updatePlayerService(id, bodyValues);

    res.status(statusCode).json(body);
}