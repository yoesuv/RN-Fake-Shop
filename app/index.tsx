import AppButton from "@/components/AppButton";
import AppPasswordField from "@/components/AppPasswordField";
import AppTextField from "@/components/AppTextField";
import { red500, white } from "@/constants/Colors";
import { ILoginInput, schemaYupLogin } from "@/constants/YupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    control,
    formState,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    mode: "onChange",
    resolver: yupResolver(schemaYupLogin),
  });

  const onSubmit = handleSubmit(({ username, password }) => {
    console.log("Login", `Username: ${username}\nPassword: ${password}`);
    //router.replace("/(tabs)");
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogin}>
        <View style={styles.viewUsername}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <AppTextField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Username"
                />
                {errors.username && (
                  <Text style={styles.labelError}>
                    {errors?.username?.message}
                  </Text>
                )}
              </View>
            )}
          />
        </View>
        <View style={styles.viewPassword}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <AppPasswordField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Password"
                />
                {errors.password && (
                  <Text style={styles.labelError}>
                    {errors?.password?.message}
                  </Text>
                )}
              </View>
            )}
          />
        </View>
        <View style={styles.viewButton}>
          <AppButton
            title="Login"
            onPress={onSubmit}
            disabled={!formState.isValid}
          />
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
  viewUsername: {
    width: "100%",
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
  labelError: {
    color: red500,
    fontSize: 12,
    marginTop: 2,
  },
});
