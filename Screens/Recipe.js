import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Recipe = ({route}) => {
  const {recipe} = route.params.data;
  const {totalLen} = route.params;
  const {index} = route.params;
  return recipe ? (
    <View style={styles.container}>
      {console.log(recipe, index, totalLen)}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <Icon name="angle-left" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.count}>
          {index}
          <Text>/{totalLen}</Text>
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: recipe.image}}
      />

      <Text style={styles.label}>{recipe.label}</Text>
    </View>
  ) : (
    <Text>Loading..</Text>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 2.5,
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'red',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
    flexDirection: 'row',
  },
  count: {
    zIndex: 1,
  },
  label: {},
  back: {
    padding: 15,
  },
  backButton: {
    width: 20,
    backgroundColor: 'red',
    height: 20,
  },
});

export default Recipe;
