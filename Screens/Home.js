//Import Dependencies
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
// import {useIsFocused} from '@react-navigation/native';

//Import Components
import {getRecipeByQuery} from '../client';
import SearchModel from '../Components/SearchModel';
import Recipe from '../Components/Recipe';

const Home = () => {
  // const [to, setTo] = useState(5);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  // const isFocused = useIsFocused();

  useEffect(() => {
    getRecipeByQuery(query.length === 0 ? 'Trending' : query, 0, 20)
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
      <SearchModel query={query} setQuery={setQuery} setRecipes={setRecipes} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Recipiee</Text>
        <Recipe data={recipes} />
      </View>
      {/* <View style={styles.filter}>
        <Text>Filter</Text>
      </View> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contianer: {},
  contentContainer: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 12,
    marginLeft: 12,
  },
});

export default Home;
