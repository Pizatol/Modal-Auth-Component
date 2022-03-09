
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
const client = await MongoClient.connect("mongodb+srv://Pizatol:pJd8hdVEHYZQqhuE@clusterauth.zk72a.mongodb.net/nextAuth?retryWrites=true&w=majority")
return client;
}