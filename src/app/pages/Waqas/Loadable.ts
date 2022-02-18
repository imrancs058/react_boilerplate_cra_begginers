/**
*
* Asynchronously loads the component for Waqas
*
*/

import { lazyLoad } from 'utils/loadable';

export const Waqas = lazyLoad(() => import('./index'), module => module.Waqas);