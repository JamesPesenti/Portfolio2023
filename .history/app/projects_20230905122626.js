import { Pressable, ScrollView, Dimensions, StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import projectsData from "../assets/projectsData.json"
import { Stack, useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get("window").width

const projects = () => {

  const router = useRouter()
  
  return (
    <>
    <View>
      <Pressable style={{padding: 20}} onPress={() => router.push("/")}>
        <Ionicons name="arrow-back" size={26} color="black" />
      </Pressable>
    </View>
    <ScrollView contentContainerStyle={{flex: 1, height: 3000}}>
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
                    {item.image.includes('<iframe') ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.image }}
                        style={{
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          width: 150,
                          height: 150,
                          borderRadius: 50,
                        }}
                      />
                    ) : (
                      <>
                        <Image
                          style={{
                            top: 35,
                            width: 250,
                            height: 250,
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
                                borderRadius: 50,
                              }}
                            />
                          ))}
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.lineSeparator} />
                      </>
                    )}
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
    fontSize: 12,
    marginTop: 40
  },
  description: {
    marginTop: 10,
  },
  lineSeparator: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
  },
});
