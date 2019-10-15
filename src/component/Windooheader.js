import React from 'react';
import Filter from './Filter';
import { NavLink } from 'react-router-dom'

const Windooheader = () => {
    return (
        <div className='row'>
            <div className='col-10'>
                <Filter></Filter>
            </div>
            <NavLink className="btn col-2" activeClassName="activate" to="/new-idea">nouvelle idée</NavLink>
            <NavLink className="btn col-2" activeClassName="activate" to="/new-idea">Admin</NavLink>
        </div>
    );
}

export default Windooheader;
