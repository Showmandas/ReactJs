import React from 'react'

export default function Child(props) {
    const data="I am child data";
    props.onChildData(data);
    return (
        <div>
            <p>{props.data}</p>
        </div>
    )
}
