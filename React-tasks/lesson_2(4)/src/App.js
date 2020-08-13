import React from 'react';
import PropTypes from "prop-types";
import { Form } from './components/Form/Form';
import { AddButton } from './components/Form/Button/AddButton';
import { Input } from './components/Form/Input/Input';
import { List } from './components/List/List';
import { ListItem } from './components/List/ListItem';
import { DeleteButton } from './components/List/Button/DeleteButton';

Form.propTypes = {
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

AddButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

List.propTypes = {
  className: PropTypes.string.isRequired
};

ListItem.propTypes = {
  moneyText: PropTypes.string.isRequired,
  productsText: PropTypes.string.isRequired
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

class App extends React.Component {
  state = {
    counter: 1,
    items: [],
  }

  render() {
    return(
      <>
        <Form className='form' onSubmit={(e) => {
          e.preventDefault();

          let moneyInput = document.querySelector('.input-money');
          let productsInput = document.querySelector('.input-products');
          const newCounter = this.state.counter + 1;

          const newItem = { id: this.state.counter, money: moneyInput.value, products: productsInput.value };

          this.setState(({items} , props) => ({
            counter: newCounter,
            items: [...items, newItem]
          }));

          moneyInput.value = '';
          productsInput.value = '';
        }}>
            <Input className='input-money' type='text' placeholder='Введите кол-во денег' required={true} />
            <Input className='input-products' type='text' placeholder='Введите продукты' required={true} />
            <AddButton className='add-button' type='submit'>
                Add
            </AddButton>
        </Form>

        <List className='list'>
          {this.state.items.map((item) => (
            <ListItem key={item.id} moneyText={item.money} productsText={item.products}>
              <DeleteButton onClick={() => {
                this.setState(({ items }) => ({
                  items: items.filter((i) => i.id !== item.id),
                }));
              }} />
            </ListItem>
          ))}
        </List>
      </>
    )
  }
}

export default App;
