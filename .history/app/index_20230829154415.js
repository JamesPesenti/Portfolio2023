import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LinkBar from "../src/components/LinkBar"

export default function App() {
  return (
      <>
       <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.screenContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
         <View style={styles.aboutMeContainer}>
            <Text style={styles.nameTitle}>I'm James Pesenti</Text>
            <Text style={styles.title}>A Software Developer building mobile apps and websites</Text>
               <Text style={styles.chicago}>
                  <FontAwesome style={{position: "relative", top: -5, right: 5}} name="map-pin" size={20} color="white" /> 
                     Chicago, IL
               </Text>
               <LinkBar />
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
    top: 280,
    left: 120,
    flex: 1,
    position: 'absolute',
   //  color: "#A6ACCD",
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  nameTitle: {
   // color: "#c5c8d9",
   color: "white",
   letterSpacing: .5,
   fontWeight: 'bold',
   fontSize: 25
  },
  title: {
   color: "white",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 25
  },
  chicago: {
   color: "white",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 20,
  }
});
