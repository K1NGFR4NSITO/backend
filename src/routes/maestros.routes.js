import { Router } from "express";
import { maestrosMethods } from "../controllers/maestros.controllers.js";

const router = Router();

router.get("/maestros", maestrosMethods.getMaestros);
router.get("/maestro/:id_maestro", maestrosMethods.getMaestroById);
router.post("/maestros", maestrosMethods.insertMaestro);

export default router;
