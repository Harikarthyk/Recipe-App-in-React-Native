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
      <View style={styles.blockCardContainerView}>
        <Text style={styles.count}>
          {data.index}
          <Text style={{fontWeight: 'normal', fontSize: 16}}>/{totalLen}</Text>
        </Text>
      </View>
      <Image
        resizeMode="cover"
        source={{uri: recipe.image}}
        style={styles.blockCardImage}
      />
      <Text style={styles.label}>{recipe.label}</Text>
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
    height: height / 1.7,
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
