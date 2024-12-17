'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="8b0597c4e91ff515bf2bd6bef775b33acdd17ba0"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
