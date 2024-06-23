import { useState } from "react"
import "../LoadMoreButton/LoadMoreButton.css"
const LoadMoreButton = () => {
    const numbers = [...Array(100).keys()]
    const [limit,setLimit] = useState(20)
    const initialLimit = 20
    const loadMore = () => {
        setLimit(limit + initialLimit)
    }

    return (
        <>
            <div className="main-container">
                <div className="numbers-container">
                    {
                        numbers.map(element =>
                            element < limit && <div className="number-div">
                                {element}
                            </div>
                        )
                    }
                </div>
                <div className="load-more">
                    { limit < 100 && <button className="button" onClick={()=> loadMore()}> Load More </button> } 
                </div>
            </div>
        </>
    )
}
export default LoadMoreButton