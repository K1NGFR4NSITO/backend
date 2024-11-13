import express from "express";
import morgan from "morgan";
import cors from "cors";
//Routes
import usuariosRoutes from "./routes/usuarios.routes.js";
import serviciosRoutes from "./routes/servicios.routes.js";
import informesRoutes from "./routes/informes.routes.js";
import pacientesRoutes from "./routes/pacientes.routes.js";
import pacientes2Routes from "./routes/pacientes2.routes.js";       //esta
import fproductosRoutes from "./routes/productos.routes.js";
import fproveedoresRoutes from "./routes/proveedores.routes.js";
import fventasRoutes from "./routes/ventas.routes.js";
import freabastecimientoRoutes from "./routes/reabastecimiento.routes.js";
import reportesRoutes from "./routes/reportes.routes.js";
//import asistenciaRoutes from "./routes/asistencia.routes.js"; // Importa las rutas de asistencia
import notasRoutes from "./routes/notas.routes.js";
import maestrosRoutes from "./routes/maestros.routes.js";
import cursosRoutes from "./routes/cursos.routes.js";


const app = express();


// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/servicios", serviciosRoutes);
app.use("/api/informes", informesRoutes);
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/pacientes2", pacientes2Routes);

app.use("/api/productos", fproductosRoutes);
app.use("/api/proveedores", fproveedoresRoutes);
app.use("/api/reabastecer", freabastecimientoRoutes);
app.use("/api/ventas", fventasRoutes);
app.use("/api/reportes", reportesRoutes);
//app.use("/api/asistencia", asistenciaRoutes); // Añade la ruta de asistencia
app.use("/api/notas", notasRoutes);
app.use("/api/maestros", maestrosRoutes);
app.use("/api/cursos", cursosRoutes);


export default app;