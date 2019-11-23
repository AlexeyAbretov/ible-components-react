import React from 'react';
import PropTypes from 'prop-types';

export class AppBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    const err = {
      hasError: true,
      error,
      info
    };

    this.setState(err);

    const { onError = () => {} } = this.props;

    onError(err);
  }

  render() {
    const { children } = this.props;
    const { hasError, error, info } = this.state;

    if (hasError) {
      return (
        <div>
          <h1>Упс!!! Что-то пошло не так.</h1>
          <p>Ошибка:</p>
          <pre style={{ marginLeft: '30px' }}>{(error || '').toString()}</pre>
          <p>Источник:</p>
          <pre>{(info || {}).componentStack}</pre>
        </div>
      );
    }
    return children;
  }
}

AppBase.propTypes = {
  onError: PropTypes.func
};

AppBase.defaultProps = {
  onError: () => {}
};
