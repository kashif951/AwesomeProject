import { View, Text, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity, FlatList } from "react-native"
import React, { useState } from "react";
import { } from "react";
import { Received } from "./Received";
import { Holde } from "./Holde";
import { Confirmed } from "./Confirmed";
import { Completed } from "./Completed";

const App = () => {

  const [value, setvalue] = useState(0)
  const user = [

    {
      id: 1,
      name: "Received"
    },
    {
      id: 2,
      name: "Hold "
    },
    {
      id: 3,
      name: "Confirmed"
    },
    {
      id: 4,
      name: "Completed "
    },
   

  ]
  
  return (

    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>



      <ImageBackground source={require('./Assets/giisty/hederbackground.png')} style={{ height: '13%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
        <View>
          <Image source={require('./Assets/giisty/arrow.png')} style={{ width: 24, height: 24 }} />
        </View>

        <View>
          <Text style={{ fontSize: 18, fontFamily: 'Nunito-Bold', color: '#19242C' }}>Offers</Text>
        </View>

        <View>
          <Image source={require('./Assets/giisty/sorting.png')} style={{ width: 24, height: 24 }} />
        </View>
      </ImageBackground>


      <View style={{ height: '10%', paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', }}>

        <ImageBackground source={require('./Assets/giisty/input.png')} style={{ width: 360, height: 48, }}  >
          <TextInput placeholder="Search watches, parts, accessories..." style={{ fontSize: 12, fontFamily: 'Nunito-Bold', color: '#9D9D9D', paddingLeft: 10 }} />
        </ImageBackground>

        

      </View>

      <View style={{ height: '10%', }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={user}
          renderItem={({ item, index }) => {

            return (

              <TouchableOpacity
                onPress={() => setvalue(index)}
                style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ width: 100, height: 48, backgroundColor: value == index ? "#EA8C00" : '#F8F8F8', marginLeft: 15, paddingTop: 10, textAlign: 'center', borderRadius: 10, fontSize: 16, fontFamily: 'Nunito-Bold', }}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View>
      {value == 0 ? (
        <Received/>
      ) : value == 1 ? (
        <Holde/>
      ) : value == 2 ? (
        <Confirmed />
      ) : value == 3 ? (
        <Completed />
      ) : null}
      </View>










    </View>


  )
}

export default App;
