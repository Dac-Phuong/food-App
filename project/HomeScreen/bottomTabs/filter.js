import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from'./Style'

function Filter({ navigation }) {
  return (
   <View style={{flex:1}}>
     <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
     <StatusBar
        animated={true}
        backgroundColor="#61dafb"
       />
       <View style={styles.FilterMain}>
            <TouchableOpacity styles={styles.FilterClose}>
                <Image source={require('../../images/Clear.png')} />
            </TouchableOpacity>
            <View styles={styles.FilterTitle}>
                <Text styles={styles.FilterText}>Filter</Text>
            </View>
        </View>

    </SafeAreaView>
   </View>
  );
}
export default Filter;