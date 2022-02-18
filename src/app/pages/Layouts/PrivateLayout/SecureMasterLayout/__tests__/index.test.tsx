import * as React from 'react';
import { render } from '@testing-library/react';

import { MasterLayout } from '..';

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

describe('<SecureMasterLayout  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MasterLayout />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
