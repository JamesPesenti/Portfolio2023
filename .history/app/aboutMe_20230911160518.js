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
            <Text style={styles.title}>an emerging Software Developer with three years of experience in web and mobile app development, based in Chicago IL.  
                  <FontAwesome style={{position: "relative", top: -20, left: 8}} name="map-pin" size={13} color="grey" />
                  <Fontisto  style={{position: "relative", top: -5, right: 10}} name="world-o" size={20} color="#676E95" /> 
            </Text>
            <Text style={styles.content}>I'm currently developing projects using JavaScript libraries and frameworks like React and React Native, while learing more about native 
              iOS and Android development, specifically Kotlin and Swift programming. What I enjoy the most about mobile development is UI design📱, and seeing my designs instantly come to life on the screen is highly rewarding. 
              Recently, I contributed as a junior developer to a retail tech startup, where I played a crucial role in implementing updates to their website and creating new UI components to enhance
              the user experience for the site. Beyond coding, I enjoy fitness, traveling, and making pasta🍝.
            </Text>
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
       gap: 0,
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
      marginTop: -20,
      color: "#676E95",
      lineHeight: 47,
      fontWeight: 'bold',
      fontSize: 25
     },
     chicago: {
      marginTop: -20,
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