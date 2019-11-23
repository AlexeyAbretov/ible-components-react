import React from 'react';
import PropTypes from 'prop-types';

const Showable = WrappedComponent => class extends React.PureComponent {
    static displayName = 'Showable';

    static propTypes = {
      isShow: PropTypes.bool
    }

    static defaultProps = {
      isShow: false
    }

    render() {
      const { isShow } = this.props;
      if (!isShow) {
        return null;
      }

      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
};

export default Showable;
