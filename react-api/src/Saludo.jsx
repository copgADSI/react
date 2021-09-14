import React from 'react'

export default function Saludo(props) {
    console.log(props.saludo);
    return (
        <div>
            {props.Saludo}
        </div>
    )
}
