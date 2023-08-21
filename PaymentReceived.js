import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const App = () => {
     return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <View>
                         <Image source={require('./Assets/giisty/arrow.png')} />
                    </View>
                    <View style={styles.headerText}>
                         <Text style={styles.headerTitle}>Confirmed</Text>
                    </View>
                    <View>
                         <Text style={styles.cancelText}>Cancel</Text>
                    </View>
               </View>
               <View style={styles.iconTextContainer}>
                    <Image source={require('./Assets/giisty/united-states.png')} />
                    <Text style={styles.iconText}>us</Text>
               </View>
               <View style={styles.imageContainer}>
                    <Image source={require('./Assets/giisty/imgw.png')} style={styles.image} />
               </View>
               <View style={styles.details}>
                    <View style={{ height: 45, justifyContent: 'space-between', }}>
                         <Text style={styles.detailLabel}>Patek Philippe - Nautilus</Text>
                         <Text style={styles.detailText1}>Ref: 5711-01A</Text>
                    </View>
                    <View style={styles.detailRow}>
                         <Text style={styles.priceText}>$53,000</Text>
                    </View>
               </View>
               <View style={styles.detailRow1}>
                    <View style={styles.detailItem}>
                         <Text style={styles.detailLabel1}>Content</Text>
                         <View style={styles.certificateIcons}>
                              <Image source={require('./Assets/giisty/certificate.png')} style={styles.certificateIcon} />
                              <Image source={require('./Assets/giisty/certificate2.png')} style={styles.certificateIcon} />
                         </View>
                    </View>
                    <View style={styles.detailItem}>
                         <Text style={styles.detailLabel2}>Year</Text>
                         <Text style={styles.detailText2}>2022</Text>
                    </View>
                    <View style={styles.detailItem}>
                         <Text style={styles.detailLabel3}>Condition</Text>
                         <Text style={styles.detailText}>Used</Text>
                    </View>
               </View>
               <View style={styles.paymentText}>
                    <Text style={styles.paymentTitle}>We are waiting for your</Text>
                    <Text style={styles.paymentTitle}>payment arrival</Text>
               </View>
               <View style={styles.instructions}>
                    <Text style={styles.instructionsText}>
                         Once you receive the payment from the buyer, please don't forget to notify us by clicking the button below that says "You received the payment."
                    </Text>
               </View>
               <TouchableOpacity style={styles.notificationButton}>
                    <Image source={require('./Assets/giisty/kya.png')} style={styles.notificationIcon} />
               </TouchableOpacity>
               <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.paymentButton}>
                         <Text style={styles.paymentButtonText}>Payment Received</Text>
                    </TouchableOpacity>
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'white',
     },
     header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '12%',
          alignItems: 'center',
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: '#838FA0',
     },
     headerText: {
          paddingRight: 20,
     },
     headerTitle: {
          fontSize: 18,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',
     },
     cancelText: {
          fontSize: 18,
          fontFamily: 'Nunito-Bold',
          color: '#CD1B1B',
     },
     iconTextContainer: {
          paddingHorizontal: 20,
          paddingTop: 10,
     },
     iconText: {
          fontSize: 14,
          fontFamily: 'Nunito-Medium',
     },
     imageContainer: {
          alignItems: 'center',
          top: -20,
     },
     image: {
          width: 153,
          height: 146,
     },
     details: {
          height: '8%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
         
     },
     detailRow: {
          height: 45,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          

     },
     detailRow1: {
          height:"8%",
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomWidth:1,
          borderColor: '#838FA0'

     },
     detailLabel: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color:'#19242C'
     },
     detailLabel1: {
          fontSize: 12,
          fontFamily: 'Nunito-Meduim',
          color:'#838FA0'
     },
     detailLabel2: {
          fontSize: 12,
          fontFamily: 'Nunito-Meduim',
          color:'#838FA0'
     },
     detailLabel3: {
          fontSize: 12,
          fontFamily: 'Nunito-Meduim',
          color:'#838FA0'
     },
     detailText: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',
     },
     detailText1: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',
     },
     detailText2: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',
     },

     priceText: {
          fontSize: 24,
          fontFamily: 'Nunito-Bold',
          color: 'rgba(234, 140, 0, 1)',
     },
     detailItem: {
          height: 48,
          justifyContent: 'space-between',
         
     },
     certificateIcons: {
          flexDirection: 'row',

     },
     certificateIcon: {
          marginRight: 5,
     },
     paymentText: {
          paddingHorizontal: 20,
          height: '12%',
          justifyContent: 'center',
     },
     paymentTitle: {
          fontSize: 20,
          fontFamily: 'Nunito-Bold',
          color: '#19242C',
     },
     instructions: {
          paddingHorizontal: 20,
          height: '18%',
     },
     instructionsText: {
          fontSize: 14,
          fontFamily: 'Nunito-Bold',
          color: '#838FA0',
          lineHeight: 25,
     },
     notificationButton: {
          paddingHorizontal: 20,
          alignItems: 'flex-end',
          height: '9%',
          justifyContent: 'center',
     },
     notificationIcon: {
          height: 40,
          width: 40,
     },
     buttonContainer: {
          alignItems: 'center',
     },
     paymentButton: {
          width: 365,
          height: 48,
          backgroundColor: '#19242C',
          marginHorizontal: 20,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
     },
     paymentButtonText: {
          fontSize: 16,
          fontFamily: 'Nunito-Bold',
          color: 'white',
     },
});

export default App;
