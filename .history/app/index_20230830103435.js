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
  }
});
