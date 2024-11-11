import { Router } from "express";
import { notasMethods } from "../controllers/notas.controllers.js";

const router = Router();

router.get("/notas/estudiante/:id_estudiante", notasMethods.getNotasByEstudiante);
router.post("/notas", notasMethods.insertNota);

export default router;
