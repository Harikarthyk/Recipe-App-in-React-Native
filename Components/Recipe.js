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

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const BlockCard = ({data, totalLen}) => {
  const {recipe} = data.item;

  return (
    <TouchableOpacity style={styles.blockCardContainer}>
      <Image
        style={styles.countImage}
        source={require('../assests/icons/count.jpg')}
      />
      <Text style={styles.count}>
        {data.index}/{totalLen}
      </Text>
      <Image source={{uri: recipe.image}} style={styles.blockCardImage} />
    </TouchableOpacity>
  );
};

function Recipe({data}) {
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
    marginVertical: 20,
  },
  blockCardContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  blockCardImage: {
    width: width - 100,
    borderRadius: 20,

    height: height / 1.7,
  },
  count: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 1,
  },
  countImage: {
    position: 'absolute',
    top: 20,
    right: 90,
    zIndex: 1,
    width: 20,
    height: 20,
  },
});

export default Recipe;
