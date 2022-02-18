/**
*
* Header
*
*/
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
  <div>
    <h1>Private Header</h1>
  </div>
  );

};

