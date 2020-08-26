import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import './App.css';

const TextInput = ({value, onChange}) => (
  <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder="Text" />
);

const NumericInput = ({value, onChange}) => (
  <input type="number" value={value} onChange={e => onChange(e.target.valueAsNumber)} placeholder="Number" />
);

const withLocalStorage = (Component, initialValue, storageKey) => {
  class WithLocalStorage extends React.Component {
    static displayName = `withLocalStorage(${Component.displayName || Component.name || ""})`;

    state = {
      value: localStorage.getItem(storageKey) ? localStorage.getItem(storageKey) : initialValue,
    }

    onChange = (newValue) => {
      this.setState({value: newValue});
      localStorage.setItem(storageKey, newValue);
    }

    render() {
      return <Component {...this.props} value={this.state.value} onChange={this.onChange} />
    }
  }

  hoistNonReactStatic(WithLocalStorage, Component);

  return WithLocalStorage;
}

const TextInputWithLocalStorage = withLocalStorage(TextInput, '123', 'text-input');
const NumericInputWithLocalStorage = withLocalStorage(NumericInput, 10, 'number-input');

class App extends React.Component {
  render() {
    return(
      <>
      <TextInputWithLocalStorage />
      <NumericInputWithLocalStorage />
      </>
    )
  }
}

export default App;
