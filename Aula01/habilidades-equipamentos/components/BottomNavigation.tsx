import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { Text, View } from "react-native";

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavigationBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "music", title: "Favorites", icon: "heart" },
    { key: "albums", title: "Albums", icon: "album" },
    { key: "recents", title: "Recents", icon: "history" },
    { key: "notifications", title: "Notifications", icon: "bell" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationBar;
