import { Request, Response } from 'express';

import * as service from '../services/players/get-player-service';

export const getPlayers = async (req: Request, res: Response) => {
    const { statusCode, body } = await service.getPlayersService();

    res.status(statusCode).json(body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const { statusCode, body } = await service.getPlayerByIdService(id);

    res.status(statusCode).json(body);
};
