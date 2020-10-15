import React from 'react'

const Checkbox = ({checked}) => {
    return (
        <div>
            <input type="checkbox" checked={checked}/>
        </div>
    )
}

export default Checkbox;