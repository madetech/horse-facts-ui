import React from 'react';
import { storiesOf } from '@storybook/react';
import HorseFactPage from "./";
import GetRandomHorseFact from "../../RemoteUseCases/GetRandomHorseFact"

storiesOf('HorseFactPage', module)
  .add('default', () => <HorseFactPage getRandomHorseFact={new GetRandomHorseFact("https://localhost:5001")}/>);
