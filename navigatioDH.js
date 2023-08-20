import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from "./Product";
import { Anoffer } from "./Makeanoffer";


const Stack = createNativeStackNavigator();
const App = () => {

    return (
    <NavigationContainer >

        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Anoffer' component={Anoffer} />
           

        </Stack.Navigator>

    </NavigationContainer>

    )
}






export default App;