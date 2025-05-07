import { purple500 } from "@/constants/Colors";
import { useProducts } from "@/hooks/useProducts";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function Dashboard() {
  const { data: products, isLoading, error, isError } = useProducts();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={purple500} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>{products.length}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
