import AppButton from "@/components/AppButton";
import { purple500, white } from "@/constants/Colors";
import { useDetailUser } from "@/hooks/useDetailUser";
import { removeToken } from "@/utils/storage";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  const router = useRouter();
  const { data: user, isLoading } = useDetailUser();

  async function handleLogout() {
    await removeToken();
    router.replace("/");
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <ActivityIndicator size="large" color={purple500} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`${user}`}</Text>
      <View style={styles.viewLogout}>
        <AppButton title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: white,
  },
  containerLoading: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  viewLogout: {
    width: "100%",
    marginTop: 20,
    height: 50,
  },
});
