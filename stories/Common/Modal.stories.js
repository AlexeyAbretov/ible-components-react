import React from 'react';

import {
  boolean,
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Modal,
  Text,
  FlexBox,
  Button,
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Modal', () => (
  <React.Fragment>
    <Modal
      isShow={boolean('isShow', false)}
      close={() => alert('close!!!')}
      width={[null, 1 / 2, 1 / 3]}
    >
      <FlexBox
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        height="auto"
        width="100%"
        p={['50px 10px', '50px']}
      >
        <Text
          text="Перевод выполнен успешно"
          fontSize={6}
          fontWeight={4}
          color="grays.3"
          lineHeight="normal"
          textAlign="center"
          mb="30px"
        />
        <Text
          text="В случае возникновения трудностей, вы всегда можете запросить информацию о переводе в техподдерже"
          fontSize={3}
          fontWeight={2}
          color="grays.3"
          textAlign="center"
          lineHeight={1.56}
          mb="30px"
        />
        <Button
          width={200}
          textProps={{ text: 'Закрыть' }}
          onClick={() => alert('close!!!')}
        />
      </FlexBox>
    </Modal>


  </React.Fragment>
));
