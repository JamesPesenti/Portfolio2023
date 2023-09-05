import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MyProjects = () => {
  return (
    <>
      <View style={styles.container}>
         <View style={styles.box}>
            <Image />
            <Text>Airbnb Clone App</Text>
            <Image style={{width: 50, height: 50}} source={{ uri: "https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"}} />
            <Image style={{width: 50, height: 50}} source={{ uri: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"}} />
         </View>
      </View>
    </>
  )
}

export default MyProjects

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   box: {
      width: 300,
      height: 300,
      backgroundColor: "white",
      margin: 10,
      padding: 10
   }
})