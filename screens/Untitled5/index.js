import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const RedScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Red Screen</Text>
        <Text style={styles.subtitle}>This is a modern screen design</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 32
  },
  imageContainer: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
export default RedScreen;