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
      <View style={styles.contentProfile}>
        <Text
          style={styles.name}
        >{`${user?.name.firstname} ${user?.name.lastname}`}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text>{user?.phone}</Text>
      </View>
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
    justifyContent: "space-between",
  },
  containerLoading: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  contentProfile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  viewLogout: {
    width: "100%",
    marginVertical: 20,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    marginTop: 8,
  },
});
