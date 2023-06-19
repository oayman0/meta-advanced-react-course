import { useState, useEffect } from "react"

const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [mousePosition, setMousePosition] = useState(null)//local state

        useEffect(() => {

            const handleMousePositionChange = (e)=>{
                setMousePosition ({
                    x : e.clientX,
                    y : e.clientY,
                })
            }
                window.addEventListener("mousemove", handleMousePositionChange)

                return () => {
                    //add cleanup here / unsubscription when unmounts
                    window.removeEventListener('mousemove',handleMousePositionChange)
                }
            }//end of effect function
            , []
        )//Effect

        return <WrappedComponent mousePosition={mousePosition} {...props} />
        //pass the wrapped component with its props

    }//return a new enhanced function component
} 





const PanelMouseLogger = ({mousePosition})=>{
    return(
    mousePosition &&
    <div>
        <h1>Panel Mouse Position:</h1>
        <h2>x:{mousePosition.x}</h2>
        <h2>y:{mousePosition.y}</h2>
    </div>
    )
}


const PointMouseLogger = ({mousePosition})=>{
    return(
        mousePosition &&
        <div>
            <h1>Point Mouse Position:</h1>
            <h2>x:{mousePosition.x}</h2>
            <h2>y:{mousePosition.y}</h2>
        </div>
        )
}

export const NewPanel = withMousePosition(PanelMouseLogger)
export const NewPoint = withMousePosition(PointMouseLogger)