import React from 'react';
import {Link} from 'react-router-dom';

export default function FirstComponent() {
    return  (
        <>
            <Link to={{
            pathname: '/details',
            state: {id: 1, name: 'sabaoon', shirt: 'green'}
            }} >Learn More</Link>
        </>
    )
}