import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const BoxRandom = () => {

    const [randomX, setRandomX] = useState()
    const [randomY, setRandomY] = useState()
    const boxRef = useRef()

    function getrandom() {
        setRandomX(gsap.utils.random(0,1000,10))
        setRandomY(gsap.utils.random(0,500,10))
        console.log(randomX+" "+randomY)
        gsap.to(boxRef.current,{
            x:randomX,
            y:randomY,
            ease:"power1.inOut",
            duration:1
        })
    }

    useEffect(() => {
        boxRef.current.addEventListener('click', getrandom)
    }, [randomX, randomY])


    return (
        <div className='bg-black h-dvh w-dvw flex '>
            <div ref={boxRef} className='move-box h-20 w-20 bg-red-500 rounded-3xl'>

            </div>
        </div>
    )
}

export default BoxRandom
