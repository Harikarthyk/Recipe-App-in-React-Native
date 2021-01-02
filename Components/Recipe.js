import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const BlockCard = ({data, totalLen}) => {
  const {recipe} = data.item;
  const navigation = useNavigation();
  if (!recipe) return <Text>Error</Text>;
  return (
    <TouchableOpacity
      style={styles.blockCardContainer}
      onPress={() => {
        navigation.navigate('Recipe', {
          data: data.item,
          index: data.index + 1,
          totalLen: totalLen,
        });
      }}>
      <View style={styles.blockCardContainerView}>
        <Text style={styles.count}>
          {data.index + 1}
          <Text style={{fontWeight: 'normal', fontSize: 14}}>/{totalLen}</Text>
        </Text>
      </View>
      {recipe && recipe.image ? (
        <Image
          resizeMode="cover"
          source={{uri: recipe.image}}
          style={styles.blockCardImage}
        />
      ) : (
        <Image
          resizeMode="cover"
          source={require('../assests/icons/food.jpg')}
          style={styles.blockCardImage}
        />
      )}

      <Text style={styles.label} numberOfLines={3}>
        {recipe.label}
      </Text>
    </TouchableOpacity>
  );
};
function Recipe({data}) {
  if (!data) return <Text>Nope.. : (</Text>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => <BlockCard data={item} totalLen={data.length} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  blockCardContainer: {
    marginRight: 20,
    borderRadius: 20,
    marginLeft: 10,
    shadowRadius: 20,
    shadowOpacity: 99,
    elevation: 18,
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    minHeight: 80,
    alignItems: 'center',
    color: 'white',
    width: '100%',
    paddingBottom: 20,
    left: 0,
    fontWeight: 'bold',
    elevation: 20,
    fontSize: 25,
    paddingLeft: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  blockCardImage: {
    width: width - 100,
    borderRadius: 20,
    height: height / 1.8,
  },
  blockCardContainerView: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    zIndex: 1,
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 13,
  },
  count: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    position: 'absolute',
    right: 19,
    top: 10,
  },
});

export default Recipe;
