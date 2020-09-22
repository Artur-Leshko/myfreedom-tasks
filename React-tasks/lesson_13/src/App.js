import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { CounterList } from './components/Counter/CounterList';
import { CounterEdit } from './components/Counter/CounterEdit';
import { CounterAdd } from './components/Counter/CounterAdd';
import { Menu } from './components/Menu/Menu';

let counter_id = 1;

const CounterActions = {
  COUNTER_ADD: 'counter_add',
  COUNTER_EDIT: 'counter_edit',
  COUNTER_DELETE: 'counter_delete',
  COUNTER_INC: 'counter_inc',
  COUNTER_DEC: 'counter_dec',
}

function reducer(state = {
  counters: []
}, action) {
  switch (action.type) {
    case CounterActions.COUNTER_ADD: {
      const id = counter_id;
      counter_id++;

      return {
        ...state,
        counters: [...state.counters, { id, ...action.payload }]
      }
    }

    case CounterActions.COUNTER_EDIT: {
      const counterIndex = state.counters.findIndex(counter => counter.id === action.payload.counterId);
      const counter = state.counters.find(c => c.id === action.payload.counterId);
      return {
        ...state,
        counters: [...state.counters.slice(0, counterIndex), { id: action.payload.counterId, name: action.payload.name, digit: action.payload.digit}, ...state.counters.slice(counterIndex + 1)]
      }
    }

    case CounterActions.COUNTER_DELETE: {
      return {
        ...state,
        counters: state.counters.filter(counter => counter.id !== action.payload.counterId)
      }
    }

    case CounterActions.COUNTER_INC: {
      const counterIndex = state.counters.findIndex(counter => counter.id === action.payload.counterId);
      const counter = state.counters.find(c => c.id === action.payload.counterId);
      return {
        ...state,
        counters: [...state.counters.slice(0, counterIndex), { ...counter, digit: counter.digit + 1}, ...state.counters.slice(counterIndex + 1)]
      }
    }

    case CounterActions.COUNTER_DEC: {
      const counterIndex = state.counters.findIndex(counter => counter.id === action.payload.counterId);
      const counter = state.counters.find(c => c.id === action.payload.counterId);
      return {
        ...state,
        counters: [...state.counters.slice(0, counterIndex), { ...counter, digit: counter.digit - 1}, ...state.counters.slice(counterIndex + 1)]
      }
    }

    default:
      return state;
  }
}

const CounterActionCreator = {
  addCounter: ({ name, digit }) => ({
    type: CounterActions.COUNTER_ADD,
    payload: {
      name,
      digit
    }
  }),
  deleteCounter: counterId => ({
    type: CounterActions.COUNTER_DELETE,
    payload: {
      counterId
    }
  }),
  editCounter: ({ counterId, name, digit }) => ({
    type: CounterActions.COUNTER_EDIT,
    payload: {
      counterId,
      name,
      digit
    }
  }),
  incCounter: counterId => ({
    type: CounterActions.COUNTER_INC,
    payload: {
      counterId
    }
  }),
  decCounter: counterId => ({
    type: CounterActions.COUNTER_DEC,
    payload: {
      counterId
    }
  })
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ConnectedCounterList = connect(
  state => ({ counters: state.counters }),
  dispatch => ({
    onInc: (counterId) => {
      dispatch(CounterActionCreator.incCounter(counterId))
    },
    onDec: (counterId) => {
      dispatch(CounterActionCreator.decCounter(counterId))
    }
  })
)(CounterList);

const ConnectedCounterAdd = connect(null,
  (dispatch, { history }) => ({
    onAdd: ({ name, digit }) => {
      dispatch(CounterActionCreator.addCounter({ name, digit }));
      history.push('/counters');
    }
  })
)(CounterAdd);

const ConnectedCounterEdit = connect(
  (state, { counterId }) => ({ counter: state.counters.find(c => c.id === counterId) }),
  (dispatch, { history, counterId }) => ({
    onEdit: ({ name, digit }) =>{
      dispatch(CounterActionCreator.editCounter({ counterId, name, digit }));
      history.push('/counters');
    },
    onDelete: () => {
      dispatch(CounterActionCreator.deleteCounter(counterId));
      history.push('/counters');
    }
  })
)(CounterEdit);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/counters' />
            </Route>
            <Route exact path='/counters'>
              <ConnectedCounterList />
            </Route>
            <Route path='/counters/add'>
              {({ history })=> (
                <ConnectedCounterAdd history={history} />
              )}
            </Route>
            <Route path='/counters/:counterId'>
              { ({ history, match: { params: { counterId} } }) => (
                <ConnectedCounterEdit history={history} counterId={Number(counterId)} />
              )}
            </Route>
            <Route>Неверный путь!</Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
