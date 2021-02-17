const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const classesRouter = require('./routes/classes');
const usersRouter = require('./routes/users');
const facultyRouter = require('./routes/faculty');
const sectionsRouter = require('./routes/section');
const adminRouter = require('./routes/admins');

app.use('/classes', classesRouter);
app.use('/users', usersRouter);
app.use('/faculty', facultyRouter);
app.use('/section', sectionsRouter);
app.use('/admins', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

