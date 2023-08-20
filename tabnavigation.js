import React from "react";
import {}  from "react-native";
import{NavigationContainer}from "@react-navigation/native";
import{createBottomTabNavigator}from "@react-navigation/bottom-tabs";

import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"


const Tab =createBottomTabNavigator();
const App = () => {



     return (
       
          <NavigationContainer>
               <Tab.Navigator>
             
              <Tab.Screen name="Login"  component={Login} />
              <Tab.Screen  name="Signp"  component={Signp} />

               </Tab.Navigator>
          </NavigationContainer>



     )
};

const Login =()=>{

     return(
         <View>
          <Text>hello</Text>
         </View>
     )

     
};

const Signp =()=>{

     return(
          <View>
          <Text>hello</Text>
         </View>
     )

     
}






export default App;