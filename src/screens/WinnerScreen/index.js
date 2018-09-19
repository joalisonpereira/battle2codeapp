import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';
import { connect } from 'react-redux';
import { storeWinner } from '../../store/actions';

import FormControl from '../../components/FormControl'
import Button from '../../components/Button';

import { colors } from '../../styles';
import styles from './styles';

class WinnerScreen extends Component {

  componentDidMount(){
    this.props.storeWinner(this.props.battle);
  }

  _renderIfExistsWinner(){
    const { winner } = this.props.battle; 
    return(
      <View style={styles.centerRender}>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            BATALHA FINALIZADA
          </Text>
        </View>
        <Image
          source={require('../../assets/images/winner.png')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>
            VENCEDOR: {this.props.battle.winner.name}
          </Text>
          <Text style={styles.infoText}>
            PONTUAÇÃO: {this.props.battle.winner.score}
          </Text>
        </View>
      </View>
    );
  }

  _renderIfNullWinner(){
    return(
      <View style={styles.centerRender}>
        <Image
          source={require('../../assets/images/shield.png')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>
            BATALHA EMPATADA
          </Text>
          <Text style={styles.infoText}>
            PONTUAÇÃO: {this.props.battle.winner.score}
          </Text>
          <View style={styles.subInfo}>
            <Text style={styles.subInfoText}>
              Partidas empatadas não são salvas no ranking geral
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
  _renderButtons(){
    if(this.props.battle.winner){
      return (
        <View style={styles.buttonContainer}>
          <FormControl>
            <Button
              title="MENU PRINCIPAL"
              onPress={()=>{ this.props.navigation.navigate('Form') }}
            />
          </FormControl>
          <Button
            title="VER RANKING"
            color="#FED656"
            onPress={() => this.props.navigation.navigate('Ranking')}
          />
        </View>
      );
    }
  }

  _renderLoading(){
    return (
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    );
  }

  _renderContent(){
    if(this.props.battle.winner){
      return this.props.battle.winner.name ? 
        this._renderIfExistsWinner() 
      : 
        this._renderIfNullWinner()
    }else{
      return this._renderLoading();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
            { this._renderContent() }
            { this._renderButtons() }            
      	</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  battle : state.battle
});

const mapDispatchToProps = {
  storeWinner
}

export default connect(mapStateToProps,mapDispatchToProps)(WinnerScreen);