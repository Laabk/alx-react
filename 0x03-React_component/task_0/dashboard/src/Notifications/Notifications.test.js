import React from 'react';
import Notifications from './Notifications';
import { getFullYear, getLatestNotification } from '../Utils/utils';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Notifications renders without crashing', () => {
    render(<Notifications />);
});

test('Notifications renders three list items', () => {
    const listNotifications = [
    {id:1, type:"default", value: "New course available", html: null},
    {id:2, type:"urgent", value: "New resume available", html: null},
    {id:3, type:"urgent", value: "New resume available", html: null},
    ]
    render(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
    const listNotifications = [
    {id:1, type:"urgent", html: getLatestNotification()},
    ]
    render(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(screen.getByText(/Here is the list of notifications/)).toBeInTheDocument();
});
test('getFullYear returns correct year', () => {
    render(<Notifications  displayDrawer={true} />);
    expect(getFullYear()).toBe(new Date().getFullYear());
});
