import React, { useRef, useEffect } from 'react';
import {
  Box
} from '../..';

export const Slider = ({
  items = []
} = {}) => {
  let offsetX = 0;
  let direction;

  const sliderContainer = useRef(null);
  const sliderWrapper = useRef(null);
  const firstSlide = useRef(null);
  const lastSlide = useRef(null);
  const slidesCount = items.length;

  const getMouseDirection = ({ event = {} } = {}) => {
    let oldx = 0;

    if (event.movementX < oldx) {
      direction = "left";
    } else if (event.movementX > oldx) {
      direction = "right";
    }

    oldx = event.pageX;

    return direction;
  }

  let startX = 0;
  const onmousedown = (event) => {
    event.preventDefault();
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    startX = event.pageX;

    function onMouseMove(event) {
      direction = getMouseDirection({ event });
      let translateOffset = offsetX + (event.pageX - startX);


      console.log(`firestSlideOffset: ${firstSlide.current.getBoundingClientRect().left}, container left offset: ${sliderWrapper.current.getBoundingClientRect().left} `)
      if(firstSlide.current.getBoundingClientRect().left === sliderWrapper.current.getBoundingClientRect().left){
        return;
      }

      sliderContainer.current.style.transform = `translate3d(${translateOffset}px, 0px, 0px)`;
    }
  
    function onMouseUp(event) {
      offsetX = offsetX + (event.pageX - startX);

      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
  
  return (
    <Box overflow="hidden">
      <Box
        width="1370px"
        m="0 auto"
        ref={sliderWrapper}
      >
        <Box
          display="flex"
          transform="translate3d(0px, 0px, 0px)"
          ref={sliderContainer}
        >
          {(items || []).map((x, i) => 
            <Box
              width="400px"
              height="250px"
              bg="purple"
              m="0 15px"
              flexShrink="0"
              borderRadius="10px"
              color="white"
              textAlign="center"
              lineHeight="250px"
              onMouseDown={onmousedown}
              ref={i === 0 ? firstSlide : i === slidesCount - 1 ? lastSlide : null}
            >
              {i}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}