
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"

import { useState } from "react"

export const App = () => {

const[value,setvalue]=useState(0)
     const user = [

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
               name: "jeuleri"
          },
          {
               id: 5,
               name: "usman"
          },
          {
               id: 6,
               name: "kashif"
          }

     ]
     const card = [
          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')


          },
          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')


          },
          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')


          },
          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')


          }
     ]

     const data = [
          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')

          },

          {
               Image: require('./Assets/giisty/united-states.png'),
               Text: 'Us',
               heart: require('./Assets/giisty/heart.png'),
               watch: require('./Assets/giisty/royal.png'),
               modal: 'Rolex Z902 - Boys',
               year: 'Mint - 2022',
               certificate: require('./Assets/giisty/certificate.png'),
               certificate2: require('./Assets/giisty/certificate2.png'),
               price: '$53.000',
               serch: require('./Assets/giisty/serch.png')

          },

          


     ]


     return (


<ScrollView style={{flex:1}}>

          <View style={{ flex: 1, backgroundColor: 'white' }}>
                


               <ImageBackground source={require('./Assets/giisty/hederbackground.png')} style={{height:100, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>



                    <View style={{ width: '15%', }}>
                         <Image source={require('./Assets/giisty/muhammad.png')} style={{ width: 40, height: 40 }} />
                    </View>

                    <View style={{ width: '70%' }}>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>Welcome back</Text>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: '#000000' }}>Muhammad Alami</Text>
                    </View>

                    <View style={{ width: '15%' }}>
                         <Image source={require('./Assets/giisty/bell.png')} />
                    </View>

               </ImageBackground>


               <View style={{ height:70, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>

                    <ImageBackground source={require('./Assets/giisty/input.png')} style={{ width: 265, height: 48 }}  >
                         <TextInput placeholder="Search watches, parts, accessories..." style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#9D9D9D', paddingLeft: 10 }} />
                    </ImageBackground>

                    <ImageBackground source={require('./Assets/giisty/serch.png')} style={{ width: 87, height: 48 }} />


               </View>



               <View style={{ height:70 }}>
                    <FlatList
                         horizontal
                         showsHorizontalScrollIndicator={false}
                         data={user}
                         renderItem={({ item,index }) => {

                              return (
                                
                                   <TouchableOpacity 
                                  onPress={()=>setvalue(index)}
                                   style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ width: 90, height: 48, backgroundColor:value==index?"#EA8C00":'#F8F8F8', marginLeft: 15, paddingTop: 10, textAlign: 'center', borderRadius: 10, fontSize: 16, fontFamily: 'Nunito-Bold' }}>{item.name}</Text>
                                   </TouchableOpacity>
                              )
                         }}
                    />
               </View>

 
               <View style={{ height: 320,backgroundColor:'#F0F0F0', paddingHorizontal: 20 }}>

                    <View >

                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>New Posts</Text>
                              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#EA8C00' }}>See all</Text>
                         </View>

                    </View>


                    <FlatList

                         data={card}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                         renderItem={({ item }) => {

                              return (

                                   <View style={{ marginRight: 20, paddingTop: 20, }}>


                                        <ImageBackground source={require('./Assets/giisty/card.png')} style={{ width: 160, height: 259, }}>


                                             <View style={{ paddingHorizontal: 8, backgroundColor: '#F8F8F8', margin: 10, marginBottom: 10, height: 130, borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>

                                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                                       <View>
                                                            <Image source={item.Image} style={{ width: 17, height: 17 }} />
                                                            <Text style={{ fontSize: 10, fontFamily: 'Nunito-Bold' }}>{item.Text}</Text>
                                                       </View>

                                                       <View >
                                                            <Image source={item.heart} style={{ width: 17, height: 17 }} />
                                                       </View>

                                                  </View>



                                                  <View style={{ alignItems: 'center' }}>
                                                       <Image source={item.watch} style={{ width: 70, height: 70, }} />
                                                  </View>


                                             </View>


                                             <View>


                                                  <View>

                                                       <View style={{ paddingHorizontal: 10 }}>
                                                            <Text style={{ fontSize: 15, fontFamily: 'Nunito-Bold', paddingBottom: 5 }}>{item.modal}</Text>
                                                            <Text style={{ fontFamily: 'Nunito-Medium', paddingBottom: 7 }}>{item.year}</Text>
                                                       </View>

                                                       <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 7 }}>
                                                            <Image source={item.certificate} />
                                                            <Image source={item.certificate2} />
                                                       </View>

                                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 7, paddingRight: 2 }}>
                                                            <Text style={{ color: '#EA8C00', fontSize: 14 }}>{item.price}</Text>
                                                            <Image source={item.serch} style={{ width: 42, height: 23 }} />
                                                       </View>

                                                  </View>

                                             </View>



                                        </ImageBackground>


                                   </View>



                              )

                         }
                         }
                    />

               </View>
              










               <View style={{ height: 320, backgroundColor: '#F0F0F0', paddingHorizontal: 20 }}>

                    <View >

                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>New Posts</Text>
                              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#EA8C00' }}>See all</Text>
                         </View>

                    </View>


                    <FlatList

                         data={data}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                         renderItem={({ item }) => {

                              return (

                                   <View style={{ marginRight: 20, paddingTop: 20, }}>


                                        <ImageBackground source={require('./Assets/giisty/card.png')} style={{ width: 160, height: 259, }}>


                                             <View style={{ paddingHorizontal: 8, backgroundColor: '#F8F8F8', margin: 10, marginBottom: 10, height: 130, borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>

                                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                                       <View>
                                                            <Image source={item.Image} style={{ width: 17, height: 17 }} />
                                                            <Text style={{ fontSize: 10, fontFamily: 'Nunito-Bold' }}>{item.Text}</Text>
                                                       </View>

                                                       <View >
                                                            <Image source={item.heart} style={{ width: 17, height: 17 }} />
                                                       </View>

                                                  </View>



                                                  <View style={{ alignItems: 'center' }}>
                                                       <Image source={item.watch} style={{ width: 70, height: 70, }} />
                                                  </View>


                                             </View>


                                             <View>


                                                  <View>

                                                       <View style={{ paddingHorizontal: 10 }}>
                                                            <Text style={{ fontSize: 15, fontFamily: 'Nunito-Bold', paddingBottom: 5 }}>{item.modal}</Text>
                                                            <Text style={{ fontFamily: 'Nunito-Medium', paddingBottom: 7 }}>{item.year}</Text>
                                                       </View>

                                                       <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 7 }}>
                                                            <Image source={item.certificate} />
                                                            <Image source={item.certificate2} />
                                                       </View>

                                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 7, paddingRight: 2 }}>
                                                            <Text style={{ color: '#EA8C00', fontSize: 14 }}>{item.price}</Text>
                                                            <Image source={item.serch} style={{ width: 42, height: 23 }} />
                                                       </View>

                                                  </View>

                                             </View>



                                        </ImageBackground>


                                   </View>



                              )

                         }
                         }
                    />

               </View>









          </View>
          
          </ScrollView>  

     )
}






