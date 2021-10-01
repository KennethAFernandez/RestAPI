import express from 'express';
import controller from '../controllers/dates'

const app = express.Router();

app.get('/get/dates', controller.getDates);

export = app;