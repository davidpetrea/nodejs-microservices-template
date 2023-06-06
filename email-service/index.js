import express from 'express';

const app = express();

//default to port 5000 if no env PORT is specified
const PORT = process.env.EMAIL_SERVICE_PORT || 5001;

app.get('/api/hello', (req, res) => {
  res.status(200).json({ msg: 'Hello world but from email!' });
});

//Start server
app.listen(PORT, () => {
  console.log(`Email service listening on port ${PORT}`);
});
