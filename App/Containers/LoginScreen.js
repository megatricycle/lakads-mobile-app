import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  WebView
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyles';
import { Images } from '../Themes';
import UserActions from '../Redux/UserRedux';
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
    this.onMessage = this.onMessage.bind(this);

    this.state = {
      isAttempting: false
    };
  }

  componentWillMount () {
    if (this.props.user.isLoggedIn) {
      NavigationActions.homeScreen({type: ActionConst.REPLACE});
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.user.isLoggedIn) {
      NavigationActions.homeScreen({type: ActionConst.REPLACE});
    }
  }

  handlePressLogin () {
    this.setState({isAttempting: true});
  }

  onMessage (event) {
    const data = JSON.parse(event.nativeEvent.data);

    this.props.userAssign(data.oauth_token, data.oauth_token_secret, data.oauth_verifier, data.screen_name);
  }

  render () {
    return (
      this.state.isAttempting
        ? <WebView
          source={{uri: 'http://10.239.119.203:3000/twitter/login'}}
          onMessage={this.onMessage}
          injectedJavaScript={'window.postMessage("hello!", "*");'}
      />
      : <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container]} keyboardShouldPersistTaps='always'>
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
    fetching: state.login.fetching,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAssign: (oauthToken, oauthTokenSecret, oauthVerifier, screenName) => dispatch(UserActions.userAssign(oauthToken, oauthTokenSecret, oauthVerifier, screenName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
