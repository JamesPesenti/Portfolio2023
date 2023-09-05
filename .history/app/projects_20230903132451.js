import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import projectsData from "../assets/projectsData.json"

const projects = () => {
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
               {/* <ImageBackground
                  imageStyle={{ borderRadius: 20, height: 200}}
                  style={styles.keyImage}
                  source={{ uri: "https://st.depositphotos.com/1976499/3032/v/450/depositphotos_30325287-stock-illustration-empty-keyboard-key.jpg"}}
               > */}
                  <View style={{flexDirection: "row"}}>
                     <View style={styles.box}>
                        <Text style={styles.letterTitle}>
                           {item.title[0]}     </Text>
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
               {/* </ImageBackground> */}
              </>
         )}
      />
    </>
  )
}

export default projects

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 20,
      gap: 0,
      borderRadius: 15,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: "center",
      justifyContent: "center"
    },
    keyImage: {
      width: 180,
      height: 180,
      paddingTop: 15,
      margin: 20,
    },
    box: {
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
    letterTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      top: 10,
      marginRight: "auto",
      marginLeft: 10
    },
    title: {
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 12
    }
})