const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;

//Middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cykplbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const careLevelPriorityMap = {
  easy: 1,
  moderate: 2,
  difficult: 3,
};

async function run() {
  try {
    // await client.connect();
    const plantsCollections = client.db("plantsDB").collection("plants");

    app.post("/plants", async (req, res) => {
      const data = req.body;
      data.createdAt = new Date();
      data.careLevelPriority = careLevelPriorityMap[data.careLevel];
      const result = await plantsCollections.insertOne(data);
      res.send(result);
    });

    app.get("/plants", async (req, res) => {
      const result = await plantsCollections
        .find()
        .toArray();
      res.send(result);
    });

    app.get("/plants/recent", async (req, res) => {
      const result = await plantsCollections
        .find()
        .sort({ createdAt: -1 })
        .limit(8)
        .toArray();
      res.send(result);
    });

    app.get("/plants/byEmail", async (req, res) => {
      const email = req.query.email;
      const result = await plantsCollections
        .find({ userEmail: email })
        .toArray();
      res.send(result);
    });

    app.get("/plants/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollections.findOne(query);
      res.send(result);
    });

    app.put("/plants/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const data = req.body;
      data.careLevelPriority = careLevelPriorityMap[data.careLevel];
      const doc = {
        $set: {
          url: data.url,
          plantName: data.plantName,
          category: data.category,
          description: data.description,
          careLevel: data.careLevel,
          wateringFrequency: data.wateringFrequency,
          lastWateredDate: data.lastWateredDate,
          nextWateringDate: data.nextWateringDate,
          healthStatus: data.healthStatus,
          userEmail: data.userEmail,
          userName: data.userName,
          careLevelPriority: data.careLevelPriority,
        },
      };
      const result = await plantsCollections.updateOne(query, doc);
      res.send(result);
    });

    app.delete("/plants/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollections.deleteOne(query);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server ");
  console.log("server running fine");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
