import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log(`Connecting to database at: ${mongoUri}`);    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${mongoUri}`);
    });
};


