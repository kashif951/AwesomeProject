import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"
import CompletedCard from "./CompletedCard"


export const Confirmed = () => {


    const Confirmed = [
        {
          watch: require('./Assets/giisty/smalw.png'),
          rolex: 'Rolex Z902',
          year: 'Patek Philippe - 2022',
          used: 'Condition: Used',
          price: '$2400,90',
          certificate: require('./Assets/giisty/certificate.png'),
          certificate2: require('./Assets/giisty/certificate2.png'),
          textinfor:'Buyer information',
          ractanglepic:require('./Assets/giisty/Rectangle1.png'),
          manahil:'Manahil',
          numbber:'AMB2345359',
          completedtxt:'Confirmed',
          date:'20, July',
          date1:' 2023',
        },
        {
          watch: require('./Assets/giisty/smalw.png'),
          rolex: 'Rolex Z902',
          year: 'Patek Philippe - 2022',
          used: 'Condition: Used',
          price: '$2400,90',
          certificate: require('./Assets/giisty/certificate.png'),
          certificate2: require('./Assets/giisty/certificate2.png'),
          textinfor:'Buyer information',
          ractanglepic:require('./Assets/giisty/Rectangle1.png'),
          manahil:'Manahil',
          numbber:'AMB2345359',
          completedtxt:'Confirmed',
          date:'20, July',
          date1:' 2023',
        },
       
        
    
      ]

      return (


        <View style={{ paddingHorizontal: 20 }}>
        <FlatList
          data={Confirmed}
          renderItem={({ item }) => <CompletedCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    )
}