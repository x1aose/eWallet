// @flow
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { MemoryRouter } from 'react-router-dom';
import { getPattern } from 'support/routes';
// import { AppState } from '../store';
import Routes from '../Routes';
import 'translations/i18n'

type Props = {
  stores: any,
  actions: any,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { stores, actions } = this.props;
    return (
      <Provider {...stores} {...actions}>
        <MemoryRouter initialEntries={[getPattern('landing-home')]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
  }
}
