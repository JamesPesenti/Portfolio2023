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
               <Ionicons name="ios-folder-outline" size={115} color="white">
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
      left: 20,
      alignSelf: 'center',
      backgroundColor: 'transparent', 
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
})