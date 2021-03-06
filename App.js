import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState(
    'Open up App.js to start working on your app!'
  );
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Press on me" onPress={() => setText('Text is changed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
