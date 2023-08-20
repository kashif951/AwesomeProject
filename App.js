import { } from "react-native";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native"

export const App = () => {

     return (



          <View style={{ flex: 1, backgroundColor: 'white', }}>

               <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '12%', alignItems: 'center',paddingHorizontal:20,borderBottomWidth:1,borderColor:'#838FA0' }}>
                    <View>
                         <Image source={require('./Assets/giisty/arrow.png')} />
                    </View>
                    <View style={{ paddingRight: 20 }}>
                         <Text style={{ fontSize:18, fontFamily: 'Nunito-Bold',color:'#19242C' }}>Confirmed</Text>
                    </View>
                    <View>
                         <Text style={{ fontSize:18, fontFamily: 'Nunito-Bold',color:'#CD1B1B' }}>Cancel</Text>
                    </View>
               </View>
                    <View style={{paddingHorizontal:20,paddingTop:10}}>
                         <Image source={require('./Assets/giisty/united-states.png')} />
                         <Text>us</Text>
                    </View>
                    <View style={{alignItems:'center',top:-20}}>
                         <Image source={require('./Assets/giisty/imgw.png')} style={{width: 153, height:146 }} />
                    </View>
                   

               <View style={{ height: '8%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:20 }}>

                    <View>
                         <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold' }}>Patek Philippe - Nautilus </Text>
                         <Text style={{ fontSize: 14, fontFamily: 'Nunito-Medium' }}>Ref: 5711-01A  </Text>
                    </View>
                    <View>
                         <Text style={{ fontSize: 24, fontFamily: 'Nunito-Bold', color: 'rgba(234, 140, 0, 1)' }}>$53.000</Text>
                    </View>

               </View>

               <View style={{ height: '8%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,borderBottomWidth:1,borderColor:'#838FA0'}}>

                    <View style={{height:48,justifyContent:'space-between'}}>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Content</Text>
                         <View style={{ flexDirection: 'row' }}>
                              <View>
                                   <Image source={require('./Assets/giisty/certificate.png')} />
                              </View>
                              <View style={{ paddingLeft:5 }}>
                                   <Image source={require('./Assets/giisty/certificate2.png')} />
                              </View>
                         </View>
                    </View>
                    <View style={{height:45,justifyContent:'space-between'}}>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Year</Text>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>2022</Text>
                    </View>
                    <View style={{height:45,justifyContent:'space-between'}}>
                         <Text style={{ fontSize: 12, fontFamily: 'Nunito-Medium' }}>Condition</Text>
                         <Text style={{ fontSize: 16, fontFamily: 'Nunito-Bold' }}>Used</Text>
                    </View>
               </View>
                    <View style={{paddingHorizontal:20,height:'12%',justifyContent:'center'}}>
                         <Text style={{fontSize:20,fontFamily:'Nunito-Bold',color:'#19242C'}}>We are waiting for your </Text>
                         <Text style={{fontSize:20,fontFamily:'Nunito-Bold',color:'#19242C'}}>payment arrival</Text>
                    </View>

                    <View style={{paddingHorizontal:20 ,height:'18%'}}>
                         <Text style={{fontSize:14,fontFamily:'Nunito-Bold',color:'#838FA0',lineHeight:25}}>
                         once you received the payment from buyer, please
                         don’t forget to notify us while clicking on the below
                         button that says “ You received the payment”
                         </Text>
                    </View>
                    <TouchableOpacity style={{paddingHorizontal:20,alignItems:'flex-end',height:'9%',justifyContent:"center"}}>
                         <Image source={require('./Assets/giisty/kya.png')} style={{height:40,width:40}}/>
                     </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                   <TouchableOpacity style={{width:365,height:48,backgroundColor:'#19242C',marginHorizontal:20,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:16,fontFamily:'Nunito-Bold',color:'white'}}>Payment Received</Text>
                   </TouchableOpacity>
                   </View>
              




          </View>
     )
}


export default App;