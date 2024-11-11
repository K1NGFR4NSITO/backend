import { Router } from "express";
import { cursosMethods } from "../controllers/cursos.controllers.js";

const router = Router();

router.get("/cursos", cursosMethods.getCursos);
router.get("/cursos/nivel/:nivel_id", cursosMethods.getCursosByNivel);
router.post("/cursos", cursosMethods.insertCurso);

export default router;
