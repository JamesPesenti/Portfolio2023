import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const LinkBar = () => {
  return (
    <View style={styles.container}>
        <FontAwesome style={{position: "relative", top: -5, right: 5}} name="map-pin" size={20} color="blue" /> 
    </View>
  )
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flex: 1,
      top: 250,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute"
   }
})