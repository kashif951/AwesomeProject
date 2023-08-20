import React, { useEffect } from "react";
import { useState } from "react";
import { View,Button,FlatList,Text, TextInput } from "react-native"
import axios from 'axios';

const App = () => {

     const [name,setFirstName] = useState("");
     const [password,setPassword] = useState("");
    
     
     const [data,setData]=useState(null);
     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikthc2hpY29tNjM2QGdtYWlsLmNvbSIsImlkIjoyMjQsInJvbGUiOjAsInRpbWVfem9uZSI6IjAiLCJpYXQiOjE2OTIyOTIzMzUsImV4cCI6MTY5Mjg5NzEzNX0.A8OQGGu8XpozFbzNFMeIg1rnJ1xxuT3P3PnWrp37PYo'; // Replace with your actual token

     useEffect(() => {
          axios.get('https://prod.dealershive.com/dashboard_total_user', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          })
               .then(function (response) {
                    
                      setData(response.data.Users);
               })
               .catch(function (error) {
                    console.log(error);
               });
     }, []);
     const handleDelete = (itemId) => {
      let newArray = data.filter((item) => item.id != itemId )
      setData(newArray)
    
    };
    

        const handleNameChange = (text) => {
          setFirstName(text)

        };
      
        const handlePasswordChange = (text) => {
          setPassword(text);
        };

    
       
     const handleLoginClick = () => {
     
       const loginData = {
        email:name,
        passcode:+password,
        timezone:"-300",
        type:"verify",
        phone:0
       };
     console.log(loginData);
       axios.post('https://prod.dealershive.com/login_with_email', loginData) 
         .then(response => {
           console.log(response.data);
         })
         .catch(error => {
           console.error(error);
         });
     }
     

     return (
          <View>

          <View style={{padding:20,borderBottomWidth:1,borderColor:'red'}}>

           <View>
          <TextInput placeholder="Name" 
          value={name}
          onChangeText={handleNameChange}
          style={{fontSize:30,borderWidth:1,borderRadius:10}} /> 
          </View>

          <View style={{paddingTop:10}}>
          <TextInput placeholder="Password"
          keyboardType="numeric"
          value={password}
          onChangeText={handlePasswordChange}
          style={{fontSize:30,borderWidth:1,borderRadius:10}} /> 
          </View>

          <View style={{paddingTop:10}}>
          <Button  title="SUBMITE" onPress={handleLoginClick} />
          </View>
          </View>

          <View>
          <FlatList 
          data={data}
          renderItem={({item})=>(
               <View style={{padding:20}}> 
                    <Text style={{fontSize:30}}>{item.id}</Text>
                    <Text style={{fontSize:20}}>{item.username}</Text>
                    <Text style={{fontSize:20}}>{item.email}</Text>
                    <Button title="DELETE"  onPress={() => handleDelete(item.id)}/>
               </View>
          )}
          />
     </View>

         

</View>
     )
}






export default App;