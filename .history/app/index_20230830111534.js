import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';
import LinkBar from '../src/components/LinkBar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        />
        <ScrollView contentContainerStyle={styles.screenContainer}>
          <LinkBar />
          <AboutMe />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#0a192f',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  screenContainer: {
    flex: 1,
  },
});
