import * as React from 'react';
import { render } from '@testing-library/react';

import { Waqas } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Waqas  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Waqas />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
