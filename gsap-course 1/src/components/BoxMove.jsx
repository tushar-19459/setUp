import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const BoxMove = () => {

    const boxRef = useRef()
    const [xvalue, setXvalue] = useState(0)
    const [yvalue, setYvalue] = useState(0)
    function handleclick(ele) {
        console.log(ele.pageX + " " + ele.pageY)
        setXvalue(ele.pageX)
        setYvalue(ele.pageY)
    }
    useState(() => {
        const listner = document.addEventListener('click', handleclick)
        return removeEventListener(listner, handleclick)
    }, [])

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: xvalue,
            y: yvalue
        })
    }, [xvalue, yvalue])


    return (
        <div className='bg-black h-dvh w-dvw flex '>
            <div ref={boxRef} className='move-box h-44 w-44 bg-red-500 rounded-3xl'>

            </div>
        </div>
    )
}

export default BoxMove
