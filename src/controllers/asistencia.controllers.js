import { getConnection } from '../database/db.js';

// Crear o actualizar asistencia
export const registrarAsistencia = async (req, res) => {
  const { ID_Estudiante, Lunes, Martes, Miercoles, Jueves, Viernes } = req.body;

  try {
      // Verificar si el estudiante ya tiene una entrada para la asistencia de la semana
      const [existencia] = await db.query(
          'SELECT * FROM Asistencia WHERE ID_Estudiante = ? AND Fecha = CURRENT_DATE',
          [ID_Estudiante]
      );

      if (existencia.length > 0) {
          // Si ya existe, actualizamos la asistencia
          await db.query(
              `UPDATE Asistencia SET Lunes = ?, Martes = ?, Miercoles = ?, Jueves = ?, Viernes = ? 
               WHERE ID_Estudiante = ? AND Fecha = CURRENT_DATE`,
              [Lunes, Martes, Miercoles, Jueves, Viernes, ID_Estudiante]
          );
          return res.status(200).json({ message: 'Asistencia actualizada correctamente' });
      } else {
          // Si no existe, insertamos un nuevo registro de asistencia
          await db.query(
              `INSERT INTO Asistencia (ID_Estudiante, Lunes, Martes, Miercoles, Jueves, Viernes) 
               VALUES (?, ?, ?, ?, ?, ?)`,
              [ID_Estudiante, Lunes, Martes, Miercoles, Jueves, Viernes]
          );
          return res.status(201).json({ message: 'Asistencia registrada correctamente' });
      }
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al registrar la asistencia' });
  }
};