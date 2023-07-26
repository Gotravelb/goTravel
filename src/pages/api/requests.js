import { connectToDatabase } from "../../db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();
  if (req.method === "GET") {
    const requests = await db.collection("requests").find().toArray();
    res.status(200).json(requests);
  } else {

    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
