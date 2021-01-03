//Import Dependencies
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useIsFocused} from '@react-navigation/native';

//Import Components
import {getRecipeByQuery} from '../client';
import SearchModel from '../Components/SearchModel';
import Recipe from '../Components/Recipe';
import FilterModel from '../Components/FilterModel';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Home = () => {
  // const [to, setTo] = useState(5);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [calories, setCalories] = useState(1500);
  const [health, setHealth] = useState('balanced');
  const [to, setTo] = useState(10);
  // const isFocused = useIsFocused();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getRecipeByQuery(query.length === 0 ? 'All' : query, 0, 10)
      .then(({hits}) => {
        if (!hits) {
          return;
        }
        // hits.push({type: 'more'});
        setRecipes(hits);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.contianer}>
      <SearchModel
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        setRecipes={setRecipes}
      />
      <View style={[styles.contentContainer]}>
        <Text style={[styles.title]}>Recipiee</Text>
        {loading ? (
          <View style={{height: height / 1.7, justifyContent: 'center'}}>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
              Loading...
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 19,
              }}>
              Note : Internet is required
            </Text>
            <Text
              style={{
                marginTop: 8,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 19,
              }}>
              Wait for an minute
            </Text>
          </View>
        ) : (
          <Recipe data={recipes} />
        )}
      </View>
      {!showFilter ? (
        <TouchableOpacity
          onPress={() => {
            setShowFilter(true);
          }}
          style={styles.filter}>
          <Icon name="layers" color="#fff" size={20} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17,
              marginLeft: 10,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      {showFilter ? (
        <View style={styles.modelFilter}>
          <FilterModel
            setRecipes={setRecipes}
            query={query.length === 0 ? 'Trending' : query}
            setShowFilter={setShowFilter}
            setLoading={setLoading}
            calories={calories}
            setCalories={setCalories}
            to={to}
            setTo={setTo}
            health={health}
            setHealth={setHealth}
            setQuery={setQuery}
          />
        </View>
      ) : (
        <Text></Text>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 20,
    flex: 1,
    position: 'relative',
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    // paddingBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 12,
    marginBottom: 8,
  },
  filter: {
    backgroundColor: '#2DC268',
    flexDirection: 'row',
    width: 120,
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    zIndex: 1,
    elevation: 2,
    borderRadius: 10,
  },
  modelFilter: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: -45,
    width: width,
    height: height / 1.2,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 10,
    marginTop: 15,
  },
});

export default Home;
