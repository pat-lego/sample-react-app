import { createContext } from 'react';

type Header = {
    documentation: Boolean;
};

export const header: Header = {
    documentation: true
};

export const HeaderContext = createContext(header);