import { View, Text, TextInput, StyleSheet } from 'react-native';

type AddDateProps = {
  label: string;
  placeholder: string;
};

export default function AddDate({ label, placeholder }: AddDateProps) {
  return (
    <View style={{flex: 1, marginBottom: 8}}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DD5341',
    padding: 6,
    fontSize: 18,
    color: '#FFF',
    borderWidth: 2,
    borderColor: '#603B2E',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#794A3A',
  },
});
