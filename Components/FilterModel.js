import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Slider} from 'react-native';

function FilterModel({setShowFilter, setRecipes}) {
  const [calories, setCalories] = useState(1500);
  const [isCal, setIsCal] = useState(false);
  // const [from,setFrom] = useState(0) ;
  const [health, setHealth] = useState('');
  const [to, setTo] = useState(20);
  const filterResult = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Filter </Text>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={[styles.text, {color: '#B7B7B7'}]}
            onPress={() => {
              setCalories(1000);
              setTo(20);
            }}>
            Reset
          </Text>
          <Text style={[styles.text]}>Go </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 20, top: 20}}
          onPress={() => setShowFilter(false)}>
          <Icon name="close-sharp" color="#2DC268" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.filter}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
                marginRight: 15,
              }}>
              Calorific Value
            </Text>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    backgroundColor: '#F2F2F2',
                    color: '#2DC268',
                    borderRadius: 10,
                    padding: 13,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  0
                </Text>
              </View>
              <Text style={{color: '#555555', fontWeight: 'bold'}}> to</Text>

              <View>
                <Text
                  style={{
                    backgroundColor: '#F2F2F2',
                    color: '#2DC268',
                    borderRadius: 10,
                    padding: 13,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {calories}
                </Text>
              </View>
            </View>
          </View>
          <Slider
            style={{height: 50, borderWidth: 10}}
            minimumValue={0}
            step={1}
            value={calories}
            maximumValue={1500}
            minimumTrackTintColor="#DDDDDD"
            maximumTrackTintColor="#2DC268"
            onValueChange={(e) => {
              setIsCal(true);
              setCalories(e);
            }}
          />

          <View>
            <Text style={{position: 'absolute', left: 2, fontWeight: 'bold'}}>
              0 kcal
            </Text>
            <Text style={{position: 'absolute', right: 2, fontWeight: 'bold'}}>
              1500 kcal
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.filter}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
                marginRight: 15,
              }}>
              Number of Recipe
            </Text>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    backgroundColor: '#F2F2F2',
                    color: '#2DC268',
                    borderRadius: 10,
                    padding: 13,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  0
                </Text>
              </View>
              <Text style={{color: '#555555', fontWeight: 'bold'}}> to</Text>

              <View>
                <Text
                  style={{
                    backgroundColor: '#F2F2F2',
                    color: '#2DC268',
                    borderRadius: 10,
                    padding: 13,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {to}
                </Text>
              </View>
            </View>
          </View>
          <Slider
            style={{height: 50, borderWidth: 10}}
            minimumValue={5}
            step={1}
            value={to}
            maximumValue={100}
            minimumTrackTintColor="#DDDDDD"
            maximumTrackTintColor="#2DC268"
            onValueChange={(e) => {
              setTo(e);
            }}
          />

          <View>
            <Text style={{position: 'absolute', left: 2, fontWeight: 'bold'}}>
              0
            </Text>
            <Text style={{position: 'absolute', right: 2, fontWeight: 'bold'}}>
              100 recipe's
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Choose Category
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            health === 'vegetarian'
              ? {backgroundColor: '#2DC268'}
              : {backgroundColor: '#B0B1B3'},
          ]}
          onPress={() => setHealth('vegetarian')}>
          <Text style={styles.filterButtonText}>Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            health === 'non-vegetarian'
              ? {backgroundColor: '#2DC268'}
              : {backgroundColor: '#B0B1B3'},
          ]}
          onPress={() => setHealth('non-vegetarian')}>
          <Text style={styles.filterButtonText}>Non-veg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            health === ''
              ? {backgroundColor: '#2DC268'}
              : {backgroundColor: '#B0B1B3'},
          ]}
          onPress={() => setHealth('')}>
          <Text style={styles.filterButtonText}>All </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    // backgroundColor: 'red',
    padding: 32,
    height: 162,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    flex: 1,
    elevation: 5,
  },
  title: {
    color: '#555555',
    flex: 0.3,
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  subContent: {},
  text: {
    color: '#2DC268',
    fontWeight: 'bold',
    fontSize: 17,
  },
  filterButton: {
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterModel;
