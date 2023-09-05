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
            <Text>I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as</Text>
            <Text>&#8226; Google autocomplete search, Image carousel with pagination, OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations, Google Maps functionality to select an Airbnb on the map based on price</Text>
         </View>
         <View style={styles.box}>
            <Image />
            <Text>Donut Shop App & Dashboard</Text>
            <Image style={{width: 50, height: 50}} source={{ uri: "https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"}} />
            <Image style={{width: 50, height: 50}} source={{ uri: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"}} />
            <Text>I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as</Text>
            <Text>&#8226; Google autocomplete search, Image carousel with pagination, OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations, Google Maps functionality to select an Airbnb on the map based on price</Text>
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
      backgroundColor: '#0a192f',
   },
   box: {
      position: 'absolute',
      width: 250,
      height: 250,
      backgroundColor: "white",
      margin: 10,
      padding: 10
   }
})