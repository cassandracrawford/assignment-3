import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

type FactDisplayProps = {
  month: string;
  day: string;
};

export default function FactDisplay({ month, day }: FactDisplayProps) {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isValid = month && day && parseInt(month) >= 1 && parseInt(month) <= 12 && parseInt(day) >= 1 && parseInt(day) <= 31;

    if (isValid) {
      const fetchFact = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b7a175237emsh4bfea74681af0e2p120116jsna0e79442f2aa',
              'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
            },
          });

          const data = await response.json();
          setFact(data.text || 'No fact found.');
        } catch (error) {
          console.error('API error:', error);
          setFact('Failed to fetch fact.');
        } finally {
          setLoading(false);
        }
      };

      fetchFact();
    } else {
      setFact('');
    }
  }, [month, day]);

  return (
    <View style={{ position: 'relative', alignItems: 'center', marginVertical: 20 }}>
      <View style={styles.borderBox}></View>
      <View style={styles.factContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#794A3A" />
        ) : (
          <Text style={styles.factText}>
            {fact || 'Please enter a valid month and day'}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderBox: {
    position: 'absolute',
    top: 10,
    width: 300,
    minHeight: 100,
    backgroundColor: '#8B5E3C',
    borderRadius: 10,
    zIndex: 0,
    ...Platform.select({
      ios: { right: 40 },
      android: { left: 40 },
    }),
  },
  factContainer: {
    width: 300,
    minHeight: 100,
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#603B2E',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    padding: 10,
  },
  factText: {
    color: '#794A3A',
    fontSize: 16,
    textAlign: 'center',
  },
});
