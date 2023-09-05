import { StyleSheet, Text, View } from 'react-native'
import LinkBar from './LinkBar'

const AboutMe = () => {
  return (
    <>
        <LinkBar />
          <Image
            style={styles.image}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
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

const styles = StyleSheet.create({})