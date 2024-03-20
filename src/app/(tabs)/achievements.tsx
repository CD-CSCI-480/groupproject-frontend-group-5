import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import achievements from "../../../assets/data/achievements";

const achievement = achievements[0];

export default function AchievementsScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/novus-medal.png')} style={styles.image}/>
            <Text style={styles.title}>{achievement.name}</Text>
            <Text style={styles.description}>{achievement.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20
    },
    image : {
      width: "100%",
      aspectRatio: 1
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign:'center'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    description: {
        fontSize: 15,
        color: 'dimgrey',
        textAlign:'center'
    }
  });