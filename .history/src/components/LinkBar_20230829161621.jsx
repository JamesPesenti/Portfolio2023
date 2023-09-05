import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const LinkBar = () => {
  return (
    <View style={styles.container}>
        {/* <MaterialCommunityIcons name="mailbox-outline" size={35} color="white" /> */}
        <MaterialCommunityIcons style={{position: "relative", top: -5, right: 5}} name="mailbox-open-up-outline" size={35} color="white" />
         <Text>Email</Text>
        <FontAwesome style={{position: "relative", top: -5, right: 5}} name="github" size={35} color="white" />
        <Entypo style={{position: "relative", top: -5, right: 5}} name="documents" size={35} color="white" /> 
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
   }
})