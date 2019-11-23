import React, { useEffect, useRef } from 'react'

import {
  Box,
  FlexBox,
  Scrollbar,
} from '../../.Common';

export const WidgetsSlider = ({
    items,
    onClick,
    scrollable,
    itemRenderer,
    onClickOver,
    ...props
} = {}) => {

    const SliderComponent = useRef(null);

    useEffect(
        () => {
            document.addEventListener('click', onHandleClickOver);

            return () => {
                document.removeEventListener('click', onHandleClickOver)
            }
        }
    )

    const onHandleClickOver = (e) => {
        if ((!SliderComponent.current ||
            !SliderComponent.current.contains(e.target))) {
            onClickOver && onClickOver();
        }
    }

    return (
        <Box {...props} ref={SliderComponent}>
            <Scrollbar
                width="100%"
                height={scrollable ? '280px' : 'auto'}
                autoHeight={!scrollable}
                autoHeightMin="100%"
                autoHeightMax="100%"
                direction="horizontal"
                renderTrackVertical={() => <div></div>}
            >
                <FlexBox
                    height={scrollable ? "200px" : "auto"}
                    flexWrap="wrap"
                    flexDirection={scrollable ? "column" : "row"}
                    alignContent="start"
                    mt="5px"
                >
                    {(items || []).map(x =>
                        <FlexBox
                            key={x.id}
                            alignItems="center"
                            pl="15px"
                            pr="15px"
                            onClick={() => onClick && onClick({ item: x })}
                            minWidth="320px"
                            borderRadius="4px"
                            transition="all 0.3s ease"
                            mr="25px"
                            mb={scrollable ? "0px" : "25px"}
                            cursor="pointer"
                            transform={x.selected || !items.find(x => x.selected) ? 'scale(1)' : 'scale(0.7)'}
                            css={(x.selected || !items.find(x => x.selected)) &&
                                `&:hover{
                                      transform: translateY(-5px);
                                  }
                                  &:before{
                                    content: '';
                                    position: absolute;
                                    width: 100%;
                                    height: 8px;
                                    border-radius: 50%;
                                    left: 0;
                                    bottom: -35px;
                                    box-shadow: 0 30px 12px rgba(0,0,0,0.15);
                                    animation: fadeIn 1200ms ease 1000ms;
                                    animation-fill-mode: forwards;
                                  }
                                `}
                        >
                            {!!itemRenderer && itemRenderer({ item: x })}
                        </FlexBox>
                    )}
                </FlexBox>
            </Scrollbar>
        </Box>
    )
}
