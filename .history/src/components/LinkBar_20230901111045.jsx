import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const LinkBar = () => {
  return (
      <View style={styles.container}>
             <SimpleLineIcons name="trash" size={44} color="black" />
          {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
          <View style={styles.column}>
            <Entypo style={styles.icon} name="documents" size={30} color="white" /> 
              <Text style={styles.linkText}>Resume</Text>
          </View>
          <View style={styles.column}>
            <FontAwesome style={styles.icon} name="github" size={30} color="white" />
              <Text style={styles.linkText}>GitHub</Text>
          </View>
          <View style={styles.column}>
            <MaterialCommunityIcons style={styles.icon} name="mailbox-open-up-outline" size={30} color="white" />
              <Text style={styles.linkText}>Email</Text>
          </View>
      </View>
  )
  
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      // left: 450,
      bottom: 120,
      backgroundColor: "black",
      opacity: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      gap: 40,
   },
   column: {
    flexDirection: 'column',
    right: 60,
    alignItems: "center",
    alignSelf: "center",
   },
   icon: {
    marginLeft: 0,
   },
   linkText: {
    color: "white",
   }
})