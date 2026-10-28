import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { postsRoutes } from './routes/posts.js';

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(cors());

// Register API routes
postsRoutes(app);

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Express Nodemon!');
});

export { app };
