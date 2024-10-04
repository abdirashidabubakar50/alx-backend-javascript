import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (!currency instanceof Currency) {
      throw new TypeError('currency must be of currency type');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // getter method for amoutn
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof amount) this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, convertionRate) {
    return amount * convertionRate;
  }
}
