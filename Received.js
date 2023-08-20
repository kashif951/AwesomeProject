import { View, Text, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity, FlatList } from "react-native"
import React, { useState } from "react";
import { } from "react";
import CompletedCard from "./CompletedCard";


export const Received = () => {

    const Received = [
        {
          watch: require('./Assets/giisty/smalw.png'),
          rolex: 'Rolex Z902',
          year: 'Patek Philippe - 2022',
          used: 'Condition: Used',
          price: '$2400,90',
          certificate: require('./Assets/giisty/certificate.png'),
          certificate2: require('./Assets/giisty/certificate2.png'),
          textinfor:'Buyer information',
          ractanglepic:require('./Assets/giisty/Rectangle1.png'),
          manahil:'Manahil',
          numbber:'AMB2345359',
          completedtxt:'Received',
          date:'20, July',
          date1:' 2023',
        },
        {
          watch: require('./Assets/giisty/smalw.png'),
          rolex: 'Rolex Z902',
          year: 'Patek Philippe - 2022',
          used: 'Condition: Used',
          price: '$2400,90',
          certificate: require('./Assets/giisty/certificate.png'),
          certificate2: require('./Assets/giisty/certificate2.png'),
          textinfor:'Buyer information',
          ractanglepic:require('./Assets/giisty/Rectangle1.png'),
          manahil:'Manahil',
          numbber:'AMB2345359',
          completedtxt:'Received',
          date:'20, July',
          date1:' 2023',
        },
       
       
        
        
    
      ]

    return(
        
       
      <View style={{ paddingHorizontal: 20 }}>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={Received}
        renderItem={({ item }) => <CompletedCard data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

    )
}