const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT=5000;
const dbName = 'campus-connect';

//middleware to parse json
app.use(express.json())
mongoURI = "mongodb+srv://atharvadixit104:ZyAAE5E8KIpQlx61@lockoutbotad.fcx7gto.mongodb.net/campus-connect?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // List collections in the "campus-connect" database
    const collectionsList = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:');
    collectionsList.forEach(collection => console.log(`- ${collection.name}`));

  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
res.send('Hello World');
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});