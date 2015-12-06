import Pins from '../data';
let pins = [...Pins];

export const find = () => {
  return new Promise(resolve => {
    resolve(pins);
    return pins;
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    const pin = pins.find(pin => pin.id === Number(id));
    if (pin) {
      return resolve(pin);
    } else {
      return reject('Could not find pin');
    }
  });
};

export const create = (pin) => {
  const id = pins[pins.length - 1].id + 1;
  pins = [...pins, Object.assign({}, pin, { id })];
  return new Promise(resolve => resolve(pins[pins.length - 1]));
};

export const update = (updatedPin) => {
  const pinIndex = pins.findIndex(pin => pin.id === updatedPin.id);
  return new Promise((resolve, reject) => {
    if (pinIndex >= 0) {
      const _pin = Object.assign({}, pins[pinIndex], updatedPin);
      pins = [
        ...pins.slice(0, pinIndex),
        _pin,
        ...pins.slice(pinIndex + 1)
      ];
      return resolve(_pin);
    } else {
      return reject('Could not find pin');
    }
  });
};

export const destroy = (id) => {
  const pinIndex = pins.findIndex(pin => pin.id === Number(id));
  return new Promise((resolve, reject) => {
    if (pinIndex >= 0) {
      pins = [
        ...pins.slice(0, pinIndex),
        ...pins.slice(pinIndex + 1)
      ];
      return resolve();
    } else {
      return reject('Could not find pin');
    }
  });
};
