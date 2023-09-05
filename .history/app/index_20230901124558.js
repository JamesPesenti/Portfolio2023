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

  
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const AMorPM = hours >= 12 ? "PM" : "AM"

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
          <View style={styles.desktopIcons}>
            <SimpleLineIcons name="trash" size={35} color="white" />
            <Ionicons name="ios-folder-outline" size={155} color="white">
              <View style={styles.folderText}>
                <Text style={styles.text}>Projects</Text>
              </View>
            </Ionicons>
          </View>
          <View style={styles.timeIcons}>
            <Ionicons style={{marginLeft: 0, marginBottom: 235}} name="time-outline" size={35} color="white" />
            <View style={styles.column}>
              <Text style={{color: "white", marginBottom: 25}}>{hours}:{minutes} {AMorPM}</Text>
              <Text style={{color: "white"}}>{month}/{day}/{year}</Text>
            </View>
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
  desktopIcons: {
    position: "absolute",
    marginBottom: -160,
    alignItems: "flex-end",
    bottom: "70%",
    right: "70%",
  },
  folderText: {
    position: 'absolute',
    bottom: 60,
    left: 36,
    alignSelf: 'center',
    backgroundColor: 'transparent', 
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  timeIcons: {
    position: "absolute",
    flexDirection: "row",
    marginBottom: -155,
    alignItems: "flex-end",
    bottom: "77%",
    right: "11%",
  },
  column: {
    flexDirection: 'column',
    marginBottom: 235,
    gap: 0
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






