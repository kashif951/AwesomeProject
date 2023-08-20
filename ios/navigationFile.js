import React from "react";

import { View, Button, Text, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Giisty } from "./giisty";
import { Login } from "./giisty2";
import { Home } from "./giisty3";
import { Signin } from "./giisty4";

const Stack = createNativeStackNavigator();
const App = () => {

     return (
          <NavigationContainer>
               <Stack.Navigator>
                    <Stack.Screen name='Giisty' component={Giisty} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Signin' component={Signin} />

               </Stack.Navigator>

          </NavigationContainer>

     )
};




export default App;