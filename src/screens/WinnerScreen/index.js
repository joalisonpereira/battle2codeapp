import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';

import FormControl from '../../components/FormControl'
import Button from '../../components/Button';

import { colors } from '../../styles';
import styles from './styles';

class WinnerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.wrapper}>
      		<Image
				source={require('../../assets/images/crown.png')}
				style={styles.image}
      		/>
      		<View style={styles.info}>
      			<Text style={styles.infoText}>PARABENS Arquimedes</Text>
      			<Text style={styles.infoText}>PONTUAÇÃO : 30</Text>
      		</View>
            <FormControl>
              <Button
                title="JOGAR NOVAMENTE"
                onPress={()=>{}}
              />
            </FormControl>
            <Button
              title="VER RANKING"
              color={colors.secundary}
              onPress={() => this.props.navigation.replace('Ranking')}
            />  
      	</View>
      </View>
    );
  }
}

export default WinnerScreen;