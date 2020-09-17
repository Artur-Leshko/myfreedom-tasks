import { mount } from 'enzyme';
import React from 'react';
import { Button, ButtonKind } from '../Button';

// it('should render children in <button> tag', () => {
//     const wrapper = mount(<Button>Click me</Button>);

//     expect(wrapper.find('button')).toBe('button');
// });

it('should call onClick function by pressing', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick}>Click me</Button>);
    const button = wrapper.find('button');

    button.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
});

it('should contain className btn-default if no className is passed', () => {
    const wrapper = mount(<Button>Click me</Button>);
    const button = wrapper.find('button');

    expect(button.props().className).toEqual(expect.stringContaining('btn-default'));
});

it('should contain className btn-info if kind info is passed', () => {
    const wrapper = mount(<Button kind='info'>Click me</Button>);
    const button = wrapper.find('button');

    expect(button.props().className).toEqual(expect.stringContaining('btn-info'));
});

it('should contain className btn-danger if kind danger is passed', () => {
    const wrapper = mount(<Button kind='danger'>Click me</Button>);
    const button = wrapper.find('button');

    expect(button.props().className).toEqual(expect.stringContaining('btn-danger'));
});

it('should contain className btn-danger if isBig = true', () => {
    const wrapper = mount(<Button isBig={true}>Click me</Button>);
    const button = wrapper.find('button');

    expect(button.props().className).toEqual(expect.stringContaining('btn-big'));
});
