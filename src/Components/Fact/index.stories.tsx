import React from 'react';
import { storiesOf } from '@storybook/react';
import Fact from "./";

storiesOf('Fact', module)
  .add('default', () => <Fact content="Horses are cool!"/>)
  .add('short', () => <Fact content="Horses"/>)
  .add('long', () => <Fact content="Horses are really really really really really really really really really really really really really really cool!"/>);
