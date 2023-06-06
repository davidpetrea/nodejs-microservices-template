import express from 'express';

const app = express();

//default to port 5000 if no env PORT is specified
const PORT = process.env.CLIENT_SERVICE_PORT || 3027;

app.get('/api/hello', async (req, res) => {
  const userResponse = await fetch('http://user-service:5000/api/hello');

  const parsedUserResponse = await userResponse.json();

  const emailResponse = await fetch('http://email-service:5001/api/hello');

  const parsedEmailResponse = await emailResponse.json();

  res.status(200).json({
    msg: 'Hello from CLIENT SERVICE!',
    userService: parsedUserResponse,
    emailService: parsedEmailResponse,
  });
});

//Start server
app.listen(PORT, () => {
  console.log(`Client service listening on port ${PORT}`);
});
