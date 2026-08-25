import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({
	path: `.env.${process.env.NODE_ENV || 'development'}`
});

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/api/message', (req, res) => {
	res.json({
		message: 'Hello from the server'
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});