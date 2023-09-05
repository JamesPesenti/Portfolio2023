import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import LinkBar from './LinkBar';

const AboutMe = () => {
  return (
    <>
      <LinkBar />
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        />
        <View style={styles.aboutMeContainer}>
          <Image style={styles.picture} source={{ uri: "assets/IMG_1619.jpg" }} />
          <Text style={styles.nameTitle}>I'm James Pesenti,</Text>
          <Text style={styles.title}>a Software Developer building mobile apps</Text>
          <Text style={styles.chicago}>
            and websites in Chicago, IL.
            <FontAwesome style={{ position: "relative", top: -35, left: 10 }} name="map-pin" size={13} color="white" />
            <Fontisto style={{ position: "relative", top: -20, right: 10 }} name="world-o" size={20} color="white" />
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    position: 'relative',
  },
  backgroundImage: {
    flex: 1, 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  aboutMeContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    gap: 20,
    top: 100,
    left: 150,
    borderRadius: 50,
  },
  picture: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "white",
  },
  nameTitle: {
    color: "white",
    letterSpacing: .5,
    fontWeight: 'bold',
    fontSize: 35,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 33,
  },
  chicago: {
    paddingLeft: 0,
    color: "white",
    fontWeight: 'bold',
    fontSize: 33,
  },
});

export default AboutMe;
