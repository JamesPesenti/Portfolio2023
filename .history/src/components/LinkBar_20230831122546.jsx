import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
      <View style={styles.container}>
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <MaterialCommunityIcons style={{ top: 13, right: 0, hovered: true,}} name="mailbox-open-up-outline" size={30} color="white" />
            <Text style={styles.link}>Email</Text>
          <FontAwesome style={{ top: 13, right: 15}} name="github" size={30} color="white" />
            <Text style={styles.link}>GitHub</Text>
          <Entypo style={{ top: 13, right: 15}} name="documents" size={30} color="white" /> 
            <Text style={styles.link}>Resume</Text>
      </View>
  )
  
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      backgroundColor: "black",
      opacity: 0.8,
      top: 0,
      left: 120,
      bottom: 240,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      gap: 20
   },
   link: {
    opacity: 1,
    color: "white",
    alignSelf: "flex-start",
   }
})