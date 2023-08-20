
import { } from "react-native";
import { View, Text, StyleSheet, Image,Dimensions, ScrollView,TouchableOpacity } from "react-native"
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const { width } = Dimensions.get('window');

export const Home = (props) => {

     return (

          <ScrollView>

               <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>

                         <View>
                              <Text style={{ fontSize: 18, fontFamily: 'Nunito-Bold' }}>Product Page</Text>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ paddingRight: 20 }}>
                                   <Image source={require('./Assets/giisty/heart.png')} />
                              </View>
                              <View>
                                   <Image source={require('./Assets/giisty/dot.png')} />
                              </View>
                         </View>

                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                         <View>
                              <Image source={require('./Assets/giisty/united-states.png')} />
                              <Text>us</Text>
                         </View>
                         <View style={{  alignItems: 'center',justifyContent: 'center',}}>
                         <SwiperFlatList
                            autoplay
                            autoplayLoop
                            showPagination
                            autoplayLoopKeepAnimation={true}
                            paginationActiveColor="black"
                            paginationDefaultColor="#838FA0"
                            paginationStyleItemActive={{ width: 15, height: 6, paddingHorizontal:2, }}
                            paginationStyleItem={{ width: 6, height: 6, marginTop: 30, }}>
                            <View style={{ width: width * 0.91, alignItems: 'center', }}>
                                <Image source={require('./Assets/giisty/image.png')} style={{ width: 240, height: 230 }} />
                            </View>
                            <View style={{ width: width * 0.91, alignItems: 'center',}}>
                                <Image source={require('./Assets/giisty/image.png')} style={{ width: 240, height: 230 }} />
                            </View>
                            <View style={{ width: width * 0.91,alignItems:'center'}}>
                                <Image source={require('./Assets/giisty/raza1.png')} style={{ width: 240, height: 230 }} />
                            </View>
                            <View style={{ width: width * 0.89, alignItems: 'center',}}>
                                <Image source={require('./Assets/giisty/hdwatch.png')} style={{ width: 240, height: 230 }} />
                            </View>
                        </SwiperFlatList>
                        </View>

                    </View>

                    <View style={{ height: '5%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>

                         <View>
                              <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold' }}>Patek Philippe - Nautilus </Text>
                              <Text style={{ fontSize: 14, fontFamily: 'Nunito-Medium' }}>Ref: 5711-01A  </Text>
                         </View>
                         <View>
                              <Text style={{ fontSize: 24, fontFamily: 'Nunito-Bold', color: 'rgba(234, 140, 0, 1)' }}>$53.000</Text>
                         </View>

                    </View>

                    <View style={{ height: '5%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>

                         <View>
                              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Content</Text>
                              <View style={{ flexDirection: 'row' }}>
                                   <View>
                                        <Image source={require('./Assets/giisty/certificate.png')} />
                                   </View>
                                   <View style={{ paddingLeft: 10 }}>
                                        <Image source={require('./Assets/giisty/certificate2.png')} />
                                   </View>
                              </View>
                         </View>
                         <View>
                              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Year</Text>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>2022</Text>
                         </View>
                         <View>
                              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Condition</Text>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>Used</Text>
                         </View>
                    </View>

                    <View style={{ alignItems: 'center', paddingTop: 15 }}>
                         <TouchableOpacity style={style.btn1}
                              onPress={() => props.navigation.navigate('Anoffer')}
                         >
                              <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Nunito-Bold' }}>Make an Offer</Text>
                         </TouchableOpacity>
                    </View>


                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                         <TouchableOpacity style={style.btn2}>
                              <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Nunito-Bold' }}>Confirm</Text>
                         </TouchableOpacity>
                    </View>


                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                         <TouchableOpacity style={style.btn3}>
                              <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>Hold</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>Seller information</Text>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Contact Name</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                         <View style={{ flexDirection: 'row' }}>
                              <Image source={require('./Assets/giisty/muhammad.png')} />
                              <View style={{ paddingLeft: 6 }}>
                                   <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold' }}>Mohammad Alami</Text>
                              </View>
                         </View>
                         <View>
                              <Text style={{ color: '#EA8C00', fontSize: 14, fontFamily: 'Nunito-Bold' }}>Message</Text>
                         </View>

                    </View>

                    <View style={{ paddingTop: 10 }}>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>Complementary Information </Text>
                         <Text style={{ fontSize: 14, fontFamily: 'Nunito-Medium' }}>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </Text>
                    </View>


                    <View style={{ paddingTop: 15 }}>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }} >
                              Product Information</Text>
                    </View>

                    <View style={{ paddingHorizontal: 10 }}>

                         <View style={style.modalview}>

                              <View>
                                   <Text style={style.modaltxt}>
                                        Brand</Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>
                                        Patek Philippe</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Model</Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Nautilus</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt} >
                                        Reference Number</Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>5711 - 01A</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Nickname </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>-</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Dial Color  </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Blue </Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Case Size </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>40 mm</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Case Material </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Steel</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Bracelet Material </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Steel</Text>
                              </View>
                         </View>


                         <View style={style.modalview}>
                              <View>
                                   <Text style={style.modaltxt}>
                                        Bezel Material </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Steel</Text>
                              </View>
                         </View>


                         <View style={style.modalview} >
                              <View>
                                   <Text style={style.modaltxt} >
                                        Index Type </Text>
                              </View>
                              <View>
                                   <Text style={style.stylewa}>Roman</Text>
                              </View>
                         </View>










                    </View>









               </View>
          </ScrollView>

     )
}


const style = StyleSheet.create({
     btn1: {
          backgroundColor: '#19242C',
          width: 327, height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 60
     },
     btn2: {
          backgroundColor: '#EA8C00',
          width: 327, height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 60
     },
     btn3: {
          borderWidth: 1,
          width: 327, height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50
     },
     modalview: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          height: 55,
          borderColor: '#EAECF0',
          // backgroundColor:'green',
          alignItems: 'center'

     },
     modaltxt: {
          fontSize: 14,
          fontFamily: 'Nunito-Medium',
          color: '#838FA0'

     },
     stylewa: {
          fontSize: 14,
          fontFamily: 'Nunito-Bold',
          color: '#19242C'
     }
})






