const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/itemDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use('/items', itemRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
