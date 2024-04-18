import React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from 'react-navigation-stack'
import {StyleSheet, View, Text, Image, Modal, Pressable, Button, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import achievements from "../../assets/data/achievements";
import { Achievement } from '../types';
import * as Progress from 'react-native-progress'

type MedalListItemProps = {
    achievement: Achievement;
};

const MedalItem = ({ achievement } : MedalListItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
        <Text style={styles.inspirationalText}>Keep working hard toward your next achievement</Text>
        <Image src={achievement.image} style={styles.image} resizeMode='cover'/>
        <Text style={styles.title}>{achievement.name}</Text>
        <Text style={styles.description}>{achievement.description}</Text>
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

export default MedalItem;

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      maxWidth: "100%",
      marginTop: -120
    },
    image : {
      width: "100%",
      aspectRatio: 1
    },
    title: {
      fontSize: 25,
      fontWeight: '500',
      marginVertical: 2,
      textAlign:'center'
    },
    inspirationalText: {
        fontSize: 18,
        marginVertical: 2,
        textAlign:'center',
        marginBottom: 20,
        marginTop: -20
      },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    description: {
        fontSize: 18,
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
    },
    progressBar: {
      marginTop: 20,
    }
  });