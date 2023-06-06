import express from 'express';

const app = express();

//default to port 5000 if no env PORT is specified
const PORT = process.env.USER_SERVICE_PORT || 5000;

app.get('/api/hello', async (req, res) => {
  res.status(200).json({ msg: 'Hello world!' });
});

//Start server
app.listen(PORT, () => {
  console.log(`User service listening on port ${PORT}`);
});
