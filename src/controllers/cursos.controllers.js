import { getConnection } from "./../database/database.js";

// Obtener todos los cursos
const getCursos = async (req, res) => {
    try {
        const [result] = await getConnection.query("SELECT * FROM Cursos");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtener los cursos de un nivel
const getCursosByNivel = async (req, res) => {
    try {
        const { nivel_id } = req.params;
        const [result] = await getConnection.query(
            "SELECT * FROM Cursos WHERE Nivel = ?",
            [nivel_id]
        );
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Insertar un nuevo curso
const insertCurso = async (req, res) => {
    try {
        const { nombre_curso, descripcion, nivel, color_curso, maestro_responsable } = req.body;
        const [result] = await getConnection.query(
            "INSERT INTO Cursos (Nombre_Curso, Descripcion, Nivel, Color_Curso, Maestro_Responsable) VALUES (?, ?, ?, ?, ?)",
            [nombre_curso, descripcion, nivel, color_curso, maestro_responsable]
        );
        res.status(201).json({ message: "Curso agregado exitosamente", id_curso: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const cursosMethods = {
    getCursos,
    getCursosByNivel,
    insertCurso,
};
