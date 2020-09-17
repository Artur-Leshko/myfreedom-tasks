import React from 'react';
import { mount } from 'enzyme';
import { User } from '../User';
import { UserList } from '../UserList';

it('should render the same number of users as were passed and in the same order ', () => {
    const users =  [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Billy'},
        {id: 3, name: 'Pit'}
    ]
    const wrapper = mount(<UserList users={users} onEdit={() => {}} onDelete={() => {}} />);
    const usersList = wrapper.find(User);

    expect(usersList.length).toBe(3);
    expect(usersList.at(0).prop('name')).toBe('Alex');
    expect(usersList.at(1).prop('name')).toBe('Billy');
    expect(usersList.at(2).prop('name')).toBe('Pit');
});

it('should render the Delete button and Edit button near every user', () => {
    expect.assertions(6);

    const users =  [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Billy'},
        {id: 3, name: 'Pit'}
    ]
    const wrapper = mount(<UserList users={users} onEdit={() => {}} onDelete={() => {}} />);
    const usersList = wrapper.find(User);

    usersList.forEach(user => {
        const editBtn = user.find('[kind="info"]');
        const deleteBtn = user.find('[kind="danger"]');

        expect(editBtn.text()).toBe('Edit');
        expect(deleteBtn.text()).toBe('Delete');
    });
});

it('should call Edit function and passes user id by pressing Edit button', () => {
    const users =  [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Billy'},
        {id: 3, name: 'Pit'}
    ]
    const onEdit = jest.fn();
    const wrapper = mount(<UserList users={users} onEdit={onEdit} onDelete={() => {}} />);
    const user = wrapper.find(User).at(1);

    const editBtn = user.find('button').at(0);

    editBtn.simulate('click');

    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onEdit).toHaveBeenCalledWith(2);
});

it('should call Delete function and passes user id by pressing Delete button', () => {
    const users =  [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Billy'},
        {id: 3, name: 'Pit'}
    ]
    const onDelete = jest.fn();
    const wrapper = mount(<UserList users={users} onEdit={() => {}} onDelete={onDelete} />);
    const user = wrapper.find(User).at(2);

    const deleteBtn = user.find('button').at(1);

    deleteBtn.simulate('click');

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(3);
});
