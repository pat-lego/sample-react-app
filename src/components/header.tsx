import React, { useContext, useState } from 'react';
import { HeaderContext } from './headerContext';

export default function Header(props: any) {

    const headerContext = useContext(HeaderContext);

    const [display, setDisplay] = useState('hidden');
    let htmlStyle = `list-none ${display} justify-start`;

    return (
        <header>
            <div className="text-left justify-start w-52"
                onMouseEnter={e => {
                    setDisplay('block');
                }}

                onMouseLeave={e => {
                    setDisplay('hidden');
                }}
            >

                {headerContext.documentation &&
                    <div>
                        <h2 className="w-full font-bold m-2">{props.title || "Documentation"}</h2>
                        <ul className={htmlStyle}>
                            <li className='m-1 italic'><a href="#">Component Creation</a></li>
                            <li className='m-1 italic'><a href="https://tailwindcss.com/" target='_blank'>Tailwind Documentation</a></li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    );
}