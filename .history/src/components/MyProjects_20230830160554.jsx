import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const projectsData = [
   {
      id: "1",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as Google autocomplete search, Image carousel with pagination, OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations, Google Maps functionality to select an Airbnb on the map based on price.',

   }
]

const MyProjects = () => {
  return (
    <>
      <FlatList 
         data={projectsData}
         keyExtractor={(item) => item.id}
         numColumns={2}
         contentContainerStyle={styles.container}
         renderItem={(item) => (
            <View style={styles.container}>
               <View style={styles.box}>
                  <Image style={{ width: 100, height: 100 }} source={item.image} />
                  <Text>{item.image}</Text>
                {item.icons.map((icon, index) => (
                  <Image key={index} source={{ uri: icon}} style={{width: 50, height: 50}} />
                ))}
                  <Image style={{width: 50, height: 50}} source={{ uri: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"}} />
                  <Text>{item.discription}</Text>
               </View>
            </View>
         )}
      />
    </>
  )
}

export default MyProjects

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 100,
      paddingHorizontal: 50,
      gap: 100,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0a192f',
   },
   box: {
      flex: 1,
      width: 0,
      height: 350,
      backgroundColor: "white",
      margin: 10,
      padding: 10,
      paddingHorizontal: 100,
      borderRadius: 10
   }
})