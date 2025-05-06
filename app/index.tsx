import AppButton from "@/components/AppButton";
import AppPasswordField from "@/components/AppPasswordField";
import AppTextField from "@/components/AppTextField";
import { white } from "@/constants/Colors";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogin}>
        <AppTextField value="test" onChangeText={() => {}} />
        <View style={styles.viewPassword}>
          <AppPasswordField value="test" onChangeText={() => {}} />
        </View>
        <View style={styles.viewButton}>
          <AppButton title="Login" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  contentLogin: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  viewPassword: {
    width: "100%",
    marginTop: 10,
  },
  viewButton: {
    width: "100%",
    marginTop: 20,
    height: 50,
  },
});
