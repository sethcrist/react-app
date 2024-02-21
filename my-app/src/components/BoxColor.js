import React, {useState} from "react";

const BoxColor = () => {
    const [colorIndex, setColorIndex] = useState(0)
    const colorArr = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]

    const handleClick = () => {
        if(colorIndex < 7)
            setColorIndex(colorIndex + 1)
    }
    return (
        <div onClick={ () => handleClick(colorArr)  } className="color-box" style={{backgroundColor: colorArr[colorIndex]}}>

        </div>
    )
}
export default BoxColor