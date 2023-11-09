import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import {
  Text,
  Button,
  Provider as PaperProvider,
  Avatar,
  TextInput,
  Divider,
  Modal,
  Portal,
  Drawer,
  List,
} from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { styles } from "./styles";

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [text, setText] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode
      ? theme.dark.background
      : theme.light.background,
  };

  const paperTheme = isDarkMode
    ? { ...MD3DarkTheme, colors: theme.dark }
    : { ...MD3LightTheme, colors: theme.light };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider theme={paperTheme}>
      <View style={containerStyle}>
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Icon color={MD3Colors.tertiary70} icon="folder" />
            <Divider theme={{ colors: { primary: "green" } }} />
            <List.Icon color={MD3Colors.tertiary70} icon="equal" />
            <Divider theme={{ colors: { primary: "green" } }} />
            <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
          </List.Accordion>
          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <Drawer.CollapsedItem
          focusedIcon="inbox"
          unfocusedIcon="inbox-outline"
          label="Inbox"
        />
        <Avatar.Icon size={24} icon="folder" style={styles.avatar} />
        <Divider theme={{ colors: { primary: "green" } }} />
        <Image source={require("./assets/favicon.png")} style={styles.image} />
        <Divider />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={styles.modal}
          >
            <Text>Hello World!</Text>
          </Modal>
        </Portal>
        <Button mode="contained" style={styles.avatar} onPress={showModal}>
          Show
        </Button>
        <Divider />
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
        />
        <Divider />
        <Button mode="contained" onPress={toggleDarkMode} style={styles.avatar}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={20}
          onPress={() => console.log("Pressed")}
        />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
