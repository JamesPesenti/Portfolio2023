import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AboutMe from '../src/components/AboutMe';
import Scroll from '../src/components/Scroll';
import LinkBar from '../src/components/LinkBar';
import MyProjects from "../src/components/MyProjects";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
          />
            <LinkBar />
            <AboutMe />
            <View>
              <MyProjects />
            </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#0a192f',
  },
  backgroundImage: {
    // position: 'absolute',
    alignSelf: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 0,
    marginBottom: 0,
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 10,
    borderColor: "white"
  },
  screenContainer: {
    flexGrow: 1,
  }
});






// Thank you for this information but my focus is purely based on the overall layout of the screen with the keyboard keys being displayed properly on mobile and web and i can figure out the navigation independently. Right now the keyboard keys aren't displaying properly in relation to the backgroundImage in my index.js file. Every time i increase or decrease the size of the keyboard keys, the backgroundImage either increases or decrease which i do not want. Here is the index.js code.                                                                                                                                                                                              import { StatusBar } from 'expo-status-bar';
// import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import AboutMe from '../src/components/AboutMe';
// import Scroll from '../src/components/Scroll';
// import LinkBar from '../src/components/LinkBar';
// import MyProjects from "../src/components/MyProjects";

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       <ScrollView showsVerticalScrollIndicator={false} >
//         <View style={styles.backgroundContainer}>
//           <Image
//             style={styles.backgroundImage}
//             source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
//           />
//             <LinkBar />
//             <AboutMe />
//             <View>
//               <MyProjects />
//             </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundContainer: {
//     flex: 1,
//     paddingVertical: 20,
//     backgroundColor: '#0a192f',
//   },
//   backgroundImage: {
//     // position: 'absolute',
//     alignSelf: 'center',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     marginTop: 0,
//     marginBottom: 0,
//     width: "80%",
//     height: "80%",
//     resizeMode: "cover",
//     borderRadius: 15,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   screenContainer: {
//     flexGrow: 1,
//   }
// });