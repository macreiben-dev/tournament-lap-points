import { Button, FlatList, Modal, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const DATA = [
  {
    id: "1",
    title: "Session 2022-08-06",
  },
  {
    id: "2",
    title: "Session 2022-08-20",
  },
  {
    id: "3",
    title: "Session 2022-08-27",
  },
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const renderItem = ({ item }) => (
  <Item title={item.title} />
);

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{ flex: 1}}></View>
      <View style={{ flex: 8}}>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}>
          
        </FlatList>
      </View>
      <View style={{ flex: 1}}>
        <Button 
          title='Add ...'></Button>
      </View>
        
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
