import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from "react"
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {

  const [emailPressed, setEmailPressed] = useState(false)
  const [githubPressed, setGithubPressed] = useState(false)
  const [resumePressed, setResumePressed] = useState(false)


  handleEmailPressed = () => {
    setEmailPressed(true)
    setTimeout(() => setEmailPressed(false), 1000)
  }

  handleGithubPressed = () => {
    setGithubPressed(true)
    setTimeout(() => setGuthubPressed(false), 1000)
  }

  
  handleResumePressed = () => {
    setResumePressed(true)
    setTimeout(() => setResumePressed(false), 1000)
  }


  const renderIcon = (color, size, name, pressed) => {
    <TouchableOpacity
      onPress={() => {
        if (name === 'mailbox-open-up-outline') handleEmailPress();
        else if (name === 'github') handleGithubPress();
        else if (name === 'documents') handleResumePress();
      }}
      activeOpacity={0.7} // This sets the opacity when pressed
    >
       <View style={[styles.iconContainer, { opacity: pressed ? 0.5 : 1 }]}>
        {name === 'mailbox-open-up-outline' && (
          <MaterialCommunityIcons name={name} size={size} color={color} />
        )}
        {name === 'github' && (
          <FontAwesome name={name} size={size} color={color} />
        )}
        {name === 'documents' && (
          <Entypo name={name} size={size} color={color} />
        )}
      </View>
    </TouchableOpacity>
  }


  return (
    <View style={styles.container}>
       {renderIcon('mailbox-open-up-outline', 30, 'white', emailPressed)}
      <Text style={styles.link}>Email</Text>
      {renderIcon('github', 30, 'white', githubPressed)}
      <Text style={styles.link}>GitHub</Text>
      {renderIcon('documents', 30, 'white', resumePressed)}
      <Text style={styles.link}>Resume</Text>
    </View>
  )
  
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      top: 50,
      left: 50,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      gap: 20
   },
   link: {
    color: "white",
    alignSelf: "flex-start",
   }
})