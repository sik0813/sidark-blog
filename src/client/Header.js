import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderApp from 'shared/HeaderApp';

const Root = () => (
    <BrowserRouter>
        <HeaderApp/>
    </BrowserRouter>
);

export default Root;