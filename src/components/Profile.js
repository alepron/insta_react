import React from 'react';
import User from './User';
import Palette from './Palette';

export default function Profile() {
    return (
        <div className="container profile">
            <User
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt="user"
                name="Name Users"
            />
            <Palette/>
        </div>
    )
}