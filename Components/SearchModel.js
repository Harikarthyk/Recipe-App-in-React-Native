import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

function SearchModel() {
  const handleSearchRecipe = () => {};
  return (
    <View style={styles.searchSection}>
      <Image
        source={require('../assests/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
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