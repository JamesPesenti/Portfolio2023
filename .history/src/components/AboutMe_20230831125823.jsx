import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import LinkBar from './LinkBar'

const AboutMe = () => {
  return (
    <>
        {/* <LinkBar /> */}
         <View style={styles.aboutMeContainer}>
            <Image style={styles.picture} source={{ uri: "assets/IMG_1619.jpg"}} />
            <Text style={styles.nameTitle}>I'm James Pesenti,</Text>
            <Text style={styles.title}>a Software Developer building mobile apps </Text>
               <Text style={styles.chicago}>
                  and websites in Chicago, IL.  
                  <FontAwesome style={{position: "relative", top: -35, left: 10}} name="map-pin" size={13} color="white" />
                  <Fontisto  style={{position: "relative", top: -20, right: 10}} name="world-o" size={20} color="white" /> 
               </Text>
         </View>
    </>
  )
}

export default AboutMe

const styles = StyleSheet.create({
   image: {
      flex: 1,
      bottom: 50,
      width: "100%", 
      height: 'auto', 
      resizeMode: "contain",
      borderRadius: 10,
     },
     aboutMeContainer: {
       position: 'absolute',
       alignItems: 'flex-start',
       paddingHorizontal: 10,
       gap: 20,
       top: 100,
       left: 250,
       borderRadius: 50,
       marginBottom: 100
     },
     picture: {
       width: 170, 
       height: 170, 
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
      fontSize: 33
     },
     chicago: {
      paddingLeft: 0,
      color: "white",
      // color: "#676E95",
      fontWeight: 'bold',
      fontSize: 33,
     }
})