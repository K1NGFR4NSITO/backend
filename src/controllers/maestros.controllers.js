import { getConnection } from "./../database/database.js";

// Obtener todos los maestros
const getMaestros = async (req, res) => {
    try {
        const [result] = await getConnection.query("SELECT * FROM Maestros");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtener un maestro por su ID
const getMaestroById = async (req, res) => {
    try {
        const { id_maestro } = req.params;
        const [result] = await getConnection.query(
            "SELECT * FROM Maestros WHERE ID_Maestro = ?",
            [id_maestro]
        );
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Insertar un nuevo maestro
const insertMaestro = async (req, res) => {
    try {
        const { nombre, apellido, materia } = req.body;
        const [result] = await getConnection.query(
            "INSERT INTO Maestros (Nombre, Apellido, Materia) VALUES (?, ?, ?)",
            [nombre, apellido, materia]
        );
        res.status(201).json({ message: "Maestro agregado exitosamente", id_maestro: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const maestrosMethods = {
    getMaestros,
    getMaestroById,
    insertMaestro,
};
