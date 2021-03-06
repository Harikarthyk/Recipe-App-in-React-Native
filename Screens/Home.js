import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {getRecipeByQuery} from '../client';
import SearchModel from '../Components/SearchModel';
import Recipe from '../Components/Recipe';
import FilterModel from '../Components/FilterModel';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [calories, setCalories] = useState(1500);
  const [health, setHealth] = useState('balanced');
  const [to, setTo] = useState(10);

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getRecipeByQuery(query.length === 0 ? 'All' : query, 0, 10)
      .then(({hits}) => {
        if (!hits) {
          return;
        }
        setRecipes(hits);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.contianer}>
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
            <>
              {recipes.length === 0 ? (
                <View style={{height: height / 1.7, justifyContent: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 22,
                    }}>
                    No result Found : (
                  </Text>
                </View>
              ) : (
                <Recipe data={recipes} />
              )}
            </>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 20,
    flex: 1,
    height: height - 52,
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 12,
    marginBottom: 7,
  },
  filter: {
    backgroundColor: '#2DC268',
    flexDirection: 'row',
    width: 120,
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 1,
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 10,
  },
  modelFilter: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    width: width,
    height: height / 1.7,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 10,
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default Home;
