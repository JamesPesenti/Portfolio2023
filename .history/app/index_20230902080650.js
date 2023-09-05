import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from "react"
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';
import LinkBar from '../src/components/LinkBar';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router"


export default function App() {

  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    if(isPressed = true) {
      setIsPressed(true)
    }
  }, [])

  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  let hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  let AMorPM = "AM"

  if (hours > 12) {
    hours -= 12; // Subtract 12 from hours
    AMorPM = "PM"; // Update AMorPM to "PM"
  }
  if(hours === 0) {
    hours = 12
  }
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${AMorPM}`;


  return (
    <>
     <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false} >
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
          <View style={styles.desktopIcons}>
            <SimpleLineIcons name="trash" size={35} color="white" />
            <Link href="/projects" asChild>
              <Pressable onPress={isPressed}>
                <Ionicons name="ios-folder-outline" size={135} color="white">
                  <View style={styles.folderText}>
                    <Text style={styles.text}>Projects</Text>
                  </View>
                </Ionicons>
              </Pressable>
            </Link>
          </View>
          <View style={styles.timeIcons}>
            <Ionicons style={{marginLeft: 0, marginBottom: 200}} name="time-outline" size={35} color="white" />
            <View style={styles.column}>
              <Text style={{color: "white", marginBottom: 3}}>{formattedTime}</Text>
              <Text style={{color: "white", marginBottom: 5}}>{month}/{day}/{year}</Text>
            </View>
          </View>
            {/* <View style={styles.overlayContainer}> */}
              <LinkBar />
            {/* </View> */}
            {/* <AboutMe /> */}
           
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 20
  },
  backgroundImage: {
    alignSelf: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 0,
    marginBottom: 0,
    width: "85%",
    height: "100%",
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
    bottom: 50,
    left: 26,
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
    marginBottom: 195
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






