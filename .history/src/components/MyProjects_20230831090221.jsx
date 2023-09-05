import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
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
   {
      id: "4",
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
              <>
               <ImageBackground
                  style={styles.backgroundImage}
                  source={{ uri: "https://st.depositphotos.com/1976499/3032/v/450/depositphotos_30325287-stock-illustration-empty-keyboard-key.jpg"}}
               >
                <View style={styles.box}>
                  {/* <Image style={{ width: 350, height: 50, }} source={{uri: item.image}} /> */}
                  <Text>{item.title}</Text>
                  <View style={{flexDirection: "row"}}>
                     {item.icons.map((icon, index) => (
                        <Image key={index} source={{ uri: icon}} style={{width: 50, height: 50}} />
                     ))}
                  </View>
                     <Text>{item.description}</Text>
               </View>
               </ImageBackground>
              </>
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
      gap: 20,
      backgroundColor: '#0a192f',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center",
      padding: 10,
      width: "80%",
      height: "100%",
    },
    box: {
      flex: 1,
      paddingVertical: 50,
      height: "100%",
      margin: 10,
      padding: 10,
      backgroundColor: 'transparent',
      borderRadius: 10,
      alignItems: 'center',
    },
})