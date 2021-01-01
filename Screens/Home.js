//Import Dependencies
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <SearchModel
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        setRecipes={setRecipes}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Recipiee</Text>
        <Recipe data={recipes} />
      </View>
      <TouchableOpacity style={styles.filter}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 12,
    marginLeft: 12,
  },
  filter: {
    backgroundColor: '#2DC268',
    flexDirection: 'row',
    width: 120,
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 10,
  },
});

export default Home;
