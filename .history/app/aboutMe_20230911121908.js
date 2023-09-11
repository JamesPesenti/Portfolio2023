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
         <View numberOfLines={0} style={styles.aboutMeContainer}>
            <Image style={styles.picture} source={{ uri: "https://github.com/JamesPesenti/C21App/assets/74566532/d4891503-eb4d-48ad-b154-06dad3090850"}} />
            <Text numberOfLines={0} style={styles.nameTitle}>I'm James Pesenti,</Text>
            <Text style={styles.title}>an emerging Software Developer with three years of experience in web and mobile app development, based in Chicago IL.  
                  <FontAwesome style={{position: "relative", top: -25, left: 8}} name="map-pin" size={13} color="grey" />
                  <Fontisto  style={{position: "relative", top: -9, right: 10}} name="world-o" size={20} color="#676E95" /> 
            </Text>
            <Text style={styles.content}>I'm currently developing projects with JavaScript frameworks like React and React Native, while learing more about native iOS and Android development, specifically Kotlin and Swift programming. What truly fuels my passion is mobile app development, especially the art of UI design📱. I get satisfaction in seeing my designs come to life on the screen. Recently, I contributed as a junior developer to a retail tech startup, where I played a crucial role in implementing updates to their website and creating new UI components to enhance the UX for the site. Beyond coding, I enjoy fitness, travel, and cooking Italian cuisine.</Text>
         </View>
    </>
  )
}

export default AboutMe

const styles = StyleSheet.create({
     aboutMeContainer: {
       alignSelf: 'center',
       alignItems: "center",
       justifyContent: 'center',
       paddingHorizontal: 250,
       top: 20,
       gap: 5,
       borderRadius: 50,
     },
     picture: {
       width: 150, 
       height: 150, 
       borderRadius: 100,
       borderWidth: 1.5,
       borderColor: "white",
     },
     nameTitle: {
      color: "#676E95",
      letterSpacing: .7,
      fontWeight: 'bold',
      fontSize: 28
     },
     title: {
      color: "#676E95",
      lineHeight: 47,
      fontWeight: 'bold',
      fontSize: 25
     },
     chicago: {
      paddingLeft: 0,
      color: "#676E95",
      fontWeight: 'bold',
      fontSize: 25,
     },
     content: {
      marginBottom: 20,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      color: "#676E95",
      // lineHeight: 47,
      fontSize: 22,
     },
})