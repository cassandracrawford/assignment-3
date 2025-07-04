"use client";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AddDate from './components/date_component';
import FactDisplay from './components/fact_component';
import MonthPicker from './components/month_picker';

export default function App() {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ backgroundColor: '#FACA78' }} contentContainerStyle={{ padding: 20 }}>
        {/* App Heading */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#603B2E' }}>Want a fun fact?</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#603B2E' }}>Enter a month and day!</Text>

        {/* Input Fields */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
          <MonthPicker selectedMonth={month} onChange={setMonth} />
          <AddDate label="Day" placeholder="dd" onChange={setDay} />
        </View>

        {/* Display Fact */}
        <FactDisplay month={month} day={day} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FACA78',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
