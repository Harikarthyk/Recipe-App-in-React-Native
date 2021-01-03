import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const WishList = () => {
  const [recipe, setRecipe] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const minsToHours = (min) => {
    let hr = Math.round(Number(min / 60));
    min = Math.round(Number(min % 60));
    return `${hr} hr ${min} min`;
  };
  const getAllItem = async () => {
    try {
      const preValue =
        JSON.parse(await AsyncStorage.getItem('@recipe_app_14')) || [];
      setRecipe(preValue);
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromList = async (item) => {
    let newRecipes = recipe.filter((data) => data.label !== item);
    await AsyncStorage.setItem('@recipe_app_14', JSON.stringify(newRecipes));
    ToastAndroid.showWithGravityAndOffset(
      'Removed from Wish List',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      15,
      220,
    );
    getAllItem();
  };

  useEffect(() => {
    getAllItem();
  }, [isFocused]);

  return (
    <View style={styles.container}>
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
        <ScrollView style={{marginTop: 10}}>
          {recipe.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Recipe', {
                    data: {recipe: item},
                    index: index + 1,
                    totalLen: recipe.length,
                  })
                }
                key={index}
                style={{
                  flex: 1,
                  marginVertical: 10,
                  padding: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  borderRadius: 9,
                  elevation: 9,
                }}>
                <Image source={{uri: item.image}} style={[styles.image]} />
                <View style={[{flex: 0.6}]}>
                  <Text
                    style={{
                      fontSize: 21.2,
                      color: 'black',
                      fontWeight: 'bold',
                      marginRight: 5,
                    }}>
                    {item.label}
                  </Text>
                  <View style={{marginVertical: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Average Cooking Time
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 6,
                      }}>
                      <MIcon
                        name="alarm"
                        size={18}
                        color="grey"
                        style={{fontWeight: 'bold', marginRight: 6}}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        {item.totalTime == 0
                          ? '60 min'
                          : minsToHours(item.totalTime)}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#2DC268',
                      padding: 3,
                      borderRadius: 6,
                      elevation: 5,
                    }}
                    onPress={() => removeFromList(item.label)}>
                    <MIcon
                      name="restore-from-trash"
                      size={25}
                      color="#fff"
                      style={{marginRight: 2}}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 13,
                      }}>
                      Remove from WishList
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 10,
  },
  empty: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {flex: 0.4, height: height / 4.2, width: '100%', marginRight: 17},
});

export default WishList;
