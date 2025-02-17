import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://devrichardgois:HJdvX7NpDpPNa3@cluster0.80oub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtagAlura");
