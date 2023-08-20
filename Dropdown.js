import { View, Text, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity, FlatList } from "react-native"
import React, { } from "react";
import { } from "react";
import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
};