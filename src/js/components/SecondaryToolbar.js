const React = require('react');
import { TALENTS_PAGES } from '../constants';

module.exports = class SecondaryToolbar extends React.Component {

  render() {

    let { page, navigateTo } = this.props;

    return (
      <div id='secondary-toolbar'>
        <ul>
          <li className={ page === TALENTS_PAGES.POPULARITY ? 'active' : null } onClick={ () => { navigateTo(TALENTS_PAGES.POPULARITY); } }>POPULARITY</li>
          <li className={ page === TALENTS_PAGES.WINRATE ? 'active' : null } onClick={ () => { navigateTo(TALENTS_PAGES.WINRATE); } }>WIN RATE</li>
          <li className={ page === TALENTS_PAGES.POPULAR_BUILDS ? 'active' : null } onClick={ () => { navigateTo(TALENTS_PAGES.POPULAR_BUILDS); } }>POPULAR BUILDS</li>
          <li className={ page === TALENTS_PAGES.BUILDS ? 'active' : null } onClick={ () => { navigateTo(TALENTS_PAGES.BUILDS); } }>BUILDS</li>
        </ul>
      </div>
    );
  }
};
