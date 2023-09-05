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
        {/* <Image
          style={styles.backgroundImage}
          source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        /> */}
          <LinkBar />
          <AboutMe />
          {/* <Scroll /> */}
          {/* My Projects section */}
        
        <View style={styles.projectSection}>
            <Text style={styles.projectHeading}>My Projects</Text>
            <View style={styles.projectDetail}>
              <Text style={styles.projectTitle}>Project Title 1</Text>
              <Text style={styles.projectDescription}>
                This is a description of Project 1. You can provide more details about your project here.
              </Text>
            </View>
            <View style={styles.projectDetail}>
              <Text style={styles.projectTitle}>Project Title 2</Text>
              <Text style={styles.projectDescription}>
                This is a description of Project 2. You can provide more details about your project here.
              </Text>
            </View>
            {/* Add more project details as needed */}
          </View>
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
    resizeMode: "contain",
  },
  screenContainer: {
    flexGrow: 1,
  },
  projectSection: {
    padding: 0,
    paddingBottom: 300, // Adjust this value to create space for the "My Projects" section
  },
  projectHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  projectDetail: {
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  projectDescription: {
    fontSize: 16,
    color: 'white',
  },
});
