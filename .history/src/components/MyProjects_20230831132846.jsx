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
      title: 'Donut Shop App & Dashboard',
      image: 'https://jamespesentiportfolio.netlify.app/images/appAndDashMock.png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular.',
   },
   {
      id: "3",
      title: 'UberEats Clone App',
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
      title: '6',
      image: 'https://jamespesentiportfolio.netlify.app/images/mockrocket-capture%20(11).png',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, ',
   },
   {
      id: "6",
      title: '',
      image: '',
      icons: [
        'https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif',
        'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
      ],
      description: 'I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project ',
   },
   {
      id: "7",
      title: '12',
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
         // horizontal
         data={projectsData}
         keyExtractor={(item) => item.id}
         numColumns={4}
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
                        <Text style={styles.title}>{item.title}</Text>
                        <Image style={{ width: 100, height: 50, resizeMode: "contain", borderRadius: 10, }} source={{uri: item.image}} />
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
      marginBottom: 100,
      paddingVertical: 20,
      paddingHorizontal: "100%",
      gap: 0,
      borderRadius: 15,
      backgroundColor: 'black',
      borderWidth: 10,
      bordeerColor: "black",
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: "center",
      justifyContent: "center"
    },
    keyImage: {
      flex: 1,
      width: 200,
      height: 200,
      paddingTop: 15,
      margin: 20,
    },
    box: {
      flex: 1,
      gap: 10,
      marginTop: 20,
      paddingHorizontal: 20,
      height: 100,
      width: 100,
      backgroundColor: 'transparent',
      textAlign: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      // paddingHorizontal: 0,
    }
})