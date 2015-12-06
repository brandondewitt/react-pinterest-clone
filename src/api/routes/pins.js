import express from 'express';
import bodyParser from 'body-parser'
import * as Pin from '../models/pin';
const app = express();
app.use(bodyParser());

app.get('/', (req, res) => {
  Pin
  .find()
    .then(pins => res.send(pins))
    .catch(err => res.send(err));
});

app.get('/:id', (req, res) => {
  Pin
    .findById(req.params.id)
    .then(pin => res.send(pin))
    .catch(err => res.send(err));
});

app.put('/:id', (req, res) => {
  Pin
    .update(req.body)
    .then(pin => res.send(pin))
    .catch(err => res.send(err));
});

app.post('/', (req, res) => {
  Pin
    .create(req.body)
    .then(pin => res.send(pin))
    .catch(err => res.send(err));
});

app.delete('/:id', (req, res) => {
  Pin
    .destroy(req.params.id)
    .then(response => res.send(response))
    .catch(err => res.send(err));
});

export default app;
