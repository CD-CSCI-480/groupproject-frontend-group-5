import {StyleSheet, View, Text} from 'react-native';

// const achievement = achievements[0]

export default function AchievementsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novus</Text>
            <Text style={styles.description}>Focus for 10 hours</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    description: {
        fontSize: 15,
        color: 'dimgrey'
    }
  });