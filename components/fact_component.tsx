import { StyleSheet, Text, View} from 'react-native';

export default function FactDisplay() {
    return(
        <View style={{position: 'relative', alignItems: 'center', marginVertical: 20}}>
            <View style={styles.borderBox}></View>
            <View style={styles.factContainer}>
                <Text style={styles.factText}>Display the fact in here.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  borderBox: {
    position: 'absolute',
    top: 10,
    right: 40,
    width: 300,
    minHeight: 100,
    backgroundColor: '#8B5E3C',
    borderRadius: 10,
    zIndex: 0
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
  },
  factText: {
    color: '#794A3A',
  }
});