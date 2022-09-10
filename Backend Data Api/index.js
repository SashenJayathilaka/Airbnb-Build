import express from "express";
import mongoose from "mongoose";
import MediumCard from "./MediumCard.js";
import InfoCard from "./InfoCard.js";
import SmallCard from "./SmallCard.js";

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Header", "*"),
    next();
});

// Db config
const connection_Url =
  "mongodb+srv://sashen:EHR1DI20mlQ1unPT@cluster0.w9dh9h6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("Airbnb Build"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/medium/posts", (req, res) => {
  MediumCard.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/medium/posts", (req, res) => {
  // POST request is to Add Data to the databases
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  const dbAirbnb = req.body;

  MediumCard.create(dbAirbnb, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/info/posts", (req, res) => {
  InfoCard.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/info/posts", (req, res) => {
  // POST request is to Add Data to the databases
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  const dbAirbnb = req.body;

  InfoCard.create(dbAirbnb, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/small/posts", (req, res) => {
  SmallCard.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/small/posts", (req, res) => {
  // POST request is to Add Data to the databases
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  const dbAirbnb = req.body;

  SmallCard.create(dbAirbnb, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`listen on localhost:${port}`));
