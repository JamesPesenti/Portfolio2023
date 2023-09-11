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
                  <FontAwesome style={{position: "relative", top: -35, left: 10}} name="map-pin" size={13} color="grey" />
                  <Fontisto  style={{position: "relative", top: -20, right: 10}} name="world-o" size={20} color="#676E95" /> 
            </Text>
            <Text style={styles.content}>I'm James Pesenti, a dedicated software developer with three years of experience in web and mobile app development. My journey began with HTML and CSS, and I've since honed my skills in JavaScript frameworks like React and React Native. What truly fuels my passion is mobile app development, especially the intricate world of UI design. I find immense satisfaction in seeing my designs come to life on the screen. Recently, I contributed as a junior developer to a retail tech startup, where I played a crucial role in implementing pivotal updates to their website. Beyond coding, I enjoy staying active with fitness, exploring new destinations through travel, and savoring the flavors of Italian cuisine.</Text>
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
     },
     content: {
      alignItems: "flex-end"
     },
})