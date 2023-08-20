import { View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList } from "react-native"
import React from "react";
import { } from "react-native";
import TabViewExample from "./Tabviw";


const App = () => {





    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('./Assets/giisty/arrow.png')} />
        </View>
        <View>
          <Text style={styles.headerText}>Activities</Text>
        </View>
      </View>

      <TabViewExample />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '10%',
      alignItems: 'center',
      borderBottomWidth: 0.4,
      borderColor: '#19242C',
      paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 18,
      fontFamily: 'Nunito-Bold',
      color: '#19242C',
    },
  });
  

export default App;
