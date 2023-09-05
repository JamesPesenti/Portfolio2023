import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
      <View style={styles.container}>
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <Entypo style={styles.icon} name="documents" size={30} color="white" /> 
            <Text style={styles.linkText}>Resume</Text>
          <MaterialCommunityIcons style={styles.icon} name="mailbox-open-up-outline" size={30} color="white" />
            <Text style={styles.linkText}>Email</Text>
          <FontAwesome style={styles.icon} name="github" size={30} color="white" />
            <Text style={styles.linkText}>GitHub</Text>
      </View>
  )
  
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      right: 50,
      bottom: 20,
      backgroundColor: "black",
      opacity: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      gap: 40,
   },
   icon: {
    marginRight: 10
   },
   linkText: {
    color: "white",
    alignSelf: "center",
    marginTop: -40,
    marginRight: 10
   }
})