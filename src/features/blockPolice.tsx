import React from 'react'

export default function BlockPolice({title, last = false, inSimpleTerms, children}: {title: string, last?: boolean, inSimpleTerms?: string, children: React.ReactNode}) {
    return (
        <div className={`${!last ? 'mb-[50px]' : ''}`}>
            <p className='text-[20px] mb-[15px] font-medium'>{title}</p>
            <div>
                {children}
                {inSimpleTerms && (
                    <>
                        <br/>
                        <p>In Simple Terms:</p>
                        <p>{inSimpleTerms}</p>
                    </>
                )}
            </div>
        </div>
    )
}
