import React from 'react';
import PropTypes from 'prop-types';

import {
  Loader
} from '../Loader';

export const Loading = WrappedComponent =>
    class extends React.PureComponent {
        static displayName = 'Loading';

        static propTypes = {
            isLoading: PropTypes.bool
        };

        static defaultProps = {
            isLoading: false
        };

        render() {
            const { isLoading, loaderProps, ...props } = this.props;
            return (<div>
                {isLoading ?
                    <Loader
                        {...loaderProps || {}}
                    /> :
                    <WrappedComponent
                        {...props}
                    />}
            </div>);
        }
    };