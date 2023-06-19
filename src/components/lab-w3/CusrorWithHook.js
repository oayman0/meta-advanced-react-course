import { useState, useEffect } from "react"

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState(null)//local state

    useEffect(() => {

        const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }
        window.addEventListener("mousemove", handleMousePositionChange)

        return () => {
            //add cleanup here / unsubscription when unmounts
            window.removeEventListener('mousemove', handleMousePositionChange)
        }
    }//end of effect function
        , []
    )//Effect

    return mousePosition
}


export const PanelMouseLogger = () => {
   const mousePosition = useMousePosition()
    return (
        mousePosition &&
        <div>
            <h1>Panel Mouse Position:</h1>
            <h2>x:{mousePosition.x}</h2>
            <h2>y:{mousePosition.y}</h2>
        </div>
    ) 
}


export const PointMouseLogger = () => {
    const mousePosition = useMousePosition()
    return (
        mousePosition &&
        <div>
            <h1>Point Mouse Position:</h1>
            <h2>x:{mousePosition.x}</h2>
            <h2>y:{mousePosition.y}</h2>
        </div>
    )
}