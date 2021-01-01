import React from 'react';
import {Dimensions, Image, Linking, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Dimensions
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Recipe = ({route}) => {
  const navigation = useNavigation();
  const {recipe} = route.params.data;
  const {totalLen} = route.params;
  const {index} = route.params;

  const addToLocalStorage = async () => {
    try {
      const preValue =
        JSON.parse(await AsyncStorage.getItem('@recipe_app_14')) || [];
      preValue.push(recipe);
      const jsonValue = JSON.stringify(preValue);
      await AsyncStorage.setItem('@recipe_app_14', jsonValue);
    } catch (error) {
      console.error(error);
    }
  };

  const minsToHours = (min) => {
    let hr = Math.round(Number(min / 60));
    min = Math.round(Number(min % 60));
    return `${hr} hr ${min} min`;
  };

  const reduceCalories = (cal) => {
    cal = cal + '';
    let index = 0;
    for (let i = 0; i < cal.length; i++) {
      if (cal[i] === '.') {
        index = i;
        break;
      }
    }
    return cal.substring(0, index);
  };

  return recipe ? (
    <View style={[styles.container, {flex: 1}]}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="angle-left" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.count}>
            {index}
            <Text style={{fontWeight: 'normal', fontSize: 15}}>
              /{totalLen}
            </Text>
          </Text>
        </View>
        {console.log(recipe)}
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: recipe.image}}
        />

        <Text style={styles.label}>{recipe.label}</Text>
      </View>
      <ScrollView style={[styles.subContent]}>
        <FlatList
          data={recipe.healthLabels}
          style={styles.healthLabels}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Text style={styles.healthLabel}>{item}</Text>
          )}
        />
        <View style={styles.subContentTab}>
          <Text style={styles.subContentCooking}>Average Cooking Time</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 12,
            }}>
            <MIcon
              name="alarm"
              size={20}
              color="grey"
              style={{fontWeight: 'bold', marginRight: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
              {recipe.totalTime == 0 ? '60 min' : minsToHours(recipe.totalTime)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            marginHorizontal: 30,
            padding: 15,
            justifyContent: 'center',
            marginVertical: 20,
            elevation: 3,
            borderRadius: 7,
          }}
          onPress={addToLocalStorage}>
          <Text style={{marginRight: 12, fontWeight: 'bold', fontSize: 16}}>
            Add to WishList
          </Text>
          <Icon name="heart-o" size={25} color="#2DC268" />
        </TouchableOpacity>
        <Text style={styles.subContentCooking}>Nutrition Information </Text>
        <View style={styles.flatLists}>
          <View
            style={[
              styles.flatList,
              {
                borderBottomWidth: 4,
                borderRightWidth: 4,
              },
            ]}>
            <Text style={styles.flatListTitle}>CAL</Text>
            <Text style={styles.flatListContent}>
              {reduceCalories(recipe.calories)}
            </Text>
          </View>
          <View
            style={[
              styles.flatList,
              {
                borderTopWidth: 4,
                borderRightWidth: 4,
              },
            ]}>
            <Text style={styles.flatListTitle}>FAT</Text>
            <Text style={styles.flatListContent}>
              {Math.floor(Number(recipe.digest[0].daily))}g
            </Text>
          </View>
          <View
            style={[
              styles.flatList,
              {
                borderBottomWidth: 4,
                borderRightWidth: 4,
              },
            ]}>
            <Text style={styles.flatListTitle}>CARBS</Text>
            <Text style={styles.flatListContent}>
              {Math.floor(Number(recipe.digest[1].daily))}g
            </Text>
          </View>
          <View
            style={[
              styles.flatList,
              {
                borderTopWidth: 4,
                borderRightWidth: 4,
              },
            ]}>
            <Text style={styles.flatListTitle}>PROT</Text>
            <Text style={styles.flatListContent}>
              {Math.floor(Number(recipe.digest[2].daily))}g
            </Text>
          </View>
        </View>
        <Text style={styles.subContentCooking}>Required Ingredients </Text>
        <View style={[styles.ingredients, {marginVertical: 20}]}>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <View key={index} style={styles.ingredient}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 80,
                    marginRight: 20,
                    marginVertical: 6,
                    elevation: 10,
                  }}>
                  {ingredient.image ? (
                    <Image
                      resizeMode="contain"
                      source={{uri: ingredient.image}}
                      style={styles.ingredientImage}
                    />
                  ) : (
                    <Image
                      resizeMode="contain"
                      source={require('../assests/icons/default.jpg')}
                      style={styles.ingredientImage}
                    />
                  )}
                </View>
                <Text
                  style={{
                    flex: 1,
                    marginRight: 10,
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginVertical: 20,
                  }}>
                  {ingredient.text}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={[{marginBottom: 25}, styles.subContentTab]}>
          <Text style={styles.subContentCooking}>Source</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 12,
            }}>
            <Icon
              name="file-text"
              size={20}
              color="grey"
              style={{fontWeight: 'bold', marginRight: 10}}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
              {recipe.source}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            marginHorizontal: 30,
            padding: 15,
            justifyContent: 'center',
            marginBottom: 30,
            elevation: 3,
            borderRadius: 7,
          }}
          onPress={() => Linking.openURL(recipe.url)}>
          <Text style={{marginRight: 12, fontWeight: 'bold', fontSize: 16}}>
            View More...
          </Text>
          <Icon name="link" size={25} color="#2DC268" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  ) : (
    <Text>Loading..</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: width,
    height: height / 2.5,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  count: {
    zIndex: 1,
    right: 20,
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  label: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
    minHeight: 40,
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 12,
  },
  back: {
    padding: 15,
    marginLeft: 20,
  },
  subContent: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  healthLabels: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 5,
  },
  healthLabel: {
    backgroundColor: '#2DC268',
    marginRight: 10,
    color: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 8,
  },
  subContentCooking: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  flatLists: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '100%',
  },
  flatList: {
    flex: 0.25,
    backgroundColor: 'white',
    marginHorizontal: 5,
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: '#2DC268',
  },
  flatListTitle: {
    color: 'grey',

    fontWeight: '900',
    fontSize: 12,
  },
  flatListContent: {
    fontWeight: 'bold',
    color: '#2DC268',
    fontSize: 20,
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ingredientImage: {
    height: 85,
    borderRadius: 85,
    width: 85,
  },
});

export default Recipe;
