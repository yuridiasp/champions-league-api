import { IClub } from "../../model/club-model";
import { loadClubData } from "../../utils/data-utils";

export const findAllClubs = async ():Promise<IClub[]> => {
    const data = await loadClubData();

    return data;
};