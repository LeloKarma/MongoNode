const connectToDatabase = require('./db');

async function deleteDocuments() {
  const db = await connectToDatabase();
  const collection = db.collection('myCollection');

  try {
    const filter = { name: "Charlie" };
    const result = await collection.deleteOne(filter);
    console.log(`${result.deletedCount} document(s) was deleted`);
  } catch (err) {
    console.error("Error deleting documents:", err);
  } finally {
    await db.client.close();
  }
}

deleteDocuments();
