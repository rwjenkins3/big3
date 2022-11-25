import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import bg from '../assets/weight.jpg';

const SquatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage} >
      <Text style={{color: 'white'}}>SquatScreen</Text>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'white'}}>Back</Text>
      </Pressable>

      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

export default SquatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12
  }
});
