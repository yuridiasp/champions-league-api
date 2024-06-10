import { IPlayer } from "../model/player-model";
import { IStatistics } from "../model/statistics-model";

export const validateStatistics = async (statistics: IStatistics): Promise<string[]> => {
    const erros = [];
    const { Overall, Pace, Shooting, Passing, Dribbling, Defending, Physical } = statistics;

    if (!Overall) {
        erros.push("statistics_Overall");
    }

    if (!Pace) {
        erros.push("statistics_Pace");
    }

    if (!Shooting) {
        erros.push("statistics_Shooting");
    }

    if (!Passing) {
        erros.push("statistics_Passing");
    }

    if (!Dribbling) {
        erros.push("statistics_Dribbling");
    }

    if (!Defending) {
        erros.push("statistics_Defending");
    }

    if (!Physical) {
        erros.push("statistics_Physical");
    }

    return erros;
};

export const validatePlayer = async (player: IPlayer): Promise<string[]> => {
    const erros:string[] = []

    const { name, club, nationality, position, statistics } = player;
    const errosStatistics = await validateStatistics(statistics);
    

    if (!name) {
        erros.push("name");
    }

    if (!club) {
        erros.push("club");
    }

    if (!nationality) {
        erros.push("nationality");
    }

    if (!position) {
        erros.push("position");
    }

    if (errosStatistics.length) {
        erros.push(...errosStatistics);
    }

    return erros;
}