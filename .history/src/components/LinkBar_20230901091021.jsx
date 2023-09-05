import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
      <View style={styles.container}>
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <View style={{flexDirection: 'column'}}>
            <Entypo style={styles.icon} name="documents" size={30} color="white" /> 
              <Text style={styles.linkText}>Resume</Text>
          </View>
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
      // left: 450,
      bottom: 40,
      backgroundColor: "black",
      opacity: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
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