import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';
import { connect } from 'react-redux';

import FormControl from '../../components/FormControl'
import Button from '../../components/Button';

import { colors } from '../../styles';
import styles from './styles';

class WinnerScreen extends Component {
  _renderContentWinner(){
    const { winner } = this.props.battle; 
    return(
      <View style={styles.centerRender}>
        <Image
          source={require('../../assets/images/crown.png')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>PARABENS {this.props.battle.winner.name}</Text>
          <Text style={styles.infoText}>PONTUAÇÃO : {this.props.battle.winner.score}</Text>
        </View>
      </View>
    );
  }

  _renderNullWinner(){
    return(
      <View style={styles.centerRender}>
        <Image
          source={require('../../assets/images/smile.jpg')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>PARTIDA EMPATADA</Text>
          <Text style={styles.infoText}>PONTUAÇÃO : {this.props.battle.winner.score}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
            { this.props.battle.winner.name ? this._renderContentWinner() : this._renderNullWinner() }
            <FormControl>
              <Button
                title="JOGAR NOVAMENTE"
                onPress={()=>{ this.props.navigation.replace('Form') }}
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

const mapStateToProps = state => ({
  battle : state.battle
});

export default connect(mapStateToProps,null)(WinnerScreen);