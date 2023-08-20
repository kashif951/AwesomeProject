import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text,FlatList,Button } from "react-native"
import axios from 'axios';

const App = () => {
   
     
     const [data,setdata]=useState(null);

    //  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImltcmFudWdvdmlAZ21haWwuY29tIiwiaWQiOjE4NSwidGltZV96b25lIjoiMCIsImlhdCI6MTY5MTY0ODgzNCwiZXhwIjoxNjkyMjUzNjM0fQ.OchZ_T1dxjgqUsfXaQdSd1d2Y6uvpnrdR_PBLHfNDDE'; // Replace with the actual token

     useEffect(()=>{
     axios.get('https://prod.dealershive.com/dashboard_total_user', {
       headers: {
         'Authorization': `Bearer ${token}`
       }
     })
     .then(function (response) {
       console.log(response.data);
       setdata(response.data.Users);
     })
     .catch(function (error) {
       console.log(error);
     });
},[])
//    console.log(data);

const handleDelete = (itemId) => {
     let newArray = data.filter((item) => item.id != itemId )
     setdata(newArray)
   
   };

  return (
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
  )
}






export default App;