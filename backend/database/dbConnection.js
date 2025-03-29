import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log(`Connecting to database at: ${process.env.MONGO_URI}`);    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${process.env.MONGO_URI}`);
    });
};


