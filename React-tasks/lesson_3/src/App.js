import React from 'react';
import './PhoneInput.css';
import './CardForm.css';

// First Task //

function validBelarussinPhoneNumber(phoneNumber) {
  const codes = ['44', '29', '33', '25'];
  const firstFourSigns = phoneNumber.slice(0, 4).includes('+375') ? true : false;
  const numberCode = phoneNumber.slice(4, 6);
  const lastDigitsArray = phoneNumber.slice(6).split('');

  let falseCode = false;
  let lastDigits = false;

  for (let code of codes) {
    if(numberCode === code){
      falseCode = true;
      break;
    }
  }

  let trigger = true;

  for(let digit of lastDigitsArray) {
    if(digit < '0' || digit > '9'){
      trigger = false;
      break;
    }
  }

  if(trigger && lastDigitsArray.length === 7) {
    lastDigits = true;
  }

  return firstFourSigns && falseCode && lastDigits;
}

class PhoneInput extends React.Component {
  state = {
    mobile: '',
    touched: false
  }

  render() {
    return(
      <>
        <input
          type="phone"
          className={`by-phone ${!validBelarussinPhoneNumber(this.state.mobile) && this.state.touched ? 'phone-error' : ''}`} maxLength="13"
          onChange={(e) => {
            this.setState({
              mobile: e.target.value,
            });
          }} onBlur={(e) => {
            this.setState({
              touched: true
            });
          }}
        />
      </>
    )
  }
}

// Second and Third Task //

function validateCardNumber(cardNumber) {
  let cardNumberErrors = [];

  if(cardNumber.length !== 16) {
    cardNumberErrors.push('This field must consist of 16 signs!');
  }

  return cardNumberErrors;
}

function validateCardHolder(cardHolder) {
  let cardHolderErrors = [];

  for(let letter of cardHolder) {
    if(letter < 'A' || letter > 'z') {
      cardHolderErrors.push('This field must ONLY consist of latin signs!');
      break;
    }
  }

  return cardHolderErrors;
}

function validateDate(month, year) {
  let dateErrors = {month: [], year: []};
  const nowMonth = new Date().getMonth();
  let nowYear = new Date().getFullYear();

  if(year < String(nowYear).slice(2)) {
    dateErrors.year.push('Your card is expired last year!');
  } else if (month < nowMonth) {
    dateErrors.month.push('Your card is expired in this year!');
  }

  return dateErrors;
}

function validateCVV(cvv) {
  let cvvErrors = [];

  if(cvv.length !== 3 && cvv.length !== 4) {
    cvvErrors.push('This field must consist of at least 3 signs!');
  }

  return cvvErrors;
}

class CardForm extends React.Component {
  state = {
    cardNumber: '',
    cardHolder: '',
    month: '',
    year: '',
    cvv: '',
    errors: {
      cardNumber: [],
      cardHolder: [],
      date: {
        month: [],
        year: []
      },
      cvv: []
    }
  }

  onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    switch(name) {
      case 'cardNumber': value = value.slice(0, 16);
        break;
      case 'month': value = value.slice(0, 2);
        if(Number(value) > 12) {
          value = value.slice(0, 1);
        }
        break;
      case 'year': value = value.slice(0, 2);
        break;
      case 'cvv': value = value.slice(0, 4);
        break;
      default: break;
    }

    this.setState({
      [name]: value
    });
  }

  render() {
    const shouldMarkError = field => {
      if(field === 'year' || field === 'month') {
        var hasError = Boolean(this.state.errors.date[field].length);
      } else {
        var hasError = Boolean(this.state.errors[field].length);
      }

      return hasError;
    }

    return(
      <form onSubmit={(e) => {
        e.preventDefault();

        this.setState({
          errors: {
            cardNumber: validateCardNumber(this.state.cardNumber),
            cardHolder: validateCardHolder(this.state.cardHolder),
            date: {
              ...validateDate(this.state.month, this.state.year)
            },
            cvv: validateCVV(this.state.cvv)
          }
        });
      }}>
        <label>Card number:
          <input
            name='cardNumber'
            className={`number ${shouldMarkError('cardNumber') ? 'error' : ''}`}
            type='number'
            required = {true}
            value={this.state.cardNumber}
            onChange={this.onChange}
          />
        </label>
        {this.state.errors.cardNumber.length ?
          this.state.errors.cardNumber.map((error, index) => (
            <span key={index} className="span-error">
              {error}
            </span>
          ))
          : null}

        <label>Card holder:
          <input
            name='cardHolder'
            className={`holder ${shouldMarkError('cardHolder') ? 'error' : ''}`}
            type='text'
            required = {true}
            value={this.state.cardHolder}
            onChange={this.onChange}
          />
        </label>
        {this.state.errors.cardHolder.length ?
          this.state.errors.cardHolder.map((error, index) => (
            <span key={index} className="span-error">
              {error}
            </span>
          ))
          : null}

        <label>Valid until:
          <input
            name='month'
            className={`month ${shouldMarkError('month') ? 'error' : ''}`}
            type='number'
            required = {true}
            placeholder='Month'
            value={this.state.month}
            onChange={this.onChange}
          />

          <input
            name='year'
            className={`year ${shouldMarkError('year') ? 'error' : ''}`}
            type='number'
            required = {true}
            placeholder='Year'
            value={this.state.year}
            onChange={this.onChange}
          />
        </label>
        {this.state.errors.date.month.length ?
          this.state.errors.date.month.map((error, index) => (
            <span key={index} className="span-error">
              {error}
            </span>
          ))
          : null}
        {this.state.errors.date.year.length ?
          this.state.errors.date.year.map((error, index) => (
            <span key={index} className="span-error">
              {error}
            </span>
          ))
          : null}


        <label>CVV:
          <input
            name='cvv'
            className={`cvv ${shouldMarkError('cvv') ? 'error' : ''}`}
            type='number'
            required = {true}
            value={this.state.cvv}
            onChange={this.onChange}
          />
        </label>
        {this.state.errors.cvv.length ?
          this.state.errors.cvv.map((error, index) => (
            <span key={index} className="span-error">
              {error}
            </span>
          ))
          : null}

        <button className='submitButton' type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <>
        First Task:
        <PhoneInput />
        <br/><br/>
        Second and Third Task:
        <CardForm />
      </>
    )
  }
}

export default App;
