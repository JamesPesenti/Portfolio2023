import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';

export default function App() {
  return (
      <>
       <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.screenContainer}>
          <AboutMe />
          <Text>Next Section</Text>
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
   flex: 1,
  //  backgroundColor: 'white',
  //  backgroundColor: '#1B2240',
   backgroundColor: '#0a192f',
  },
  image: {
   flex: 1,
   bottom: 0,
   width: "100%", 
   height: 'auto', 
   resizeMode: "contain",
   borderRadius: 10,
   borderWidth: 5,
   borderColor: "black"
  },
  aboutMeContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    gap: 20,
    top: 100,
    left: 150,
    borderRadius: 50
  },
  picture: {
    width: 170, 
    height: 170, 
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "white",
  },
  nameTitle: {
   // color: "#c5c8d9",
   color: "white",
   letterSpacing: .5,
   fontWeight: 'bold',
   fontSize: 35
  },
  title: {
   color: "white",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 33
  },
  chicago: {
   paddingLeft: 0,
   color: "white",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 33,
  }
});
