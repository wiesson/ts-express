import * as express from 'express';

const app = express();
const port = process.env.PORT || 2015;

app.set('x-powered-by', false);

app.get('/login', async (req, res) => {
  try {
    res.send({ hello: 'user' });
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }

  setTimeout(() => console.log(`User logged in at ${new Date()}`), 2000);
});

app.listen(port, () => console.log(`Started on port ${port}!`));
