import * as database from '../../utils/data-utils';

export const deleteOnePlayer = async (id: number) => {
    const data = await database.loadPlayerData();

    const index = data.findIndex(player => player.id === id);

    if (index !== -1) {
        data.splice(index, 1);
        await database.writePlayerData(data);
    } else {
        throw new Error("Player not found");
    }
};