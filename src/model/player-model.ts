import { IStatistics } from "./statistics-model";

export interface IPlayer {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: IStatistics;
};