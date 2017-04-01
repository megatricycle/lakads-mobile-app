import React from 'react';
import { ScrollView,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux';

import NavBar from '../Components/NavBar';
import DropDown from '../Components/DropDown';
import HomeActions from '../Redux/HomeRedux';
import UserActions from '../Redux/UserRedux';
import PrimaryPromo from '../Components/PrimaryPromo';
import OtherPromos from '../Components/OtherPromos';

// Styles
import styles from './Styles/HomeScreenStyle';

class Home extends React.Component {
  constructor () {
    super();

    this.handlePress = this.handlePress.bind(this);
    this.logout = this.logout.bind(this);
  }

  handlePress () {
    this.props.hideDropdown();
  }

  componentDidMount () {
    this.props.hideDropdown();
  }

  logout () {
    this.props.logout();
  }

  componentWillMount () {
    console.log(this.props.user);
    if (!this.props.user) {
      NavigationActions.loginScreen({type: ActionConst.REPLACE});
    }
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.user) {
      NavigationActions.loginScreen({type: ActionConst.REPLACE});
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress} disabled={!this.props.home.isDropdownOpen}>
          <View style={{flex: 1}}>
            <KeyboardAvoidingView behavior='position'>
              <NavBar showDropdown={this.props.showDropdown} screenName={this.props.user.screen_name} />
            </KeyboardAvoidingView>

            <ScrollView
              style={styles.contentContainer}
            >
              <PrimaryPromo />

              <OtherPromos />
            </ScrollView>

            {this.props.home.isDropdownOpen
                ? (<DropDown logout={this.logout} />)
                : (<View />)
              }
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDropdown: () => dispatch(HomeActions.showDropdown()),
    hideDropdown: () => dispatch(HomeActions.hideDropdown()),
    logout: () => dispatch(UserActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
