import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';

const App = () => {

  const [number, setNumber] = useState('');

  function checkNumber(num) {
    
    var total = 1;

    if (num < 0 || isNaN(num) || num === undefined || num === "") {
      return alert("Please enter a positive number.")
    } else {
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          total += i
        }
      }

      if (total == num) {
        alert(`${num} is a Perfect Number`)
      } else {
        alert(`${num} is not a Perfect Number`)
      }
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <ImageBackground
          source={require("./images/wallpaper.jpg")}
          style={styles.image}
        >
        
        <Text style={styles.text}>💥Perfect Numbers💥</Text>


        <TextInput
          style={styles.input}
          onChangeText={(num) => setNumber(num)}
          value={number}
          keyboardType="number-pad"
          autoFocus={true}
          onSubmitEditing={() => {
            checkNumber(number);
            setNumber('');
          }}
          placeholder="Please enter a number📙"
          />

        <TouchableOpacity
          onPress={() => { checkNumber(number); setNumber("") }}
          style={styles.button}
        >

        <Text style={{ textAlign: "center" }}>Check the Number</Text>
          
        </TouchableOpacity>
          
        <Image source={require("./images/info.png")} style={styles.info} />
        
        </ImageBackground>

      </View>
    </SafeAreaView>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"

  },
  input: {
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 10,
    fontFamily: "Segoe UI"
  },

  info: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 15,
  }
})