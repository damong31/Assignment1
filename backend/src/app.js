import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { postsRoutes } from './routes/posts.js';

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(
  cors({
    origin: 'https://lonely-cemetery-q7p76w44r5xrc4vj9-3000.app.github.dev',
  })
);

// Register API routes
postsRoutes(app);

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Express Nodemon!');
});

export { app };
