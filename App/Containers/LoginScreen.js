import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyles';
import { Images } from '../Themes';
import LoginActions from '../Redux/LoginRedux';
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux';

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props);

    this.handlePressLogin = this.handlePressLogin.bind(this);

    this.isAttempting = false;
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate();
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop();
    }
  }

  handlePressLogin () {
    this.isAttempting = true;

    // DEBUG
    NavigationActions.homeScreen({type: ActionConst.REPLACE});
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  handleChangePassword = (text) => {
    this.setState({ password: text });
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container]} keyboardShouldPersistTaps='always'>
        <Image source={Images.logo} style={[Styles.topLogo]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.introText}>Promos. Special for you.</Text>
          </View>
          <View style={Styles.row}>
            <SocialIcon
              title={'Sign in with Twitter'}
              type={'twitter'}
              button
              onPress={this.handlePressLogin}
            />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
