import React from 'react';
import { MainPage } from '../../pages/Main.tsx';
import { MainPageProps } from '../../props/MainPageProps.ts';

export function App({placeCount}: MainPageProps): React.JSX.Element {
  return (
    <MainPage placeCount={placeCount}/>
  );
}
