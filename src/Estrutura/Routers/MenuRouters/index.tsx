import React from 'react';
import MainBase from '../../MainForm/index.tsx';
import { TemaProvider } from '../../Tema/index.tsx';
import ProtectedRoute from '../../MainForm/ProtectedRouter.tsx';

interface Params {
    children: React.ReactNode;
}

export const Routers: React.FC<Params> = ({ children }) => {
    return (
        <TemaProvider>
            <ProtectedRoute >
                <MainBase>
                    {children}
                </MainBase>
            </ProtectedRoute>
        </TemaProvider>
    )
}