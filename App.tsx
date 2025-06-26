import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AddDate from './components/date_component';
import FactDisplay from './components/fact_component';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView style={{backgroundColor: '#FACA78'}}
        contentContainerStyle={{padding: 20}}>
        {/* App Heading */}
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#603B2E'}}>Want a fun fact?</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#603B2E'}}>Enter a month and day!</Text>
        
        {/* Input Fields */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10,}}>
          <AddDate label="Month" placeholder="mm" />
          <AddDate label="Day" placeholder="dd" />
        </View>

        {/* Display Fact */}
        <FactDisplay />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FACA78',
  },
});
