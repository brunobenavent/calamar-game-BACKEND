import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("⚠️ DATABASE_URL no está definida en el .env");
        }

        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            dbName: "calamar_game", // Asegura que siempre se use la misma base de datos
        });

        console.log(colors.magenta.bold(`🔥MongoDB conectado en: ${conn.connection.host}`));
    } catch (error) {
        console.error(colors.red.bold("❌Error al conectar a MongoDB"), error);
        process.exit(1);
    }
};