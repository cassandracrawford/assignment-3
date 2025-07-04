import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type MonthPickerProps = {
  selectedMonth: string;
  onChange: (value: string) => void;
};

export default function MonthPicker({ selectedMonth, onChange }: MonthPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempValue, setTempValue] = useState(selectedMonth);

  const monthItems = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  return (
    <View style={{ flex: 1, marginBottom: 8 }}>
      <Text style={styles.label}>Month</Text>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          {selectedMonth ? monthItems.find(m => m.value === selectedMonth)?.label : 'Select Month'}
        </Text>
      </Pressable>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Picker
              selectedValue={tempValue}
              onValueChange={(itemValue) => setTempValue(itemValue)}
              style={{ height: 200 }}
            >
              {monthItems.map((item) => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
              ))}
            </Picker>
            <Pressable
              style={styles.confirmButton}
              onPress={() => {
                onChange(tempValue);
                setModalVisible(false);
              }}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#794A3A',
  },
  button: {
    backgroundColor: '#DD5341',
    padding: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#603B2E',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  confirmButton: {
    backgroundColor: '#DD5341',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
