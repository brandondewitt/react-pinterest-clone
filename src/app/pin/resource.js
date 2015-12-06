import request from 'superagent';

const endpoint = '/api/pins';

export const find = () => {
  return new Promise((resolve, reject) => {
    request
      .get(endpoint)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${endpoint}/${id}`)
      .send({id})
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const create = (pin) => {
  return new Promise((resolve, reject) => {
    request
      .post(endpoint)
      .send(pin)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const update = (pin) => {
  return new Promise((resolve, reject) => {
    request
      .put(`${endpoint}/${pin.id}`)
      .send(pin)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const destroy = (id) => {
  return new Promise((resolve, reject) => {
    request
      .del(`${endpoint}/${id}`)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};
