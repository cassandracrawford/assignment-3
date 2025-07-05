import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

type AddDateProps = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export default function AddDate({ label, placeholder, onChange }: AddDateProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{flex: 1, marginBottom: 8}}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={2}
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          onChange(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DD5341',
    padding: 10,
    fontSize: 16,
    color: '#FFF',
    borderRadius: 4,
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
