const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const events = require('./routes/api/events');
const db = require('./config/keys').mongoURI;
const app = express();
const bodyParser = require('body-parser');

mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Sup, foo")); 
app.use("/api/users", users); 
app.use("/api/events", events); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
