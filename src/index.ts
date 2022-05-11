import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

const app = express();

const PORT = 9001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});

app.get("/", (_, res) => {
  res.send("Hello World");
});

export default app;
