import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I'm a react native dev</Text>
      <Button
        title="React native button"
        onPress={() => console.log("click")}
      />
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={true}
        value={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
