import { useState } from "react";
import { } from "react-native";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"
import TabViewExample from "./tabview";

const App = () => {

    


     return (

          <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

               <View style={{ height:'16%', backgroundColor: '#19242C', paddingHorizontal: 20 }}>

                    <View style={{ paddingTop: 15, alignItems: 'flex-end', }}>
                         <Image source={require('./Assets/giisty/pencel.png')} />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                         <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Nunito-Bold' }}>TIMECREAFT</Text>
                    </View>

                    <View style={{ paddingTop: 5, }} >
                         <Image source={require('./Assets/giisty/tf.png')} style={{ width:75, height: 75, }} />
                    </View>
               </View>

               <View style={{ height: '11%', paddingHorizontal: 20, paddingTop: 30, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                         <View>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>TimeCraft</Text>
                         </View>

                         <View style={{ paddingLeft: 5 }}>
                              <Image source={require('./Assets/giisty/tickbage.png')} />
                         </View>

                         <View style={{ paddingLeft: 5 }}>
                              <Image source={require('./Assets/giisty/contract.png')} />
                         </View>
                    </View>

                    <View>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>Dubai, UAE</Text>
                    </View>
               </View>
               
               <TabViewExample />

               </View>

     )
}

export default App;