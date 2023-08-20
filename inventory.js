
import { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"

export const Inventory = () => {

     const [value, setvalue] = useState(0);
     const list = [

          {
               id: 1,
               name: "Watches"
          },

          {
               id: 2,
               name: "Accessories"
          },

          {
               id: 3,
               name: "Parts"
          },

          {
               id: 4,
               name: "Jewellery"
          },

          {
               id: 5,
               name: "Kashif"
          },

          {
               id: 6,
               name: "Khush"
          },


     ]

     const user = [
          {
               watch: require('./Assets/giisty/watch.png'),
               rolex: 'Rolex Z902',
               year: 'Patek Philippe - 2022',
               condison: 'Condition: Used',
               certi: require('./Assets/giisty/certi.png'),
               certif: require('./Assets/giisty/certif.png'),
               delete: require('./Assets/giisty/delete.png'),
               pen: require('./Assets/giisty/pen.png'),
               price: '$24.90'
          },

          {
               watch: require('./Assets/giisty/watch.png'),
               rolex: 'Rolex Z902',
               year: 'Patek Philippe - 2022',
               condison: 'Condition: Used',
               certi: require('./Assets/giisty/certi.png'),
               certif: require('./Assets/giisty/certif.png'),
               delete: require('./Assets/giisty/delete.png'),
               pen: require('./Assets/giisty/pen.png'),
               price: '$24.90'
          },

          {
               watch: require('./Assets/giisty/watch.png'),
               rolex: 'Rolex Z902',
               year: 'Patek Philippe - 2022',
               condison: 'Condition: Used',
               certi: require('./Assets/giisty/certi.png'),
               certif: require('./Assets/giisty/certif.png'),
               delete: require('./Assets/giisty/delete.png'),
               pen: require('./Assets/giisty/pen.png'),
               price: '$24.90'
          }

     ]
     return (
          <View style={style.main}>
               <View style={style.imgview}>

                    <ImageBackground source={require('./Assets/giisty/input.png')} style={style.iputimg} >
                         <TextInput placeholder="Search watches, parts, accessories..." style={style.texinpt} />
                    </ImageBackground>
                    <ImageBackground source={require('./Assets/giisty/serch.png')} style={style.serchimg} />
               </View>

               <View style={{ height: '15%', }}>
                    <FlatList
                         showsHorizontalScrollIndicator={false}
                         horizontal
                         data={list}
                         renderItem={({ item, index }) => {
                              return (
                                   <View>
                                        <TouchableOpacity
                                             onPress={() => setvalue(index)} >
                                             <Text style={{ backgroundColor: value == index ? '#EA8C00' : '#F8F8F8', width: 90, height: 48, marginLeft: 10, borderRadius: 10, padding: 10, margin: 10, fontSize: 18, textAlign: 'center', fontFamily: 'Nunito-Bold' }}>{item.name}</Text>
                                        </TouchableOpacity>
                                   </View>
                              )
                         }
                         }
                    />
               </View>
               <View style={{ height: '15%', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, }}>
                    <View>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>All Watches</Text>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                         <Image source={require('./Assets/giisty/filter.png')} style={{ marginRight: 20 }} />
                         <Image source={require('./Assets/giisty/sorting.png')} />
                    </View>
               </View>
               <FlatList

                    data={user}
                    renderItem={({ item }) => {

                         return (

                              <View style={{ paddingHorizontal: 20, }}>

                                   <View style={{
                                        width: "100%", borderRadius: 10, shadowColor: 'gray', backgroundColor: 'white', marginBottom: 15
                                        ,
                                        shadowOffset: {
                                             width: 0,
                                             height: 1,
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 3,
                                        elevation: 5,
                                   }}>

                                        <View>
                                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>

                                                  <View style={{ flexDirection: 'row' }}>
                                                       <Image source={item.watch} />
                                                       <View style={{ paddingLeft: 10 }}>
                                                            <Text style={style.ctrolex}>{item.rolex}</Text>
                                                            <Text style={style.cardtext}>{item.year}</Text>
                                                            <Text style={style.cardtext}>{item.condison}</Text>
                                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                                                 <View style={{ paddingRight: 10, }}>
                                                                      <Image source={item.certi} />
                                                                 </View>
                                                                 <Image source={item.certif} />
                                                            </View>

                                                       </View>
                                                  </View>

                                                  <View style={{ justifyContent: 'space-between' }}>
                                                       <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ paddingRight: 20 }}>
                                                                 <Image source={item.delete} />
                                                            </View>

                                                            <Image source={item.pen} />

                                                       </View>

                                                       <View style={{ paddingLeft: 10 }}>
                                                            <Text>{item.price}</Text>
                                                       </View>

                                                  </View>

                                             </View>

                                        </View>

                                   </View>

                              </View>



                         )
                    }
                    }

               />

          </View>


     )
}


const style = StyleSheet.create({
     main: {
          flex: 1,
          backgroundColor: 'white'
     },

     iputimg: {
          width: 259,
          height: 48,
     },

     texinpt: {
          fontSize: 12,
          fontFamily: 'Nunito-Medium',
          paddingLeft: 10
     },
     serchimg: {
          width: 87,
          height: 48,
     },
     imgview: {
          height: '14%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',

     },
     cardtext: {
          fontSize: 12,
          fontFamily: 'Nunito-Medium',
          color: '#19242C',
          paddingTop: 5
     },
     ctrolex: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',

     }


})