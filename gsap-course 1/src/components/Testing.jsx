import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Testing = () => {

  useGSAP(() => {
    const tickercontainer = document.querySelector(".tickerWraper")
    const content = document.querySelector('.textcontent')
    tickercontainer.append(content.cloneNode(true))
    tickercontainer.append(content.cloneNode(true))
    tickercontainer.append(content.cloneNode(true))
  


    document.querySelectorAll(".textcontent").forEach(ele => {
      gsap.to(ele, {
        x: "-100%",
        repeat: -1,
        duration: 5,
        ease: "linear"
      })
    })

  }, [])


  return (
    <div className="h-dvh w-dvw bg-black flex items-center">
      <div className='tickerWraper bg-yellow-400 h-1/2 w-full flex items-center overflow-x-hidden'>
        <div className='textcontent text-8xl  test1 w-2/3 uppercase flex-shrink-0 flex place-content-around'  >
        <p>Curve</p>
        <p>Horizon</p>
        </div>
      </div>
    </div>
  )
}

export default Testing
