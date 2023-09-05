import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LinkBar = () => {
  const [emailPressed, setEmailPressed] = useState(false);
  const [githubPressed, setGithubPressed] = useState(false);
  const [resumePressed, setResumePressed] = useState(false);

  const handleEmailPress = () => {
    // Handle the email icon press event here
    // You can add code to open an email app or perform any other action
    setEmailPressed(true);
    // Optionally, you can reset the press state after a certain duration
    setTimeout(() => setEmailPressed(false), 1000);
  };

  const handleGithubPress = () => {
    // Handle the GitHub icon press event here
    // You can add code to open a web page or perform any other action
    setGithubPressed(true);
    setTimeout(() => setGithubPressed(false), 1000);
  };

  const handleResumePress = () => {
    // Handle the resume icon press event here
    // You can add code to open a document or perform any other action
    setResumePressed(true);
    setTimeout(() => setResumePressed(false), 1000);
  };

  const renderIcon = (name, size, color, pressed) => (
    <TouchableOpacity
      onPress={() => {
        if (name === 'mailbox-open-up-outline') handleEmailPress();
        else if (name === 'github') handleGithubPress();
        else if (name === 'documents') handleResumePress();
      }}
      activeOpacity={0.7} // This sets the opacity when pressed
    >
      <View style={[styles.iconContainer, { opacity: pressed ? 0.5 : 1 }]}>
        {name === 'mailbox-open-up-outline' && (
          <MaterialCommunityIcons name={name} size={size} color={color} />
        )}
        {name === 'github' && (
          <FontAwesome name={name} size={size} color={color} />
        )}
        {name === 'documents' && (
          <Entypo name={name} size={size} color={color} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIcon('mailbox-open-up-outline', 30, 'white', emailPressed)}
      <Text style={styles.link}>Email</Text>
      {renderIcon('github', 30, 'white', githubPressed)}
      <Text style={styles.link}>GitHub</Text>
      {renderIcon('documents', 30, 'white', resumePressed)}
      <Text style={styles.link}>Resume</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 50,
    gap: 20,
  },
  link: {
    color: 'white',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default LinkBar;
