import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.date}>Today's Date</Text>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.description}>Short Description</Text>
      </View>
      <View style={styles.section}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Daily Health Events Logging</Text>
        <TextInput style={styles.input} placeholder="Symptom Input" />
        <TextInput style={styles.input} placeholder="Severity Scale" />
        <TextInput style={styles.input} placeholder="Duration Recording" />
      </View>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Food Entry</Text>
        <TextInput style={styles.input} placeholder="Food Input" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  section: {
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
export default Screen;