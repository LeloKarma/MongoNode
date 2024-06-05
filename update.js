const connectToDatabase = require('./db');

async function updateDocuments() {
  const db = await connectToDatabase();
  const collection = db.collection('myCollection');

  try {
    const filter = { name: "Alice" };
    const updateDoc = { $set: { age: 26 } };
    const result = await collection.updateOne(filter, updateDoc);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
  } catch (err) {
    console.error("Error updating documents:", err);
  } finally {
    await db.client.close();
  }
}

updateDocuments();
