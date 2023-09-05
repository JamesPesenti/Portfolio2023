// import { StyleSheet, Text, View, Image } from 'react-native'
// import { FontAwesome } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import LinkBar from './LinkBar'

// const AboutMe = () => {
//   return (
//     <>
//         {/* <LinkBar /> */}
//          <View style={styles.aboutMeContainer}>
//             <Image style={styles.picture} source={{ uri: "assets/IMG_1619.jpg"}} />
//             <Text style={styles.nameTitle}>I'm James Pesenti,</Text>
//             <Text style={styles.title}>a Software Developer building mobile apps </Text>
//                <Text style={styles.chicago}>
//                   and websites in Chicago, IL.  
//                   <FontAwesome style={{position: "relative", top: -35, left: 10}} name="map-pin" size={13} color="white" />
//                   <Fontisto  style={{position: "relative", top: -20, right: 10}} name="world-o" size={20} color="white" /> 
//                </Text>
//          </View>
//     </>
//   )
// }

// export default AboutMe

// const styles = StyleSheet.create({
//    image: {
//       flex: 1,
//       bottom: 50,
//       width: "100%", 
//       height: 'auto', 
//       resizeMode: "contain",
//       borderRadius: 10,
//      },
//      aboutMeContainer: {
//        position: 'absolute',
//        alignItems: 'flex-start',
//        paddingHorizontal: 10,
//        gap: 20,
//        top: 100,
//        left: 250,
//        borderRadius: 50,
//      },
//      picture: {
//        width: 170, 
//        height: 170, 
//        borderRadius: 100,
//        borderWidth: 1.5,
//        borderColor: "white",
//      },
//      nameTitle: {
//       // color: "#c5c8d9",
//       color: "white",
//       letterSpacing: .5,
//       fontWeight: 'bold',
//       fontSize: 35
//      },
//      title: {
//       color: "white",
//       // color: "#676E95",
//       fontWeight: 'bold',
//       fontSize: 33
//      },
//      chicago: {
//       paddingLeft: 0,
//       color: "white",
//       // color: "#676E95",
//       fontWeight: 'bold',
//       fontSize: 33,
//      }
// })







import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from "react"
import { Link } from "expo-router"
import { Ionicons } from '@expo/vector-icons';


const AboutMe = () => {

  const [isPressed, setIsPressed] = useState(false)

  const handlePress = () => {
    setIsPressed(!isPressed)
  }

  const buttonStyles = {
    opacity: isPressed ? 0.1 : 1,
    // backgroundColor: isPressed ? "blue" : "red"
  }

  return (
    <>
       <Link href="/aboutMe" asChild>
         <Pressable onPress={handlePress}>
         {({ pressed }) => (
            <View style={[buttonStyles, {padding: 10}]} >
               <Ionicons name="ios-folder-outline" size={135} color="white">
                  <View style={styles.folderText}>
                     <Text style={styles.text}>{pressed ? "😁" : "About Me"}</Text>
                  </View>
               </Ionicons>
            </View>
         )}
         </Pressable>
      </Link>
    </>
  )
}

export default AboutMe

const styles = StyleSheet.create({
   folderText: {
      position: 'absolute',
      bottom: 55,
      left: 26,
      alignSelf: 'center',
      backgroundColor: 'transparent', 
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
})