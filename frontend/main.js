// Import React and React Native
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
// Create a new React component
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Handle login button press
  const handleLogin = () => {
    // Call backend API to authenticate user
    fetch('https://example.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid username or password');
      }
    });
  };
  return (
    <View>
      <Text>SocialConnect</Text>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={handleLogin} />
      {isLoggedIn ? (
        <View>
          <Text>Welcome, {username}!</Text>
          <Button title='Logout' onPress={() => setIsLoggedIn(false)} />
        </View>
      ) : null}
    </View>
  );
};
export default App;