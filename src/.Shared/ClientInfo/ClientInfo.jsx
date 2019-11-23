import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
  Box,
  RelativeBox,
  FlexBox
} from '../../.Common'

import {
  ClientDropdown,
} from '../ClientDropdown'

import {
  ClientTitle,
} from '../ClientTitle'

export const Arrow = (props) => (<Box
  width={0}
  height={0}
  borderStyle="solid"
  borderWidth="0 5px 6px"
  borderColor="transparent transparent #fff"
  m="20px"
  {...props || {}}
/>);

export class ClientInfo extends Component {
  constructor(props) {
    super(props);
    
    this.ref = React.createRef();

    this.state = {
      isShow: false
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  close = (event) => {
    const { isShow } = this.state
    
    if (isShow && (!this.ref || !this.ref.current.contains(event.target))) {
      this.setState({ isShow: false });
    }
  }

  toggleDropdown = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  selectItem = (e) => {
    this.setState({ isShow: false });
    this.props.onSelect(e);
  }

  render() {
    const {
      items,
      userName,
      iconCheck,
      selected
    } = this.props

    const { isShow } = this.state
    return (
      <RelativeBox
        display="inline-block"
        ref={this.ref}
      >
        <FlexBox
          alignItems='center'
        >
          <ClientTitle
            {...selected || {}}
            userName={userName}
            textProps={{
              color: '#fff'
            }}
            onClick={() => this.toggleDropdown()}
          />
          {!!(items || []).length && <Arrow
            transform={isShow ? 'rotate(0)' : 'rotate(180deg)'}
            onClick={() => this.toggleDropdown()}
            cursor="pointer"
          />}
        </FlexBox>
        {!!(items || []).length && <ClientDropdown
          items={items}
          onSelect={({ item } = {}) => this.selectItem({ item })}
          isShow={isShow}
          iconCheck={iconCheck}
        />}
      </RelativeBox>
    )
  }
}


ClientInfo.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.object,
  onSelect: PropTypes.func,
  userName: PropTypes.string,
}

ClientInfo.defaultProps = {
  items: [],
  selectedItem: {},
  onSelect: () => { },
  userName: ''
}