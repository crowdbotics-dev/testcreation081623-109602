import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

const TestScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Test Screen</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>
          This is a test screen component. It includes a placeholder image and some dummy text.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333'
  }
});
export default TestScreen;