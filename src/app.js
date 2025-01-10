require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');


const app = express();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:'https://explorebojonegoro-7a669-default-rtdb.firebaseio.com/'
});


app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
const db = admin.firestore();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
