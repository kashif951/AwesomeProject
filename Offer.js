import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const Card = ({ rectangleimage, azlan, active, number, date }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemContent}>
        <View style={styles.imageContainer}>
          <Image source={rectangleimage} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>{azlan}</Text>

            </View>
            <View>
              <Text style={[styles.activeText, {color:active=="Pending"?"#19242C":(active=="Canceled"?"#E93131":"#EA8C00")
              
              }]}>{active}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.infoText}>{number}</Text>
            </View>
            <View>
              <Text style={styles.infoText}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Offer = ({data}) => {
  const Offers = [
    {
      rectangleimage: require('./Assets/giisty/Rectangle.png'),
      azlan: 'Azlan',
      active: '$50.000',
      number: 'AMB2345359',
      date: '20, July 2023',
    },
    {
      rectangleimage: require('./Assets/giisty/Rectangle1.png'),
      azlan: 'Manahil',
      active: '$43.000',
      number: 'AMB2345359',
      date: '20, July 2023',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            rectangleimage={item.rectangleimage}
            azlan={item.azlan}
            active={item.active}
            number={item.number}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    width: 380,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'gray',
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  listItemContent: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '15%',
  },
  image: {
    width: 40,
    height: 40,
  },
  textContainer: {
    width: '85%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#19242C',
  },
  activeText: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  pending: {
    color: '#19242C',
  },
  active: {
    color: '#EA8C00',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    color: '#838FA0',
  },
});

export default Offer;
