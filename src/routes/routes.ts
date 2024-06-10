import { Router } from 'express';

import { getPlayers, getPlayerById, postPlayer, deletePlayer, updatePlayer } from '../controller/players-controller';
import { getClubs } from '../controller/clubs-controller';

const router = Router();


router.get("/players", getPlayers);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerById);

router.get("/clubs", getClubs);

export default router;