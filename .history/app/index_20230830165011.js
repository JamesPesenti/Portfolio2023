import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';
import LinkBar from '../src/components/LinkBar';
import MyProjects from "../src/components/MyProjects";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        />
          <LinkBar />
          <AboutMe />
          <View>
            <MyProjects />
          </View>
          {/* My Projects section */}
        {/* <View style={styles.projectSection}>
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
          </View> */}
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#0a192f',
  },
  backgroundImage: {
    // position: 'absolute',
    alignSelf: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 0,
    marginBottom: 0,
    width: "80%",
    height: "95%",
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 10,
    borderColor: "white"
  },
  screenContainer: {
    flexGrow: 1,
  }
});
