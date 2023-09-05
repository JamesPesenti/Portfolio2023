import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import projectsData from "../assets/projectsData.json"

const projects = () => {
  return (
    <>
      {projectsData.map((item) => {
      
            <View>{item.title}</View>
            
  
      })}
    </>
  )
}

export default projects

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 100,
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
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 12
    },
    lineSeparator: {
      borderWidth: 1,
      borderColor: "black",
      width: "100%"
    }
})


