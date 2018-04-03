import React from 'react';
import './HomeLayout.css';
export default function HomeLayout(props)
{
    return (
        <section className="HomeLayout">
            {props.children}
        </section>
    )
}
