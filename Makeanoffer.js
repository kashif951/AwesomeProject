
import { } from "react-native";
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity } from "react-native"


export const Anoffer = (props) => {




     const Chat = [
          {
               m: require('./Assets/giisty/alina.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               btn1: 'Accept',
               btn2: 'Deny',
               type: 'other'
          },
          {
               m: require('./Assets/giisty/m.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               type: 'me'
          },
          {
               m: require('./Assets/giisty/alina.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               btn1: 'Accept',
               btn2: 'Deny',
               type: 'other'

          },
          {
               m: require('./Assets/giisty/m.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               type: 'me'
          },
          {
               m: require('./Assets/giisty/alina.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               btn1: 'Accept',
               btn2: 'Deny',
               type: 'other'

          },
          {
               m: require('./Assets/giisty/m.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               type: 'me'
          },
          {
               m: require('./Assets/giisty/alina.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               btn1: 'Accept',
               btn2: 'Deny',
               type: 'other'

          },
          {
               m: require('./Assets/giisty/m.png'),
               you: 'You',
               send: 'sent an offer',
               offer: 'Offered Price:',
               usd: '$51.500 USD',
               time: '05:40 PM',
               type: 'me'
          },
     ]







     return (



          <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#FFFFFF' }}>

               <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#EAECF0' }}>
                    <TouchableOpacity
                         onPress={() => props.navigation.navigate('Home')}
                    >
                         <Image source={require('./Assets/giisty/arrow.png')} />
                    </TouchableOpacity>
                    <View>
                         <Text style={{ fontSize: 18, fontFamily: 'Nunito-Bold' }}>Make an Offer</Text>
                    </View>
                    <View >
                         <Text style={{ fontSize: 18, fontFamily: 'Nunito-Medium', color: '#CD1B1B' }}>Cancel</Text>
                    </View>
               </View>
               <View style={{ height: '22%', marginTop: 20 }} >
                    <View style={{}}>
                         <Image source={require('./Assets/giisty/united-states.png')} />
                         <Text>us</Text>
                    </View>
                    <View style={{ alignItems: 'center', top: -30 }}>
                         <Image source={require('./Assets/giisty/imager.png')} style={{ width: 153, height: 146 }} />
                    </View>
               </View>
               <View style={{ height: '8%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View>
                         <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold' }}>Patek Philippe - Nautilus </Text>
                         <Text style={{ fontSize: 14, fontFamily: 'Nunito-Medium' }}>Ref: 5711-01A  </Text>
                    </View>
                    <View>
                         <Text style={{ fontSize: 24, fontFamily: 'Nunito-Bold', color: 'rgba(234, 140, 0, 1)' }}>$53.000</Text>
                    </View>
               </View>
               <View style={{ height: '8%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#EAECF0' }}>
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

               <View style={{ height: '33%', paddingTop: 7 }}>
                    <FlatList
                         showsVerticalScrollIndicator={false}
                         data={Chat}
                         renderItem={({ item }) => {

                              return (
                                   <View>
                                        {item.type == 'other' ?
                                             <View style={{
                                                  width: 250, borderRadius: 20, padding: 10, shadowColor: 'gray', backgroundColor: 'white'
                                                  ,
                                                  shadowOffset: {
                                                       width: 0,
                                                       height: 1,
                                                  },
                                                  shadowOpacity: 0.3,
                                                  shadowRadius: 3,
                                                  elevation: 5,
                                             }}>
                                                  <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, alignItems: 'center' }}>
                                                       <View>
                                                            <Image source={item.m} />
                                                       </View>
                                                       <View style={{ paddingLeft: 5 }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                 <View style={{ paddingRight: 5 }}>
                                                                      <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: '#19242C' }}>{item.you}</Text>
                                                                 </View>
                                                                 <View>
                                                                      <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>{item.send}</Text>
                                                                 </View>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>
                                                                 <View style={{ paddingRight: 5 }}>
                                                                      <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: '#19242C' }}>{item.offer}</Text>
                                                                 </View>
                                                                 <View>
                                                                      <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>{item.usd}</Text>
                                                                 </View>
                                                            </View>
                                                       </View>
                                                  </View>
                                                  <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center' }} >
                                                       <View style={{ paddingRight: 8 }}>
                                                            <TouchableOpacity style={{ backgroundColor: '#EA8C00', width: 75, height: 32, borderRadius: 40, justifyContent: 'center' }}>
                                                                 <Text style={{ fontSize: 12, color: 'white', fontFamily: 'Nunito-Bold', textAlign: 'center' }}>{item.btn1}</Text>
                                                            </TouchableOpacity>
                                                       </View>
                                                       <View>
                                                            <TouchableOpacity style={{ backgroundColor: '#19242C', width: 75, height: 32, borderRadius: 40, justifyContent: 'center' }}>
                                                                 <Text style={{ fontSize: 12, color: 'white', fontFamily: 'Nunito-Bold', textAlign: 'center' }}>{item.btn2}</Text>
                                                            </TouchableOpacity>
                                                       </View>
                                                  </View>
                                                  <View style={{ alignItems: 'flex-end', paddingRight: 5 }}>
                                                       <Text style={{ fontSize: 8, fontFamily: 'Nunito-Bold' }}>{item.time}</Text>
                                                  </View>
                                             </View> :

                                             <View style={{ alignItems: 'flex-end', paddingTop: 5 }}>
                                                  <View style={{
                                                       width: 239, backgroundColor: 'white', padding: 10, borderRadius: 20, shadowColor: 'gray', marginBottom: 10
                                                       ,
                                                       shadowOffset: {
                                                            width: 0,
                                                            height: 1,
                                                       },
                                                       shadowOpacity: 0.3,
                                                       shadowRadius: 3,
                                                       elevation: 5,
                                                  }}>
                                                       <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, alignItems: 'center' }}>
                                                            <View>
                                                                 <Image source={item.m} />
                                                            </View>
                                                            <View style={{ paddingLeft: 5 }}>
                                                                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                      <View style={{ paddingRight: 5 }}>
                                                                           <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: '#19242C' }}>{item.you}</Text>
                                                                      </View>
                                                                      <View>
                                                                           <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>{item.send}</Text>
                                                                      </View>
                                                                 </View>
                                                                 <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>
                                                                      <View style={{ paddingRight: 5 }}>
                                                                           <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: '#19242C' }}>{item.offer}</Text>
                                                                      </View>
                                                                      <View>
                                                                           <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>{item.usd}</Text>
                                                                      </View>
                                                                 </View>
                                                            </View>
                                                       </View>
                                                       <View style={{ alignItems: 'flex-end', paddingRight: 5 }}>
                                                            <Text style={{ fontSize: 8, fontFamily: 'Nunito-Bold' }}>{item.time}</Text>
                                                       </View>
                                                  </View>
                                             </View>


                                        }

                                   </View>
                              )
                         }} />
               </View>

               <View style={{ height: '8%', }}>
                    <View>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium', color: '#838FA0' }}>Enter your offer price</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                         <View>
                              <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold', color: '#19242C' }}>$ Enter amount</Text>
                         </View>
                         <TouchableOpacity>
                              <Image source={require('./Assets/giisty/send.png')} />
                         </TouchableOpacity>
                    </View>
               </View>
               <View style={{ height: '5%', }}>
                    <View style={{ alignItems: 'center', }}>
                         <TouchableOpacity style={style.btn1}>
                              <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Nunito-Bold' }}>Confirm</Text>
                         </TouchableOpacity>
                    </View>
               </View>





          </View>


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

})


