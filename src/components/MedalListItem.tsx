import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import achievements from "../../assets/data/achievements";
import { Achievement } from '../types';

type MedalListItemProps = {
    achievement: Achievement;
};

const MedalListItem = ({ achievement } : MedalListItemProps) => {
  return (
    <View style={styles.container}>
      <Image src={achievement.image} style={styles.image} resizeMode='cover'/>
      <Text style={styles.title}>{achievement.name}</Text>
      <Text style={styles.description}>{achievement.description}</Text>
    </View>
  )
}

export default MedalListItem;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 20,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 20,
      flex: 1,
      maxWidth: "50%"
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
        fontSize: 13,
        color: 'dimgrey',
        textAlign:'center'
    }
  });