import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native';
import React from 'react';

const projectsData = [
  // ...your project data here
];

const MyProjects = () => {
  return (
    <>
      <FlatList 
        data={projectsData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => ( 
          <ImageBackground
            style={styles.backgroundImage}
            source={{
              uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_empty.png"
            }}
          >
            <View style={styles.box}>
              <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
              <Text>{item.title}</Text>
              <View style={{ flexDirection: "row" }}>
                {item.icons.map((icon, index) => (
                  <Image key={index} source={{ uri: icon }} style={{ width: 50, height: 50 }} />
                ))}
              </View>
              <Text>{item.description}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 20,
    backgroundColor: '#0a192f',
  },
  box: {
    flex: 1,
    paddingVertical: 50,
    height: "100%",
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default MyProjects;
