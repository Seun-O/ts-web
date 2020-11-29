/* eslint-disable import/prefer-default-export */
import React from 'react';

type Props = {
  text: string;
  addClass?: string;
};

export const H1: React.FC<Props> = ({text, addClass = ''}) => (
  <h1 className={`text-5xl text-red-600 ${addClass}`}>{text}</h1>
);

export const H2: React.FC<Props> = ({text, addClass = ''}) => (
  <h2 className={`text-4xl text-red-600 ${addClass}`}>{text}</h2>
);
