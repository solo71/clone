import { Routes, Route } from 'react-router-dom';
import React from "react";

import GlobalFeed from './pages/globalFeed'
import Article from './pages/article'
import Authentification from './pages/authentification'

export default () => {
    return (
        <Routes>
            <Route path='/' element={<GlobalFeed />} exact={true} />
            <Route path='/articles/:slug' element={<Article />} />
            <Route path='/login' element={<Authentification />} />
            <Route path='/register' element={<Authentification />} />
        </Routes>
    )
}