const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Définir la base de données et la collection
        const database = client.db("harry_potter_books");
        const collection = database.collection("books");

        // Les données des livres de Harry Potter
        const books = [
            {
                title: "Harry Potter à l'école des sorciers",
                release_date: new Date("1997-06-26"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et la Chambre des secrets",
                release_date: new Date("1998-07-02"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et le Prisonnier d'Azkaban",
                release_date: new Date("1999-07-08"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et la Coupe de feu",
                release_date: new Date("2000-07-08"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et l'Ordre du Phénix",
                release_date: new Date("2003-06-21"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et le Prince de sang-mêlé",
                release_date: new Date("2005-07-16"),
                genre: "Fantasy"
            },
            {
                title: "Harry Potter et les Reliques de la Mort",
                release_date: new Date("2007-07-21"),
                genre: "Fantasy"
            }
        ];

        // Insérer les livres dans la collection
        const result = await collection.insertMany(books);
        console.log(`${result.insertedCount} livres insérés avec succès !`);

        // Afficher tous les documents de la collection
        const allBooks = await collection.find().toArray();
        console.log(allBooks);
    } finally {
        // Fermer la connexion au client MongoDB
        await client.close();
    }
}

main().catch(console.error);
