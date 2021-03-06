import React from "react";
import { Col, Form } from "react-bootstrap";
import { Input } from "./Input";
import { UserForm } from "./UserForm";

/*
  В рамках данного задания необходимо реализовать компонент LocalStorage, который реализует шаблон render prop
  и дает возможность другим компонентам читать и писать в localStorage.
  Ваша задача реализовать функции save и load.
*/

function save(storageKey, value) {
  /*
    Эта функция сохраняет переданное знчаение в localStorage.
    Ключ, куда сохранять тоже должен быть аргументом функции.
    Не забывайте, что объекты нужно предварительно трансформировать в строку с помощью JSON.stringify.
  */
  const transformedValue = JSON.stringify(value);
  localStorage.setItem(storageKey, transformedValue);
}

function load(storageKey) {
  /*
    Эта функция читает из localStorage значение, хранящееся по переданному в качестве аргумента ключу.
    Не забывайте, что:
    - изначально там может ничего не храниться
    - там может храниться объект в JSON, который надо предварительно трансформировать в объект JS при
      помощи JSON.parse.
  */
  const data = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : null
  return data;
}

class LocalStorage extends React.Component {

  render() {
    return this.props.children({save, load});
  }
}

export const Task1 = () => (
  <>
    <Col>
      <Form>
        <Form.Label>Input with value from localStorage</Form.Label>
        <LocalStorage>
          {({ save, load }) => (
            <Input
              // загружаем начально значение из localStorage
              defaultValue={load("input-value")}
              // сохраняем в localStorage при изменении значения в input'e
              onChange={value => save("input-value", value)}
            />
          )}
        </LocalStorage>
      </Form>
    </Col>
    <Col>
      <LocalStorage>
        {({ save, load }) => (
          <UserForm
            // загружаем пользователя из localStorage
            user={load("user")}
            // по нажатию на Save сохраняем пользователя в localStorage
            onSave={user => save("user", user)}
          />
        )}
      </LocalStorage>
    </Col>
  </>
);

Task1.title = "1. Render prop. LocalStorage";
Task1.description =
  "Реализуйте функции save и load. " +
  "При перезагрузке страницы значения в input'ах должны быть те же";
