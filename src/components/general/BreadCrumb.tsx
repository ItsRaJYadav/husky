import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

interface Param {
    label: string;
    icon: React.ReactNode;
    url: string;
}

interface Props {
    params: Param[];
}

export default function Index({ params }: Props): JSX.Element {
    return (
        <div className='my-2'>
            <div className="bg-gray-100 container flex items-center px-6 py-2 mx-auto overflow-x-auto whitespace-nowrap">
                {params.map((param, index) => (
                    <React.Fragment key={index}>
                        {index !== 0 && (
                            <span className="mx-5 text-gray-500  rtl:-scale-x-100">
                                <MdArrowForwardIos/>
                            </span>
                        )}
                        <Link
                            href={param.url}
                            className="flex items-center text-gray-600 -px-2 hover:underline"
                        >
                            {param.icon}
                            <span className="mx-2">{param.label}</span>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>

    );
}
