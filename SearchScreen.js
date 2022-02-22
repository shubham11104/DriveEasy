import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchComponent from '../components/SearchComponent.js';
import useResults from '../hooks/useResults.js';
import FoodList from '../components/FoodList.js';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [apiCall, errMessage, results] = useResults();

  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price == price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchComponent getValue={e => setTerm(e)} onEnd={() => apiCall(term)} />
      {errMessage ? <Text>{errMessage} </Text> : null}
      {/* <Text style={{marginLeft: 10}}>
        We have found {results.length} results{' '}
      </Text> */}
      <ScrollView>
        <FoodList
          title="Cost Effective"
          results={filterResultByPrice('$')}
          navigation={navigation}
        />
        <FoodList
          title="Bit Pricier"
          results={filterResultByPrice('$$')}
          navigation={navigation}
        />
        <FoodList
          title="Big Spender"
          results={filterResultByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
