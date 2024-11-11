import { getConnection } from "./../database/database.js";

// Obtener todas las notas de un estudiante en un curso
const getNotasByEstudiante = async (req, res) => {
    try {
        const { id_estudiante } = req.params;
        const [result] = await getConnection.query(
            "SELECT n.ID_Nota, n.Nota, n.Fecha, m.Nombre_Materia, c.Nombre_Curso FROM Notas n JOIN Materias m ON n.ID_Materia = m.ID_Materia JOIN Cursos c ON n.ID_Curso = c.ID_Curso WHERE n.ID_Estudiante = ?",
            [id_estudiante]
        );
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Insertar una nueva nota
const insertNota = async (req, res) => {
    try {
        const { id_estudiante, id_curso, id_materia, nota, fecha } = req.body;
        const [result] = await getConnection.query(
            "INSERT INTO Notas (ID_Estudiante, ID_Curso, ID_Materia, Nota, Fecha) VALUES (?, ?, ?, ?, ?)",
            [id_estudiante, id_curso, id_materia, nota, fecha]
        );
        res.status(201).json({ message: "Nota agregada exitosamente", id_nota: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const notasMethods = {
    getNotasByEstudiante,
    insertNota,
};
