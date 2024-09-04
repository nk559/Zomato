import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Components/Home';
import Filter from '../Components/Filter';
import Details from '../Components/Details';
import Header from '../Components/Header';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
