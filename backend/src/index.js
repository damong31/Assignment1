import 'dotenv/config';
import { initDatabase } from './db/init.js';
import { app } from './app.js';

const PORT = Number(process.env.PORT) || 3000;

try {
  await initDatabase();

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`Express server running on http://localhost:${PORT}`);
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Failed to connect to MongoDB:', error);
  process.exitCode = 1;
}
