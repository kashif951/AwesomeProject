import React, { useEffect, useState } from "react";

import { View, Text, Button, } from "react-native"



const App = () => {
    
const[count,setcount]=useState(0);
const[data,setdata]=useState(100);

   useEffect(()=>{
    console.warn(count);
   },[count])

    return (
        <View>

            <Text style={{ fontSize: 24 }}> count {count} </Text>
            <Text style={{fontSize:30}}>data count {data}</Text>

            <Button title="update counter" onPress={()=>setcount(count+1)} />
            <Button title="updata data" onPress={()=>setdata(data+1)} />
          

        </View>
    )
}
    