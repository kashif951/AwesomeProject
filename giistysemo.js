import { useState } from "react";
import { } from "react-native";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"
import TabViewExample from "./tabview";

const App = () => {

     const user = [

          {
               id: 1,
               name: 'Category 1'
          },
          {
               id: 2,
               name: 'Category 2'
          },
          {
               id: 3,
               name: 'Category 3'
          },
          {
               id: 4,
               name: 'Category 4'
          },
          {
               id: 5,
               name: 'Category 5'
          },
          {
               id: 6,
               name: 'Category 6'
          },
     ]

     const data = [
          {
               imgbackg: require('./Assets/giisty/chair.png'),
                imgd: require('./Assets/giisty/dil.png'),
                 imgvedio: require('./Assets/giisty/path.png'),
               sharukh: require('./Assets/giisty/sharukh.png'),
               txt:'Shah Rukh',
               date:'21/07/2023'
          },
          {
               imgbackg: require('./Assets/giisty/chair.png'),
                imgd: require('./Assets/giisty/dil.png'),
                 imgvedio: require('./Assets/giisty/path.png'),
               sharukh: require('./Assets/giisty/sharukh.png'),
               txt:'Shah Rukh',
               date:'21/07/2023'
          },
          {
               imgbackg: require('./Assets/giisty/chair.png'),
                imgd: require('./Assets/giisty/dil.png'),
                 imgvedio: require('./Assets/giisty/path.png'),
               sharukh: require('./Assets/giisty/sharukh.png'),
               txt:'Shah Rukh',
               date:'21/07/2023'
          }
     ]


     return (

          <View style={{ flex: 1, }}>

               <View style={{ height: '65%' }}>

                    <ImageBackground source={require('./Assets/giisty/publish.png')} style={{ width: '100%', height: '100%', }} >



                         <View style={{ paddingHorizontal: 20, paddingTop: 20, height: '14.5%' }}>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                   <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Image source={require('./Assets/giisty/sharukh.png')} style={{ width: 50, height: 50 }} />
                                        <View style={{ paddingLeft: 10 }}>
                                             <Text style={{ color: '#FAFCFF', fontSize: 20 }}>Hi, Srk!👋</Text>
                                        </View>
                                   </View>

                                   <View>
                                        <TouchableOpacity>
                                             <Image source={require('./Assets/giisty/Search.png')} style={{ width: 30, height: 30 }} />
                                        </TouchableOpacity>
                                   </View>

                              </View>
                         </View>

                         <View style={{ height: '80%' }}>
                              <FlatList
                                   showsHorizontalScrollIndicator={false}
                                   horizontal
                                   data={user}
                                   renderItem={({ item }) => {
                                        return (
                                             <TouchableOpacity style={{ paddingTop: 25, }}>
                                                  <Text style={{ padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.32)', color: 'white', marginLeft: 10, textAlign: 'center', borderRadius: 60, fontSize: 16 }}>{item.name}</Text>
                                             </TouchableOpacity>
                                        )
                                   }
                                   }

                              />
                              <View style={{ height: '50%' }}>

                                   <View style={{ alignItems: 'center', }}>
                                        <Text style={{ color: 'white', fontSize: 28, textAlign: 'center' }}>
                                             What is knowledge hub and
                                             how we can access it?
                                        </Text>
                                   </View>

                                   <View style={{ paddingTop: 10, alignItems: 'center', }}>
                                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
                                             Intro . Feature . Video Content
                                        </Text>
                                   </View>

                                   <View style={{ paddingTop: 30, alignItems: 'center', }}>
                                        <TouchableOpacity>
                                             <Image source={require('./Assets/giisty/path.png')} style={{ width: 60, height: 60 }} />
                                        </TouchableOpacity>
                                   </View>

                              </View>

                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingHorizontal: 20 }}>
                                   <Image source={require('./Assets/giisty/sharukh.png')} style={{ width: 50, height: 50 }} />
                                   <View style={{ paddingLeft: 10 }}>
                                        <Text style={{ color: '#FAFCFF', fontSize: 20 }}>Shah Rukh</Text>
                                        <Text>21/07/2023</Text>
                                   </View>
                                   <View style={{ paddingLeft: 10 }}>
                                        <Image source={require('./Assets/giisty/rate.png')} style={{ width: 70, height: 30 }} />
                                   </View>
                              </View>



                         </View>


                    </ImageBackground>

               </View>



               <View style={{ paddingHorizontal: 20, }}>


                    <View style={{ paddingTop: 10, }}>
                         <Text style={{ fontSize: 20 }}>Top Giists</Text>
                    </View>
                    <View style={{ paddingTop: 16,}}>
                         <FlatList
                             horizontal
                             showsHorizontalScrollIndicator={false}
                              data={data}
                              renderItem={({ item }) => {
                                   return (

                                        <View>
                                             <View style={{
                                                  width: "68%", borderRadius: 20, shadowColor: 'gray', backgroundColor: 'white', marginBottom: 15
                                                  ,
                                                  shadowOffset: {
                                                       width: 0,
                                                       height: 1,
                                                  },
                                                  shadowOpacity: 0.3,
                                                  shadowRadius: 3,
                                                  elevation: 5,
                                             }}>

                                                  <ImageBackground source={item.imgbackg} style={{ width: 250, height: 130,marginLeft:10,}} borderRadius={15}>
                                                       <View style={{ paddingHorizontal: 20 }}>
                                                            <View style={{ alignItems: 'flex-end',paddingTop:10 }}>
                                                                 <Image source={item.imgd} style={{ width: 25, height: 25 }} />
                                                            </View>

                                                            <View style={{ alignItems: 'center', paddingTop: 10 }}>
                                                                 <Image source={item.imgvedio} style={{ width: 30, height: 30 }} />
                                                            </View>

                                                            <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
                                                                 <Image source={item.sharukh} style={{ width: 30, height: 30 }} />
                                                                 <View style={{ paddingLeft: 10 }}>
                                                                      <Text style={{ color: '#FAFCFF', fontSize: 14 }}>{item.txt}</Text>
                                                                      <Text style={{color:'white'}}>{item.date}</Text>
                                                                 </View>

                                                            </View>

                                                            </View>
                                                  </ImageBackground>


                                             </View>
                                        </View>



                                   )
                              }
                              }

                         />

                    </View>



               </View>





          </View>





     )
}

export default App;