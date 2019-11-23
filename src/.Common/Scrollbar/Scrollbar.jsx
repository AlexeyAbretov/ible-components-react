import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Scrollbar as StyledScrollbar
} from './styled';

export const Scrollbar = ({
  children,
  height = '',
  minHeight = '',
  width = '',
  scrollToElement = '',
  scrollToPos = null,
  direction = 'vertical',
  ...other
} = {}) => {

  let scrollbarRef = React.createRef();

  useEffect(() => {
    scrollbarRef.view.addEventListener('wheel', (e) => onHorizontalMouseWheel(e, direction));
  });

  useEffect(() => {

    if (scrollToElement) {
      scrollbarRef.view.scroll({
        top: document.getElementById(scrollToElement).offsetParent.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    } else if (scrollToPos !== null) {
      const params = {
        top: scrollToPos,
        left: 0,
        behavior: 'smooth'
      };

      scrollbarRef.view.scroll
        ? scrollbarRef.view.scroll(params)
        : scrollbarRef.view.scrollIntoView(params);
    }
  });

  const onHorizontalMouseWheel = (e, direction) => {
    if (direction === 'horizontal') {
      e.preventDefault();
      const currentScrollDelta = scrollbarRef && scrollbarRef.getScrollLeft();
      scrollbarRef && scrollbarRef.view.scroll({
        left: currentScrollDelta + e.deltaY,
      })
    }
  }

  const onMouseMove = (e) => {
    e.preventDefault();
    if (e.buttons === 1) {
      if (direction === 'horizontal') {
        const currentScrollDelta = scrollbarRef && scrollbarRef.getScrollLeft();
        scrollbarRef.view.scroll({
          left: currentScrollDelta - e.movementX,
        })
      }
      if (direction === 'vertical') {
        const currentScrollDelta = scrollbarRef && scrollbarRef.getScrollTop();
        scrollbarRef.view.scroll({
          top: currentScrollDelta - e.movementY,
        })
      }
    }
  }
  return (
    <StyledScrollbar
      onMouseMove={onMouseMove}
      onWheel={onHorizontalMouseWheel}
      ref={(el) => scrollbarRef = el}
      renderTrackVertical={x => <div {...x} className="track-vertical" />}
      renderTrackHorizontal={x => <div {...x} className="track-horizontal" />}
      style={{ height, minHeight, width }}
      {...other}
    >
      {children}
    </StyledScrollbar>
  );
}

Scrollbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  minHeight: PropTypes.string,
};

Scrollbar.defaultProp = {
  children: {},
  height: '',
  minHeight: '',
  width: '',
  scrollToElement: '',
  scrollToPos: null,
  direction: 'vertical',
};