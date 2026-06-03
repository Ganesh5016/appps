// Jest tests for user authentication
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from './App';
test('renders correctly', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
test('login button works', async () => {
  const { getByText } = render(<App />);
  const loginButton = getByText('Login');
  fireEvent.press(loginButton);
  await waitFor(() => expect(getByText('Welcome, username!')).toBeTruthy());
});