import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB Connection string not defined");
}

const uri = process.env.MONGODB_URI || "mongodb+srv://loks:<password>@starwars.6gus4.mongodb.net/?retryWrites=true&w=majority&appName=starwars";
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client: MongoClient;

if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
        _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new MongoClient(uri, options);
    }

    client = globalWithMongo._mongoClient;
} else {
    client = new MongoClient(uri, options);
}

export default client;