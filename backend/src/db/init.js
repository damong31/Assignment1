import mongoose from 'mongoose';

export async function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL;

  try {
    await mongoose.connect(DATABASE_URL);

    console.info('Successfully connected to database:', DATABASE_URL);
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    throw error;
  }
}
