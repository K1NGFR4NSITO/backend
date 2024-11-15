import {Router, request} from "express";
import {methods as pacientesController} from "./../controllers/pacientes.controller.js";

const router = Router();
//Busquedas
router.get("/pacientes", pacientesController.getPacientes);
router.get("/paciente/:id", pacientesController.getPaciente);
router.get("/historiaAcademica/:id", pacientesController.getHistoriaAcademica); // Cambiado para historia académica
router.get("/medico/:id", pacientesController.getMedicoIDConsulta);
router.get("/fichasMedico/:id/:fecha", pacientesController.getFichasMedico);
router.get("/evolucionPaciente/:id", pacientesController.getEvolucionPaciente);


//Inserciones
router.post("/registrar", pacientesController.addPaciente);
router.post("/registrarHistoriaAcademica", pacientesController.addHistoriaAcademica); // Cambiado para registrar historia académica
router.post("/evolucionMedica", pacientesController.addEvolucionMedica);

//Eliminacion
router.put("/delete/:id", pacientesController.deletePaciente);
router.put("/eliminarPacientes", pacientesController.deletePacientes);

//Actualizaciones
router.put("/actualizar/:id", pacientesController.updatePaciente);
router.put("/finalizarFicha/:id", pacientesController.finalizarFicha);


export default router;