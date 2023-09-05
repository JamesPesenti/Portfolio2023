import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
    <View style={styles.linkContainer}>
      <View style={styles.container}>
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <MaterialCommunityIcons style={{position: "relative", top: 13, right: 15, hovered: true,}} name="mailbox-open-up-outline" size={30} color="white" />
            <Text style={styles.link}>Email</Text>
          <FontAwesome style={{position: "relative", top: 13, right: 15}} name="github" size={30} color="white" />
            <Text style={styles.link}>GitHub</Text>
          <Entypo style={{position: "relative", top: 13, right: 15}} name="documents" size={30} color="white" /> 
            <Text style={styles.link}>Resume</Text>
      </View>
    </View>
  )
  
}

export default LinkBar

const styles = StyleSheet.create({
   linkContainer: {
    flex: 1,
    backgroundColor: "black",
   },
   container: {
      flexDirection: "column",
      top: 50,
      left: 100,
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