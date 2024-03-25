import React from "react";

export default function AppLogo({customStyle}) {
    return (
        <>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="#rgb(37 99 235)" strokeWidth="2" fill="rgb(37 99 235)"/>
                <circle cx="12" cy="12" r="8" stroke="rgb(37 99 235)" strokeWidth="2" fill="#E5E7EB"/>
                <line id="minuteHand" x1="12" y1="12" x2="12" y2="8" stroke="rgb(37 99 235)" strokeWidth="2" strokeLinecap="round" className={customStyle}/>
            </svg>
        </>
    )
}