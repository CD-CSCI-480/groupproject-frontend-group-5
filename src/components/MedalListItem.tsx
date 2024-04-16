import React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from 'react-navigation-stack'
import {StyleSheet, View, Text, Image, Modal, Pressable, Button, TouchableOpacity} from 'react-native';
import achievements from "../../assets/data/achievements";
import { Achievement } from '../types';

type MedalListItemProps = {
    achievement: Achievement;
};

const MedalListItem = ({ achievement } : MedalListItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Image src={achievement.image} style={styles.image} resizeMode='cover'/>
        <Text style={styles.title}>{achievement.name}</Text>
        <Text style={styles.description}>{achievement.description}</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={isModalVisible} style={styles.modal}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <Image src={achievement.image} style={styles.image} resizeMode='cover'/>
          <Text style={styles.title}>{achievement.name}</Text>
          <Text style={styles.description}>{achievement.description}</Text>
        </View>
      </Modal>
    </View>
  )
};

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
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 2,
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
    },
    modal: {
      backgroundColor: 'white',
      flex: 1,
      margin: 20,
      marginTop: 200,
      maxHeight: '60%',
      width: '90%',
      justifyContent: 'center',
      padding: 20,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 20,
    },
    closeButton: {
      fontSize: 35,
      margin: 5,
      marginTop: -70,
      color: 'lightgrey'
    }
  });