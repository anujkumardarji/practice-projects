import "../components/ImageSlider.css"
import { useState } from "react"
const ImageSlider = () => {
    const images = [
        { url : "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", isSelected : false },
        { url : "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ", isSelected : false },
        { url : "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w", isSelected : false },
        { url : "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s", isSelected : false }
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    const [currentUrl,setCurrentUrl] = useState(images[0].url)

    const goNext = () => {
        let index = currentIndex < (images.length - 1) ? currentIndex + 1 : 0
        setCurrentUrl(images[index].url)
        setCurrentIndex(index)
        console.log(index)
    }

    
    const goBack = () => {
        let index = currentIndex > 0 ? currentIndex - 1 : images.length - 1
        setCurrentUrl(images[index].url)
        setCurrentIndex(index)
        console.log(index)
    }

    return (
        <>
            <div className="container">
                <div className="button-container">
                    <button className="button" onClick={()=> goBack()}>Previous</button>
                </div>
                <div className="image-container">
                    <img src={currentUrl} className="images"></img>
                </div>
                <div className="button-container">
                    <button className="button" onClick={()=>  goNext() } >Next</button>
                </div>
            </div>
            <div className="indicator-container">
                {
                    images.map((_,index)=> (<div className={index == currentIndex ? "selected-indicator" : "indicator"}></div>))
                }
            </div>
        </>
    )
}
export default ImageSlider 