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
   },
   {
      id: "2",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as Google autocomplete search, Image carousel with pagination, OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations, Google Maps functionality to select an Airbnb on the map based on price.',
   },
   {
      id: "3",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as Google autocomplete search, Image carousel with pagination, OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations, Google Maps functionality to select an Airbnb on the map based on price.',
   },
]

const MyProjects = () => {
  return (
    <>
      <FlatList 
         data={projectsData}
         keyExtractor={(item) => item.id}
         numColumns={2}
         contentContainerStyle={styles.container}
         renderItem={({item}) => (
               <View style={styles.box}>
                  <Image style={{ width: 100, height: 100 }} source={{uri: item.image}} />
                  <Text>{item.image}</Text>
                {item.icons.map((icon, index) => (
                  <Image key={index} source={{ uri: icon}} style={{width: 50, height: 50}} />
                ))}
                  <Text>{item.description}</Text>
               </View>
         )}
      />
    </>
  )
}

export default MyProjects

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: '#0a192f',
    },
    box: {
      flex: 1,
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },
})