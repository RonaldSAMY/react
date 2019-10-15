import React from 'react';
import { NavLink } from 'react-router-dom'
const New = () => {
    return (
        <div>
            <nav className='row'>
                <NavLink className="btn col-2" activeClassName="activate" to="/all-ideas">Tous les idées</NavLink>
            </nav>
        </div>
    );
}

export default New;
