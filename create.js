const connectToDatabase = require('./db');

async function createDocuments() {
  const db = await connectToDatabase();
  const collection = db.collection('myCollection');
  const dataArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  try {
    const result = await collection.insertMany(dataArray);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.error("Error inserting documents:", err);
  } finally {
    await db.client.close();
  }
}

createDocuments();
