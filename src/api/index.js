import express from 'express';
import pins from './routes/pins';
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

export default () => {
  return new Promise(resolve => {
    app.use('/pins', pins);
    resolve(app.listen(3030));
  });
}
