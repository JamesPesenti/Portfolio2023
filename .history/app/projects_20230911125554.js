import { Animated, Pressable, ScrollView, Dimensions, StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import projectsData from "../assets/projectsData.json"
import { Link, Stack, useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const projects = () => {

  const router = useRouter()

  const [fadeAnim] = useState(new Animated.Value(1))

  useEffect(() => {
    const fadeOut = Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 7000,
        useNativeDriver: true, 
    })
    fadeOut.start()
  }, [fadeAnim])
  
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 1}}>
      <View>
        <Pressable style={{padding: 20}} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="gray" />
        </Pressable>
      </View>
      <Animated.View
        style={{
          alignSelf: 'flex-end',
          right: 50,
          opacity: fadeAnim, 
          display: 'flex', 
        }}
      >
         <MaterialCommunityIcons name="gesture-swipe-right" size={30} color="#233554" />
      </Animated.View>
      <FlatList 
         horizontal
         data={projectsData}
         snapToAlignment="start"
         decelerationRate={"fast"}
         snapToInterval={Dimensions.get("window").width}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.id}
         contentContainerStyle={styles.container}
         renderItem={({item}) => ( 
              <>
                <View style={styles.container}>
                  <View style={styles.box}>
                        <Image
                          style={{
                            top: -20,
                            width: 250,
                            height: 220,
                            resizeMode: 'contain',
                            borderRadius: 10,
                          }}
                          source={{ uri: item.image }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{ top: 0, gap: 10, flexDirection: 'row' }}>
                          {item.icons.map((icon, index) => (
                            <Image
                              key={index}
                              source={{ uri: icon }}
                              style={{
                                marginVertical: 10,
                                width: 25,
                                height: 25,
                                borderRadius: 0,
                              }}
                            />
                          ))}
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                          <Pressable style={styles.githubButton} onPress={() => router.push("https://github.com/JamesPesenti/TeamCoin")}>
                            <FontAwesome style={styles.icon} name="github" size={35} color="black" />
                          </Pressable>
                          <Text style={styles.seeCode}>See Code</Text>
                        <View style={styles.lineSeparator} />
                  </View>
                </View>
              </>
         )}
      />
      </ScrollView>
    </>
  )
}

export default projects

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingTop: 150,
    paddingBottom: 150,
    flex: 1,
    left: 50,
    paddingRight: 50,
    gap: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  box: {
    gap: 5,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 250,
    width: 250,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: "#233554",
    fontSize: 12,
    marginTop: 0
  },
  description: {
    color: "#233554",
    width: 300
  },
  githubButton: {
    marginTop: 10,
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#ededed"
  },
  seeCode: {
    color: "#233554",
    fontSize: 14
  },
  lineSeparator: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
  },
});
