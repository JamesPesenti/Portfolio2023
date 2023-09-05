import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const LinkBar = () => {
  return (
    <View style={styles.container}>
        <FontAwesome style={{position: "relative", top: -5, right: 5}} name="envelope-o" size={35} color="blue" />
        <FontAwesome style={{position: "relative", top: -5, right: 5}} name="github" size={35} color="blue" />
        <FontAwesome style={{position: "relative", top: -5, right: 5}} name="map-pin" size={35} color="blue" /> 
    </View>
  )
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "row",
      top: 250,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      gap: 20
   }
})