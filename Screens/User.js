import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const User = () => {
  return (
    <ScrollView style={styles.container}>
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
        {/* https://clipchamp.com/watch/og3uJO6JS2z  */}
        <View>
          <Text style={[styles.text]}>
            If your not getting your recipe wait for somee time because I am
            using a developer plan for my API 5 hits for one minute is allowed
            for the free plan
          </Text>
        </View>
        <View>
          <Text style={[styles.text, {marginVertical: 5}]}>
            NOTE : Internet Connection is required
          </Text>
        </View>
      </View>

      <View
        style={styles.subContent}
        onPress={() => Linking.openURL('www.harikarthyk.xyz')}>
        <Text style={styles.head}>Developer</Text>
        <Text style={[styles.text, {color: 'blue'}]}>
          @Hari_karthyk <Text>(www.harikarthyk.xyz)</Text>
        </Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Contact</Text>
        <Text style={styles.text}>hari.jsmith494@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  head: {
    fontSize: 14,

    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default User;
