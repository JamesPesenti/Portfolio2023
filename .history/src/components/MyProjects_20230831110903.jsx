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
      description: 'I created a mobile app clone of the ',
   },
   {
      id: "2",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular.',
   },
   {
      id: "3",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native.',
   },
   {
      id: "4",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native.',
   },
   {
      id: "5",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, ',
   },
   {
      id: "6",
      title: 'Airbnb Clone App',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project ',
   },
]

const MyProjects = () => {
  return (
    <>
      <FlatList 
         horizontal
         data={projectsData}
         keyExtractor={(item) => item.id}
         // numColumns={2}
         contentContainerStyle={styles.container}
         renderItem={({item}) => ( 
              <>
               <ImageBackground
                  imageStyle={{ borderRadius: 20, height: 200}}
                  style={styles.keyImage}
                  source={{ uri: "https://st.depositphotos.com/1976499/3032/v/450/depositphotos_30325287-stock-illustration-empty-keyboard-key.jpg"}}
               >
                  <View style={{flexDirection: "row"}}>
                  <View style={styles.box}>
                     <Image style={{ width: 50, height: 50, }} source={{uri: item.image}} />
                     <Text>{item.title}</Text>
                     {/* <View style={{flexDirection: "row"}}>
                        {item.icons.map((icon, index) => (
                           <Image key={index} source={{ uri: icon}} style={{width: 50, height: 50}} />
                        ))}
                     </View> */}
                        {/* <Text>{item.description}</Text> */}
                  </View>
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
      backgroundColor: '#0a192f',
      alignItems: 'center',
      justifyContent: 'center', // Center the row horizontally
    },
    keyImage: {
      width: 200,
      height: 200,
      margin: 10, // Add space between the items
    },
    box: {
      flex: 1,
      paddingVertical: 0,
      height: 100,
      width: 100,
      backgroundColor: 'white',
      alignItems: 'center',
    },
})