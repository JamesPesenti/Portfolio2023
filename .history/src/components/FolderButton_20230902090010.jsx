import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from "react"
import { Link } from "expo-router"
import { Ionicons } from '@expo/vector-icons';


const FolderButton = () => {

  const [isPressed, setIsPressed] = useState(false)

  const handlePress = () => {
    setIsPressed(!isPressed)
  }

  const buttonStyles = {
    opacity: isPressed ? 0.1 : 1,
    backgroundColor: isPressed ? "blue" : "red"
  }

  return (
    <>
       <Link href="/projects" asChild>
         <Pressable onPress={() => console.warn("works")}>
         {({ pressed }) => (
            <View style={[buttonStyles, {padding: 10}]} >
               <Ionicons name="ios-folder-outline" size={135} color="white">
                  <View style={styles.folderText}>
                     <Text style={styles.text}>{pressed ? "Pressed" : "Press Me"}</Text>
                  </View>
               </Ionicons>
            </View>
         )}
         </Pressable>
      </Link>
    </>
  )
}

export default FolderButton

const styles = StyleSheet.create({
   folderText: {
      position: 'absolute',
      bottom: 50,
      left: 26,
      alignSelf: 'center',
      backgroundColor: 'transparent', 
    },
    text: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
})