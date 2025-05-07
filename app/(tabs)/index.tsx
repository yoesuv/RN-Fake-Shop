import { black, purple500, purple700, white } from "@/constants/Colors";
import { useProducts } from "@/hooks/useProducts";
import { ProductResponse } from "@/models";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = (width - 48) / 2;

export default function Dashboard() {
  const { data: products, isLoading, error, isError } = useProducts();

  const renderItem = ({ item }: { item: ProductResponse }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => {
        // Add navigation to product details if needed
        console.log(`Tapped product: ${item.title}`);
      }}
      accessibilityLabel={`Product: ${item.title}`}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <ActivityIndicator size="large" color={purple500} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products found</Text>
        }
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
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
  productItem: {
    width: itemWidth,
    backgroundColor: white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  productImage: {
    width: itemWidth - 24, // Account for padding
    height: 120,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2e7d32",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: purple700,
    marginTop: 20,
  },
  flatListContent: {
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
