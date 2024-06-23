import { useState } from "react";
import "../components/RandomColor.css" 
const RandomColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("rgb(83,176,132)")
    const generateRandomColor = () => {
        const elements = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
        let hex = "#"
        for (let index = 0; index < 6; index++) {
            const randomIndex = Math.floor(Math.random() * elements.length)
            console.log(randomIndex)
            hex = hex + elements[randomIndex]
        }
        console.log("Final hex:", hex)
        setBackgroundColor(hex)
    }
    const generateRandomColorRGB = () => {
        const r = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const finalColor = `rgb(${r},${g},${b})`
        setBackgroundColor(finalColor)
    }

    return (
        <>
            <div className="container">
                <div className="color-change">
                    <div style={{
                        background: backgroundColor,
                        height: "300px",
                        width: "300px",
                        color: "#FFFFFF"
                    }}> {backgroundColor} </div>
                </div>
                <div className="action-buttons">
                    <button onClick={() => generateRandomColor()} className="button">Random Color Hex</button>
                    <button onClick={() => generateRandomColorRGB() }  className="button">Random Color RGB</button>
                </div>
            </div>



        </>
    )
}
export default RandomColor