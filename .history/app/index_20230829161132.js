import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import LinkBar from "../src/components/LinkBar"

export default function App() {
  return (
      <>
       <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.screenContainer}>
        <LinkBar />
          <Image
            style={styles.image}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
         <View style={styles.aboutMeContainer}>
            <Image style={styles.picture} source={{ uri: "assets/IMG_1619.jpg"}} />
            <Text style={styles.nameTitle}>I'm James Pesenti,</Text>
            <Text style={styles.title}>a Software Developer building mobile apps and websites</Text>
               <Text style={styles.chicago}>
                   in Chicago, IL.  
                  <FontAwesome style={{position: "relative", top: -22, left: 20}} name="map-pin" size={13} color="white" />
                  <Fontisto  style={{position: "relative", top: -5, right: 0}} name="world-o" size={20} color="white" /> 
               </Text>
         </View>
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
   flex: 1, 
  //  backgroundColor: 'white',
   backgroundColor: '#292D3E',
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
    gap: 20,
    top: 100,
    left: 150,
    flex: 1,
    position: 'absolute',
   //  color: "#A6ACCD",
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  picture: {
    width: 200, 
    height: 200, 
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
   fontSize: 35
  },
  chicago: {
   paddingLeft: 0,
   color: "white",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 30,
  }
});
