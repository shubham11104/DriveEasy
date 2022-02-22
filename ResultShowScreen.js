import React, {useState, useEffect} from 'react';
import AboutComponent from '../components/AboutComponent';
import Feather from 'react-native-vector-icons/Feather';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const [colorchange, setColorchange] = useState('black');
  const [count, setCount] = useState(1);
  const [countplus, setCountplus] = useState(0);
  const [countminus, setCountminus] = useState(0);

  const price = 9.99;

  const id = route.params;

  const getResult = async ({id}) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={{flex: 1, top: 20}}>
      <Image source={{uri: result.image_url}} style={styles.img} />
      <Text style={styles.title}>{result.name}</Text>

      <Text style={{margin: 10}}>500g</Text>
      <View style={styles.countStyle}>
        <View style={{flexDirection: 'row', top: 3}}>
          <TouchableOpacity
            onPress={() => {
              if (count <= 1) {
                setCount(1);
              } else {
                setCount(count - 1);
              }
            }}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: 'bold',
            left: 170,
          }}>
          ${price * count}
        </Text>
      </View>
      <AboutComponent />
      <View style={styles.lastElem}>
        <TouchableOpacity
          onPress={() => {
            if (colorchange == 'black') {
              setColorchange('red');
              ToastAndroid.show(
                'Food is added to My Wishlist',
                ToastAndroid.SHORT,
              );
            } else if (colorchange == 'red') {
              setColorchange('black');
              ToastAndroid.show(
                'Food is removed from My Wishlist',
                ToastAndroid.SHORT,
              );
            }
          }}>
          <Feather
            name={'heart'}
            size={27}
            style={{
              color: colorchange,
              top: 10,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Card', {price: price, count: count});
          }}>
          <Text style={styles.btn}>Add to Card </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: 'black',
    top: 10,
  },
  lastElem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 130,
  },
  countStyle: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    marginRight: 280,
    left: 20,
    top: 30,
    justifyContent: 'space-between',
    borderColor: 'grey',
  },
  text: {
    fontSize: 22,
    // fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  img: {
    width: 250,
    height: 140,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  btn: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#FFC108',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
});
export default ResultShowScreen;
