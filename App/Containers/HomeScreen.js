import React from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import NavBar from '../Components/NavBar';
// import DropDown from '../Components/DropDown';

// Styles
import styles from './Styles/HomeScreenStyle';

class Home extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <NavBar />

          <Text>Recommended here</Text>

          <Text>You might also like...</Text>

        </KeyboardAvoidingView>
        {/* <DropDown/> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
