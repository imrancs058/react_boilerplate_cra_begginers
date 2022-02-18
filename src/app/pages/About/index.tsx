/**
*
* About
*
*/
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const About = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
  <Div>
    <h1>About Page with Auth</h1>
  </Div>
  );

});

const Div = styled.div``;
