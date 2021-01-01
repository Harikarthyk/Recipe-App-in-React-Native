import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const WishList = () => {
  const [recipe, setRecipe] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getAllItem = async () => {
      try {
        const preValue =
          JSON.parse(await AsyncStorage.getItem('@recipe_app_14')) || [];
        setRecipe(preValue);
      } catch (error) {
        console.error(error);
      }
    };
    getAllItem();
  }, [isFocused]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Wish List </Text>
      {recipe.length === 0 ? (
        <View
          style={{
            height: height - 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.empty}>
            Currently you have nothing in your wishlist : (
          </Text>
        </View>
      ) : (
        <ScrollView></ScrollView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  empty: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WishList;
