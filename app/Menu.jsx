import {StyleSheet, Appearance, Platform, SafeAreaView, FlatList,
View, Text, Image
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { items } from '@/constants/MenuItems';
import MenuImages from '@/constants/MenuImages';

const Menu = () => {
    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Color.dark : Colors.light;
    const styles = createStyle(theme, colorScheme)
    const Container = Platform.OS === 'web' ? scrollView : SafeAreaView;
  return (
    <Container>
        <FlatList 
        data={items} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
                <Image 
                    source={MenuImages[item.id -1]}
                    />
            </View>
        )} />


    </Container>
  )
}

function createStyle(theme, colorScheme){
    return StyleSheet.create({

    })
}
export default Menu