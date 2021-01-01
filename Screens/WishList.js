import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const WishList = () => {
  const [recipe, setRecipe] = useState([]);
  const isFocused = useIsFocused();

  const minsToHours = (min) => {
    let hr = Math.round(Number(min / 60));
    min = Math.round(Number(min % 60));
    return `${hr} hr ${min} min`;
  };
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
        <ScrollView style={{marginTop: 10}}>
          {recipe.map((item, index) => {
            return (
              <View
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
                {/* <View style={}> */}
                <Image source={{uri: item.image}} style={[styles.image]} />
                {/* </View> */}
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
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </ScrollView>
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
    fontSize: 22,
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
