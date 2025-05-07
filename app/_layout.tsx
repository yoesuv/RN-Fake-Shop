import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={({ route }) => ({
          title: route.name === "index" ? "Login" : route.name,
          headerShown: false,
        })}
      />
    </QueryClientProvider>
  );
}
