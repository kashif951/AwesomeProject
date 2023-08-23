import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, TextInput, Image,TouchableOpacity } from "react-native"
import axios from 'axios';
const App = () => {

     const [name, setFirstName] = useState("");
     const [password, setPassword] = useState("");
     const [data, setData] = useState(null);

     const [passwordVisible, setPasswordVisible] = useState(false);


     const handleNameChange = (text) => {
          setFirstName(text)

     };

     const handlePasswordChange = (text) => {
          setPassword(text);
     };

     const togglePasswordVisibility = () => {
          setPasswordVisible((prevVisible) => !prevVisible);
        };

     const handleLoginClick = () => {

          const loginData = {
               email: name,
               passcode:+password,
               timezone: "-300",
               type: "verify",
               phone: 0
          };

          console.log(loginData);
          axios.post('https://prod.dealershive.com/login_with_email', loginData)
               .then(response => {
                   
                    setData(response.data)
                    
               })
               .catch(error => {
                    console.error(error);
               });
               
     } 


     return (
          <View style={{ flex: 1, }}>

               <View style={{ height: '30%', backgroundColor: '#303548', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                         <Image source={require('./Assets/giisty/logo.png')} style={{ width: 48, height: 48 }} />
                    </View>
                    <View>
                         <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Nunito-Bold' }}>giisty</Text>
                    </View>
               </View>

               <View style={{height:'15%',marginHorizontal:20,justifyContent:'center'}}>
                    <View>
                    <Text style={{fontSize:16,}}>Email</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                         <View style={{paddingRight:5}}>
                         <Image source={require('./Assets/giisty/email.png')} />
                         </View>
                         <TextInput  placeholder="E-Mail"
                         value={name}
                         onChangeText={handleNameChange}
                         style={{fontSize:16,}}/>
                    </View> 
               </View>

               <View style={{height:'15%',marginHorizontal:20,justifyContent:'center',}}>
                    <Text style={{fontSize:16,}}>Password</Text>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                         <View style={{paddingRight:5}}>
                         <Image source={require('./Assets/giisty/key.png')} />
                         </View>
                         <View style={{width:'85%',}}>
                         <TextInput  placeholder="Password" 
                         value={password}
                         onChangeText={handlePasswordChange}
                         secureTextEntry={!passwordVisible}
                         style={{fontSize:16,}}/>
                         </View>
                         <TouchableOpacity  onPress={togglePasswordVisibility}>
                         <Image source={require('./Assets/giisty/eye.png')} />
                         </TouchableOpacity>
                        
                    </View> 
               </View>

               <View style={{height:'15%',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={handleLoginClick}
                    style={{width:343,height:45,backgroundColor:'rgba(136, 237, 254, 1)',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                         <Text style={{color:'rgba(98, 94, 254, 1)',fontSize:16,fontFamily:'Nunito-Bold'}}>Login</Text>
                    </TouchableOpacity>
               </View>


          </View>
     )
}






export default App;