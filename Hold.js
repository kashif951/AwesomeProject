
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native"


export const Hold = () => {


  const Holdoffers = [
    {
      rectangleimage: require('./Assets/giisty/Rectangle.png'),
      azlan:'Azlan',
      active:'Active',
      number:'AMB2345359',
      date: '20, July 2023'
    },




  ]

  return (


    <View style={{ paddingTop: 20,
      paddingHorizontal:15,
      backgroundColor: '#FFFFFF',
      height: '100%',}}>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Releasing</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <View>
              <Text style={styles.cardInfoText}>95% of this seller’s order have been</Text>
              <View style={{ paddingTop: 3 }}>
                <Text style={styles.cardInfoText}>completed within 4:00 minutes</Text>
              </View>
            </View>
            <View style={styles.cardClockContainer}>
              <View style={{ paddingRight: 5 }}>
                <Image source={require('./Assets/giisty/clock.png')} style={styles.cardClockImage} />
              </View>
              <Text style={styles.cardClockText}>01:15</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={Holdoffers}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <View style={styles.listItemContent}>
                  <View style={styles.imageContainer}>
                    <Image source={item.rectangleimage} style={styles.image} />
                  </View>
                  <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                      <View>
                        <Text style={styles.title}>{item.azlan}</Text>
                      </View>
                      <View>
                        <Text style={[styles.activeText, item.active === 'Pending' ? styles.pending : styles.active]}>
                          {item.active}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.infoContainer}>
                      <View>
                        <Text style={styles.infoText}>{item.number}</Text>
                      </View>
                      <View>
                        <Text style={styles.infoText}>{item.date}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

    </View>
  );
};



const styles = StyleSheet.create({
 
  cardContainer: {
    width: 380,
    height: 100,
    backgroundColor: '#D9D9D9',
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
  cardContent: {
    paddingHorizontal:20,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#19242C',
    paddingBottom: 13,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoText: {
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    color: '#838FA0',
  },
  cardClockContainer: {
    flexDirection: 'row',
  },
  cardClockImage: {
    width: 20,
    height: 20,

  },
  cardClockText: {
    fontSize: 14,
    fontFamily: 'Nunito-Bold',
    color: '#EA8C00',
  },
  container: {
    paddingTop: 10,
    
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
    paddingHorizontal:10,
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