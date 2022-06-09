import { createContext } from 'react';

import { IDriver } from '@core/interfaces';

export const AppContext = createContext<IDriver | null>(null);
