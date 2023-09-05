import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';
import LinkBar from '../src/components/LinkBar';
import MyProjects from "../src/components/MyProjects";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


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
          <View style={styles.trash}>
            <SimpleLineIcons name="trash" size={35} color="white" />
            <Ionicons style={{marginRight: 30,}} name="ios-folder-outline" size={155} color="white" />
            <Ionicons style={{marginRight: 100}} name="time-outline" size={35} color="white" />
          </View>
            {/* <View style={styles.overlayContainer}> */}
              <LinkBar />
            {/* </View> */}
            {/* <AboutMe /> */}
            <View style={{ marginTop: 5, width: '85%', justifyContent: 'center', alignSelf: 'center'}}>
              <MyProjects />
            </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    // backgroundColor: 'white',
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
    width: "85%",
    height: "86%",
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 30,
    borderColor: "black"
  },
  trash: {
    position: "absolute",
    marginBottom: -160,
    alignItems: "flex-end",
    bottom: "77%",
    right: "15%",
  },
  // overlayContainer: {
  //   borderRadius: 50,
  //   flex: 1,
  //   position: 'absolute',
  //   top: -50,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'black',
  //   opacity: 1, 
  // },
  contentContainer: {
    alignItems: 'center',
  }
});






