/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';

import AsashaApp from '../../../fonts/fonts';


export default class Icon extends NativeBaseComponent {

  propTypes: {
    style : React.PropTypes.object
  }

  contextTypes: {
    theme: React.PropTypes.object
  }

  componentWillMount() {
    this.Icon = AsashaApp;
  }

  getInitialStyle() {
    return {
      icon: {
        fontSize: this.getTheme().iconFontSize,
        color: this.getContextForegroundColor()
      }
    }
  }
  prepareRootProps() {
    var defaultProps = {
      style: this.getInitialStyle().icon
    };

    return computeProps(this.props, defaultProps);

  }

  render() {
    return(
      <this.Icon ref={c => this._root = c} {...this.prepareRootProps()}/>
    );
  }
}
