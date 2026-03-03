import { Stack } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import userData from "../data.json";
import { styles } from "../AppStyles";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "Things List:" }} />

      <ScrollView>
        {userData.map((users, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.card}>
              <Image
                source={{ uri: users.photo_url }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}