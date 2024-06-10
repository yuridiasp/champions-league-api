import { Request, Response } from 'express'
import { getClubsService } from '../services/clubs/get-clubs-service';

export const getClubs = async (req: Request, res: Response) => {
    const { statusCode, body } = await getClubsService();

    res.status(statusCode).json(body);
};