import React from 'react';
import { Circle } from "../circle";
import { Logo } from "../logo";
import { rootStore } from "../root-store";

describe('Render icons', () => {
  test('Render Circle', () => {
    const output = <Circle color={'#fff'} width={33} height={33} children={{}}/>;
    expect(output).toMatchSnapshot();
  });

  test('Render Logo', () => {
    const output = <Logo color={'#fff'} />;
    expect(output).toMatchSnapshot();
  });
});

describe('Test mixColors', () => {
  test('mixColors: 4 > result > 0', () => {
    const result = rootStore.getRandomInt(3);
    expect(result > 0 && result < 4).toBeTruthy()
  });

  test('mixColors result is int', () => {
    const result = rootStore.getRandomInt(3);
    expect(Number.isInteger(result)).toBeTruthy();
  });
});