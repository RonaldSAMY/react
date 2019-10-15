import React from 'react';

const Filter = () => {
    return (
        <div>
            <div>
                <span>Vote</span>
                <select>
                    <option>------</option>
                    <option>ASC</option>
                    <option>DESC</option>
                </select>
            </div>
            <div>
                <span>Date</span>
                <select>
                    <option>------</option>
                    <option>ASC</option>
                    <option>DESC</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
