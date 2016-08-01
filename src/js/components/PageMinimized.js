const React = require('react');
import { PAGES } from '../constants';
import { connect } from 'react-redux';
const { fetchTalentData } = require('../actions/talents');
const { maximizeApp } = require('../actions/navigation');

class PageMinimized extends React.Component {

  componentWillMount () {
    if (this.props.data === null) {
      this.props.fetchTalentData();
    }
  }

  render() {
    return (
      <div id='page-minimized' onClick={ (e) => { this.props.maximizeApp(); } }>
        <img src='img/Icon.png' width='50' height='50' />
      </div>
    );
  }
};

module.exports = connect(
  state => ({ data: state.talents.data }),
  { fetchTalentData, maximizeApp }
)(PageMinimized);
