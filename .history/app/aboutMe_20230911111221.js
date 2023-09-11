import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from "expo-router";


const AboutMe = () => {

  const router = useRouter()

  return (
    <>
      <View>
        <Pressable  style={{padding: 20}} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="gray" />
        </Pressable>
      </View>
         <View style={styles.aboutMeContainer}>
            <Image style={styles.picture} source={{ uri: "https://github.com/JamesPesenti/C21App/assets/74566532/d4891503-eb4d-48ad-b154-06dad3090850"}} />
            <Text style={styles.nameTitle}>I'm James Pesenti,</Text>
            <Text style={styles.title}>a Software Developer building mobile apps </Text>
               <Text style={styles.chicago}>
                  and websites in Chicago, IL.  
                  <FontAwesome style={{position: "relative", top: -35, left: 10}} name="map-pin" size={13} color="grey" />
                  <Fontisto  style={{position: "relative", top: -20, right: 10}} name="world-o" size={20} color="#676E95" /> 
               </Text>
         </View>
    </>
  )
}

export default AboutMe

const styles = StyleSheet.create({
     aboutMeContainer: {
       flex: 1,
      //  position: 'absolute',
       alignSelf: 'center',
       alignItems: "center",
       justifyContent: 'center',
       gap: 15,

       borderRadius: 50,
     },
     picture: {
       width: 170, 
       height: 170, 
       borderRadius: 100,
       borderWidth: 1.5,
       borderColor: "white",
     },
     nameTitle: {
      color: "#676E95",
      letterSpacing: .5,
      fontWeight: 'bold',
      fontSize: 28
     },
     title: {
      color: "#676E95",
      fontWeight: 'bold',
      fontSize: 25
     },
     chicago: {
      paddingLeft: 0,
      color: "white",
      color: "#676E95",
      fontWeight: 'bold',
      fontSize: 25,
     }
})