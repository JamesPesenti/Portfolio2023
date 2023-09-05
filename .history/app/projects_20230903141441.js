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
                        <View style={{flexDirection: "row"}}>
                           {item.icons.map((icon, index) => (
                              <Image key={index} source={{ uri: icon}} style={{ marginTop: -50, width: 25, height: 25}} />
                           ))}
                        </View>
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
  
})