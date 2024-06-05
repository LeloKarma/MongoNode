const connectToDatabase = require("./db");

async function readDocuments() {
    const db = await connectToDatabase();

    const collection = db.collection("myCollection"); // Corrected variable name

    try {
        const documents = await collection.find({}).toArray();

        documents.forEach((doc) => {
            console.log(`Document ID: ${doc._id}, Name: ${doc.name}, Age: ${doc.age}`); // Corrected variable name and added missing closing parenthesis
        });
    } catch (err) {
        console.error("Error reading documents:", err);
    } finally {
        await db.client.close();
    }
}

readDocuments();
