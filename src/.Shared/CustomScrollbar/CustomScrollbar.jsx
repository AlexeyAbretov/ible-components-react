import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import css from 'dom-css';

export const CustomScrollbar = ({
    children = {},
    maxHeight =  '240',
    shadow = true,
    scrollToPos = 0,
    shadowStyle = {
        position: 'absolute',
        bottom: 151,
        left: 0,
        right: 0,
        height: 30,
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 100%)'
    }
  } = {}) => {

    let scrollbarRef = React.createRef();
    let shadowBottom = React.createRef();

    useEffect(() => {
        const params = {
            top: scrollToPos,
            left: 0,
            behavior: 'smooth'
        };
        scrollbarRef.view.scroll 
            ? scrollbarRef.view.scroll(params)
            : scrollbarRef.view.scrollIntoView(params);
      });

      const handleUpdate = (values) => {

        const { 
            scrollTop,
            scrollHeight,
            clientHeight
        } = values;

        const bottomScrollTop = scrollHeight - clientHeight;

        const shadowBottomOpacity = 1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));

        css(shadowBottom, { opacity: shadowBottomOpacity });
    }

        return (
            <React.Fragment>
                <Scrollbars
                    ref={(el) => scrollbarRef = el}
                    // renderTrackVertical={props => <div {...props} className="track-vertical" />}
                    autoHeight={true}
                    autoHeightMin={0}
                    autoHeightMax={maxHeight}
                    onUpdate={handleUpdate}
                >
                    {children}
                </Scrollbars>
                <div
                    ref={(el) => shadowBottom = el}
                    style={shadow ? shadowStyle : {}}
                />
            </React.Fragment>
        );
}

CustomScrollbar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    maxHeight: PropTypes.string,
    shadow: PropTypes.bool,
    shadowStyle: PropTypes.object
};
CustomScrollbar.defaultProp = {
    maxHeight: '240',
    shadow: false,
    shadowStyle: {
        position: 'absolute',
        bottom: 151,
        left: 0,
        right: 0,
        height: 30,
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 100%)'
    }
};



