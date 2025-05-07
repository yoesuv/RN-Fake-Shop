import { Redirect } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

export default function Index() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return <Redirect href="/login" />;
}
