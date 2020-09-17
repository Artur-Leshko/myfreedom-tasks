import React from 'react';
import { mount } from "enzyme";
import { SignUpForm } from '../SignUpForm';

it('should fill input values', () => {
    const wrapper = mount(<SignUpForm onSignUp={() => {}} onCancel={() => {}} />);
    const login = wrapper.find('[name="login"]');
    const password = wrapper.find('[name="password"]');
    const passwordConfirmation = wrapper.find('[name="password-confirmation"]');

    login.simulate("change", { target: { value: 'Hello' }});
    password.simulate("change", { target: { value: '123' }});
    passwordConfirmation.simulate("change", { target: { value: '321' }});

    expect(wrapper.find('[name="login"]').props().value).toBe('Hello');
    expect(wrapper.find('[name="password"]').props().value).toBe('123');
    expect(wrapper.find('[name="password-confirmation"]').props().value).toBe('321');
});

it('should SignUp with 3 arg by pressing Confirm button', () => {
    const onSignUp = jest.fn();
    const wrapper = mount(<SignUpForm onSignUp={onSignUp} onCancel={() => {}} />);
    const login = wrapper.find('[name="login"]');
    const password = wrapper.find('[name="password"]');
    const passwordConfirmation = wrapper.find('[name="password-confirmation"]');
    const confirmBtn = wrapper.find('[kind="info"]');

    login.simulate("change", { target: { value: 'Hello' }});
    password.simulate("change", { target: { value: '123' }});
    passwordConfirmation.simulate("change", { target: { value: '123' }});

    confirmBtn.simulate('click');

    expect(onSignUp).toHaveBeenCalledTimes(1);
    expect(onSignUp).toHaveBeenCalledWith({
        login: 'Hello',
        password: '123',
        passwordConfirmation: '123'
    });
});

it('should call onCancel by pressing Cancel button', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<SignUpForm onSignUp={() => {}} onCancel={onCancel} />);
    const cancelBtn = wrapper.find('button').at(0);

    cancelBtn.simulate('click');

    expect(onCancel).toHaveBeenCalledTimes(1);
});

it('should show valid message and should not call SignUp if passowrds does not matches', () => {
    const onSignUp = jest.fn();
    const wrapper = mount(<SignUpForm onSignUp={onSignUp} onCancel={() => {}} />);
    const password = wrapper.find('[name="password"]');
    const passwordConfirmation = wrapper.find('[name="password-confirmation"]');
    const confirmBtn = wrapper.find('[kind="info"]');

    password.simulate("change", { target: { value: '123' }});
    passwordConfirmation.simulate("change", { target: { value: '1234' }});

    confirmBtn.simulate('click');

    const validMessage = wrapper.find('.sign-up-form__alert');

    expect(onSignUp).toHaveBeenCalledTimes(0);
    expect(validMessage.text()).toBe('Password and password confirmation should match');
});
