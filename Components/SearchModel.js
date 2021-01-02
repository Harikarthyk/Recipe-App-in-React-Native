import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {getRecipeByQuery} from '../client';

function SearchModel({query, setQuery, setRecipes, setLoading}) {
  const handleSearchRecipe = () => {
    setLoading(true);
    getRecipeByQuery(query.length === 0 ? 'All' : query, 0, 10)
      .then(({hits}) => {
        if (!hits) {
          // keytool -genkey -v -keystore hari_recipe_app.keystore -alias hari_recipe_app-keyalg RSA -keysize 2048 -validity 10000
          return;
        }
        setRecipes(hits);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.searchSection}>
      <Image
        source={require('../assests/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholderTextColor="#A5ACAE"
        style={styles.input}
        onSubmitEditing={handleSearchRecipe}
        placeholder="Search recipes..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 40,
    alignItems: 'center',
  },
  searchIcon: {
    width: 25,
    height: 22,
    marginLeft: 20,
    backgroundColor: 'white',
    marginRight: 10,
  },

  input: {
    backgroundColor: '#fff',
    color: '#818c88',
    fontWeight: 'bold',
    flex: 0.93,
  },
});
export default SearchModel;
