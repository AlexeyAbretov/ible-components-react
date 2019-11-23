import React from 'react';
import PropTypes from 'prop-types';

export const Initable = WrappedComponent =>
    class extends React.PureComponent {
        static displayName = 'Initable';

        static propTypes = {
            init: PropTypes.func,
            exit: PropTypes.func
        };

        static defaultProps = {
            init: () => {},
            exit: () => {}
        };

        componentDidMount() {
            this.props.init();
        }

        componentWillUnmount() {
            this.props.exit();
        }
        
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />);
        }
    };