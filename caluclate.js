import React, { useState } from "react";

import { View, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"



const App = () => {

  const [amount, setAmount] = useState('');
  const [amount1, setAmount1] = useState('');
  const [sum, setSum] = useState('0')


  const handleAmountChange = (Text) => {

    setAmount(Text)
  };

  const handleAmount1Change = (Text) => {

    setAmount1(Text)
  };

  const handle = () => {
    const num1 = amount;
    const num2 = amount1;
    const result =Number(num1)  + Number(num2) ;
    setSum(result.toString())
  };

  return (
    <ScrollView style={style.main} >
      <View >
        <Text style={{ fontSize: 30, paddingTop: 20, color: 'blue' }}>Create new account</Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <Image source={require('./Assets/boy.png')} style={style.img1} />
        </View>
        <View>
          <TextInput placeholder="First Number" onChangeText={handleAmountChange} keyboardType="numeric" style={{ borderWidth: 1, borderRadius: 25, paddingLeft: 10, marginTop: 10, height: 40, }} />

          <TextInput placeholder="Second Number" onChangeText={handleAmount1Change} keyboardType="numeric" style={{ borderWidth: 1, borderRadius: 25, paddingLeft: 10, marginTop: 10, height: 40, }} />

          <TextInput placeholder="Answer" value={sum} style={{ borderWidth: 1, borderRadius: 25, paddingLeft: 10, marginTop: 10, height: 40, }} />

        </View>
        {/* <View style={style.input1}>
          <Image source={require('./Assets/Pakistan.png')} style={style.inptimage} />
          <TextInput placeholder="+92" style={{ maxWidth: 200 }} />
        // </View> */}

        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <TouchableOpacity style={style.opt} onPress={handle}>
            <Text>+</Text>
          </TouchableOpacity>
          {/* <Text style={{ paddingTop: 20 }}>OR</Text> */}
        </View>

        {/* <Text style={{fontSize:15,color:'blue', paddingTop:15,textAlign:'center'}}>Sign up with E-mail</Text> */}

      </View>
    </ScrollView>

  )
}







const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'pink',
    paddingHorizontal: 20

  },
  img1: {
    width: 100, height: 100,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 10,
    paddingLeft: 10,
    height: 40
  },
  inptimage: {
    width: 32, height: 32,
    marginRight: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  opt: {
    width: 200, height: 45,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }

})









export default App;