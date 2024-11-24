const express = require('express');
const dotenv = require('dotenv');
import connectDB from './src/infrastructure/database/db';
// import apiRoutes from './src/api/user/routes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.static('client/build'));

// app.use('/api', apiRoutes);