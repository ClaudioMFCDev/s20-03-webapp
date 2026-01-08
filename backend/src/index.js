// Configurations and imports
const config = require("./config");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
const authRouter = require("./routes/authRouter");
const privateRouter = require("./routes/privateRouter");
const userRouter = require("./routes/userRouter");
const dbConnection = require("./db/connection");

// Connect to the database
dbConnection();

// Create the express app
const app = express();

app.set('trust proxy', 1);

// --- CONFIGURACIÓN DE CORS ---
const allowedOrigins = [
  "http://localhost:3000",             // Frontend Local
  "https://classrun.vercel.app",       // Producción
  // Agrega aquí otras URLs si es necesario
];

const corsOptions = {
  origin: function (origin, callback) {
    // permitir solicitudes sin origen (como apps móviles o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    var msg = "The CORS policy for this site does not allow access from the specified Origin.";
    return callback(new Error(msg), false);
  },
  credentials: true, // Importante para las cookies/tokens
};

// Aplicamos CORS una sola vez usando la configuración definida arriba
app.use(cors(corsOptions)); 

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Main routes
app.use("/auth", authRouter);
app.use("/private", authMiddleware, roleMiddleware, privateRouter);
app.use("/api/users", userRouter);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // Corregí un pequeño error aquí: faltaba el signo $ para que se vea el número
  console.log(`Server corriendo en el puerto ${PORT}`); 
});