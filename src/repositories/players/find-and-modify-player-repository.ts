import { IStatistics } from "../../model/statistics-model";
import * as database from "../../utils/data-utils";


export const findAndModifyPlayer = async (id: number, statistics: IStatistics) => {
    const data = await database.loadPlayerData();

    const index = data.findIndex(player => player.id === id);

    if (index !== -1) {
        data[index].statistics = statistics;
        await database.writePlayerData(data);

        return data[index];
    } else {
        throw new Error("Player not found");
    }
};