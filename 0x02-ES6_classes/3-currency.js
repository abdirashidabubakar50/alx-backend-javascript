export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // getter method for code
  get code() {
    return this._code;
  }

  // getteer methode for getting  name
  get name() {
    return this._name;
  }

  // setter attribute that sets code
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('value must be a string');
    }
    this._code = value;
  }

  // setter method that sets name attribute
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('value must be a string');
    }

    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
