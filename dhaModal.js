

import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"

import { useState } from "react";

export const Modal = () => {

const [show,setshow]=useState(false);

     return (



      <ScrollView>
          <View style={{ flex:1 }}>

               <View style={{alignItems:'center'}}>

               <View>
                <Image source={require('./Assets/giisty/T.png')}  />
               </View>

               <View>
                    <Text style={{fontSize:16,fontFamily:'Nunito-Bold'}}>TimeCraft</Text>
                    <Text style={{fontSize:14,fontFamily:'Nunito-Medium',color:'#838FA0'}}>Dubai, UAE</Text>
               </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'center', paddingTop:15,width:'100%',alignItems:'center'}}>

            <View style={{paddingRight:20}} >
             <Image source={require('./Assets/giisty/grup.png')} />
            </View>

            <View style={{paddingLeft:20}}>
               <Image source={require('./Assets/giisty/mic.png')} />
            </View>

            </View>

            <View style={{paddingHorizontal:20}}>

            <View style={{paddingTop:20}}>
            <Text style={{fontSize:12,fontFamily:'Nunito-Medium'}}>Name</Text>
            </View>

            
               <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('./Assets/giisty/profile.png')} style={{width:20,height:20}} />
                    <TextInput placeholder="TimeCraft" style={{fontSize:16,fontFamily:'Nunito-Bold',paddingLeft:10}} />
               </View>
          

               <View style={{paddingTop:20}}>
            <Text style={{fontSize:12,fontFamily:'Nunito-Medium'}}>E-mail</Text>
            </View>

            
               <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('./Assets/giisty/sms.png')} style={{width:20,height:20}} />
                    <TextInput placeholder="E-mail" style={{fontSize:16,fontFamily:'Nunito-Bold',paddingLeft:10}} />
               </View>
          

               <View style={{paddingTop:20}}>
            <Text style={{fontSize:12,fontFamily:'Nunito-Medium'}}>Phone-Number</Text>
            </View>

            
               <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('./Assets/giisty/call.png')} style={{width:20,height:20}} />
                    <TextInput placeholder="Number" keyboardType="numeric" style={{fontSize:16,fontFamily:'Nunito-Bold',paddingLeft:10}} />
               </View>
          
            </View>


          <View style={{paddingHorizontal:20,paddingTop:25}}>
               <TouchableOpacity onPress={()=>setshow(true)} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#19242C',width:327,height:48,borderRadius:58}}>
                    <Image source={require('./Assets/giisty/delet.png')}  />
                    <Text style={{fontSize:16,fontFamily:'Nunito-Bold',color:'white'}}>Delete Chat</Text>
               </TouchableOpacity>
          </View>


          <View style={{paddingHorizontal:20,paddingTop:20}}>
               <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#CD1B1B',width:327,height:48,borderRadius:58}}>
                    <Image source={require('./Assets/giisty/group.png')}  />
                    <Text style={{fontSize:16,fontFamily:'Nunito-Bold',color:'white'}}>Report Dealer</Text>
               </TouchableOpacity>
          </View>



               <View>

                    <Modal 
                    transparent={true}
                    visible={show}
                    
                    animationType="slide"

                    >

                         <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
                              
                           <View style={{alignItems:'center',width:327,height:280,backgroundColor:'#FFFFFF',borderRadius:24}}>

                              <View style={{paddingTop:20}}>
                                   <Image source={require('./Assets/giisty/delet.png')} />
                              </View>

                              <View style={{paddingTop:15}}>
                                   <Text style={{fontSize:20,fontFamily:'Nunito-Bold'}}>Confirmation</Text>
                              </View>

                              <View style={{paddingTop:25}}>
                                   <Text style={{fontSize:12}}>Are you sure, you want to delete this chat?</Text>
                              </View>

                              <View style={{flexDirection:'row', paddingTop:50,width:'100%'}}>

                                 <View style={{paddingLeft:40}}>
                                   <TouchableOpacity onPress={()=>setshow(false)} style={{width:120,height:40,borderWidth:1,borderRadius:100,alignItems:'center',justifyContent:'center',}}>
                                        
                                        <Text style={{fontSize:16,fontFamily:'Nunito-Bold'}}>cancel</Text>
                                   </TouchableOpacity>
                                        
                                   </View>

                                    <View style={{paddingLeft:20}}>
                                   <TouchableOpacity style={{width:120,height:40,borderWidth:1,borderRadius:100,alignItems:'center',justifyContent:'center',backgroundColor:'#E93131'}}>
                                        <Text style={{fontSize:16,color:'white',fontFamily:'Nunito-Bold'}}>Yes, Delete</Text>
                                   </TouchableOpacity>
                                   </View>

                              </View>


                              </View>

                         </View>



                    </Modal>



               </View>




          </View>
          </ScrollView>


     )
}






