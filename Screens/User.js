import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContent}>
        <Text style={styles.head}>App Name</Text>
        <Text style={styles.text}>Recipe App</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Version</Text>
        <Text style={styles.text}>1.0.0</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Source</Text>
        <Text style={styles.text}>Edamam (https://developer.edamam.com/)</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Description</Text>
        <Text style={styles.text}>
          This is an application that helps you in cooking dishes by providing
          you to know about nutrition in the dish, ingredients needed to cook,
          approximate cooking time, and more...
        </Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Developer</Text>
        <Text style={styles.text}>@Hari_karthyk (www.harikarthyk.xyz)</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Contact</Text>
        <Text style={styles.text}>hari.jsmith494@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContent: {
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  head: {
    fontSize: 18,

    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default User;
