import { Dimensions, StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import projectsData from "../assets/projectsData.json"

const width = Dimensions.get("window").width

const projects = () => {
  
  return (
    <>
      <FlatList 
         horizontal
         data={projectsData}
         snapToAlignment="start"
         decelerationRate={"fast"}
         snapToInterval={Dimensions.get("window").width}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.id}
         // numColumns={4}
         contentContainerStyle={styles.container}
         renderItem={({item}) => ( 
              <>
               {/* <ImageBackground
                  imageStyle={{ borderRadius: 20, height: 200}}
                  style={styles.keyImage}
                  source={{ uri: "https://st.depositphotos.com/1976499/3032/v/450/depositphotos_30325287-stock-illustration-empty-keyboard-key.jpg"}}
               > */}
                  <View style={styles.container} >
                     <View style={styles.box}>
                        <Image style={{ width: 250, height: 250, resizeMode: "contain", borderRadius: 10, }} source={{uri: item.image}} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <View style={styles.lineSeparator} />
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
      left: 10,
      right: 10,
      
      gap: 100,
      borderRadius: 15,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: "center",
      // justifyContent: "flex-end"
    },
    keyImage: {
      width: 180,
      height: 180,
      paddingTop: 15,
      margin: 20,
    },
    box: {
      gap: 5,
      marginTop: 20,
      paddingHorizontal: 20,
      height: 250,
      width: 250,
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
      fontWeight: 'bold',
      fontSize: 12
    },
    lineSeparator: {
      borderWidth: 1,
      borderColor: "black",
      width: "100%"
    }
})