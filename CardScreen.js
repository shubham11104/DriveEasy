import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const CardScreen = ({route, navigation}) => {
  const price = route.params.price;
  const count = route.params.count;
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start;
  }, []);

  return (
    <Animated.View
      type="slider"
      style={{
        flex: 1,
        backgroundColor: 'black',
        transform: [{translateY: translation}],
      }}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text style={styles.txt}>Card</Text>
        <View style={styles.row}>
          <Ionicons name="fast-food-outline" style={styles.icon} size={43} />
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>1 x</Text>
          <Text style={{fontSize: 13, color: 'white', marginTop: 10}}>
            Newman's Own Pasta {'\n'} Saucce Sockarooni
          </Text>
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>
            $9.99
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="fast-food-outline" style={styles.icon} size={43} />
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>1 x</Text>
          <Text style={{fontSize: 13, color: 'white', marginTop: 10}}>
            Rummo Fusilli No 48 {'\n'} Pasta
          </Text>
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>
            $9.99
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="fast-food-outline" style={styles.icon} size={43} />
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>1 x</Text>
          <Text style={{fontSize: 13, color: 'white', marginTop: 10}}>
            Biana Organic White {'\n'}Spelt Fusilli
          </Text>
          <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>
            $9.99
          </Text>
        </View>
        <View style={styles.row}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              right: 40,
            }}>
            <Feather name="truck" size={35} style={styles.car} />
            <Text style={{fontSize: 15, color: 'white', marginTop: 30}}>
              Delivery
            </Text>
          </View>
          <Text style={{fontSize: 15, color: 'white', marginTop: 30, left: 25}}>
            ${price * count}
          </Text>
        </View>
        <Text style={{fontSize: 12, color: 'white', left: 20}}>
          All Order of $25 or more are FREE Delivery
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 20,
          }}>
          <Text style={{fontSize: 25, color: 'white', marginTop: 30, left: 20}}>
            Total:
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 30,
              right: 10,
            }}>
            ${price * count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show(
              'Thank You your order has been placed :)',
              ToastAndroid.SHORT,
            );
          }}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  car: {
    color: 'yellow',
    borderColor: 'white',
    margin: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 10,
  },
  txt: {
    color: 'white',
    fontSize: 22,
    margin: 15,
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    height: 53,
    width: 53,
    borderRadius: 30,
    margin: 10,
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
    paddingHorizontal: 120,
    top: 55,
  },
});
export default CardScreen;
