// PasswordField.tsx
import { black, purple500, white } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface AppPasswordFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const AppPasswordField: React.FC<AppPasswordFieldProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleToggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View>
      <TextInput
        style={styles.passwordField}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType="default"
        autoCapitalize="none"
        returnKeyType="done"
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={handleToggleSecureTextEntry}
      >
        <Ionicons
          name={secureTextEntry ? "eye" : "eye-off"}
          size={24}
          color={black}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordField: {
    width: "100%",
    height: 50,
    borderColor: purple500,
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingRight: 40, // make space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 12,
  },
  eyeIconText: {
    fontSize: 18,
  },
});

export default AppPasswordField;
