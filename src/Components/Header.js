import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ history }) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [display, setDisplay] = useState('none');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname; // Get the current path
        setBackground(path);
    }, [location]); // The empty array ensures this runs only once (on mount)

    const setBackground = (path) => {
        if (path ==='/' ||path==='Home') {
            setBackgroundColor('transparent'); // Setting backgroundColor to none
            setDisplay('none');
        } else {
            setBackgroundColor('red');
            setDisplay('inline-block');
        }
    };

    return (
        <div className='header' style={{ backgroundColor: backgroundColor }}>
            <div className='header-logo' style={{ display: display }}>
                <p>e!</p>
            </div>
            <div className='user-account'>
                <div className='login'>Login</div>
                <div className='signup'>Create an account</div>
            </div>
        </div>
    );
};

export default Header;
