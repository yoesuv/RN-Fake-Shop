import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        title: route.name === "index" ? "Login" : route.name,
      })}
    />
  );
}
