import React from 'react';
import { View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return (
        <View>
             <Pressable
            style={styles.searchButton}
            onPress={() => console.warn('fly')}
            >
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>나비처럼 날아가볼까</Text>
            </Pressable>

           <ImageBackground
           source={require('../../../assets/images/1.jpg')}
           style={styles.image}
           >

            <Text style={styles.title}>Air Fly</Text>

            <Pressable
            style={styles.button}
            onPress={() => console.warn('fly')}
            >
                <Text style={styles.buttonText}>주변 날아보기</Text>
            </Pressable>
           </ImageBackground>
        </View>
    );
};

export default HomeScreen;