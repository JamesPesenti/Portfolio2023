import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.container}>
          <AboutMe />
          <Scroll />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#0a192f',
  },
  container: {
    position: 'relative',
    zIndex: 1, // Ensure the "About Me" component is above the "Scroll" component
  },
});
