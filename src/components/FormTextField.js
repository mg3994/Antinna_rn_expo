import { Text, View, TextInput, StyleSheet } from "react-native";

export default function FormTextField({ label, errors = [], ...rest }) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        {...rest} //rest of arguments
      />
      {errors.map((err) => {
        return (
          <Text key={err} style={styles.error}>
            {err}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#334155",
    fontWeight: "500",
  },
  textInput: {
    backgroundColor: "#f1f5f9",
    height: 40,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#cbd5e1",
  },
  error: {
    color: "red",
    marginTop: 2,
  },
});
