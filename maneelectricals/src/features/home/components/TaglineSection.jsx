import React, { useRef } from 'react'
import Colors from '../../../config/theme/colors/colors';

const TaglineSection = () => {
    const taglinesRef = useRef(null);

    return (
        <section ref={taglinesRef} className="relative w-full h-screen flex flex-col items-center justify-center text-[7.6vw] font-bold">
            <div>
                <span>POWERING YOUR </span>
                <span style={{color : Colors.yellow}}>DREAMS</span>
            </div>

            <div>
                <span>WIRED FOR </span>
                <span style={{color : Colors.blue}}>EXCELLENCE</span>    
            </div>

            <div>
                <span>SPARKING </span>
                <span style={{color : Colors.magenta}}>INNOVATION</span>
            </div>

            <div>
                <span>BRIGHTER </span>
                <span style={{color : Colors.green}}>CONNECTIONS</span>
            </div>
        </section>
    )
}

export default TaglineSection