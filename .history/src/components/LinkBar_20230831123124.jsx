import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
      <View style={styles.container}>
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <MaterialCommunityIcons  name="mailbox-open-up-outline" size={30} color="white" />
            <Text style={styles.link}>Email</Text>
          <FontAwesome name="github" size={30} color="white" />
            <Text style={styles.link}>GitHub</Text>
          <Entypo name="documents" size={30} color="white" /> 
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
      gap: 40,
   },
   link: {
    color: "white",
    alignSelf: "center",
    marginTop: -40
   }
})