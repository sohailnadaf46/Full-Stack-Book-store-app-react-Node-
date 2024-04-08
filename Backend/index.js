import express  from "express";
import { PORT, MongoDBurl } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import BooksRoutes from "./routes/BooksRoutes.js";


const app = express();

//middleware for handling cors policy
// //option 1 : Allow All Origins with Default of cors
app.use(cors());

//option 2:
// app.use(
//   cors({
//     origin:"http://localhost:3000/",
//     methods:['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders:['content-type'],
//   })
// )

//Middleware for parsing the data in the body

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  response.status(234).send("welcome to MERN");
});

app.use("/books", BooksRoutes);


mongoose
  .connect(MongoDBurl)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
