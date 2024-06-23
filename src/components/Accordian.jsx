import { useState } from "react"
import '../components/Accordian.css'
const Accordian = () => {
    const data = [
        {
            id: 1,
            question: "Is refund allowed",
            answer: "Yes withing 15 days, you can get refund."
        },
        {
            id: 2,
            question: "Can i cancel my purchase?",
            answer: "Yes you can cancel withing 30 days of purchase."
        }
    ]

    const [isSelected, setSelected] = useState(null)
    const [isMultiSelect, setMultiSelect] = useState(false)
    const [multiValues, setSetMultiValues] = useState([])
    const onQuestionClick = (id) => {
        if (isMultiSelect) {
            const copyOfMultivalue = [...multiValues]
            const index = copyOfMultivalue.indexOf(id)
            if (index > -1) {
                copyOfMultivalue.splice(index, 1)
            } else {
                copyOfMultivalue.push(id)
            }
            setSetMultiValues(copyOfMultivalue)
        } else {
            if (isSelected == id) {
                setSelected(null)
            } else {
                setSelected(id)
            }
        }
        console.log(multiValues)

    }

    const allowMulti = () => {
        setMultiSelect(!isMultiSelect)
    }
    return (
        <>
            <div className="accordian">
                <div className="button-div">
                    <button className="button" onClick={() => allowMulti()}>{isMultiSelect ? "Not Allow" : "Allow"} Multi Select</button>
                </div>
                {
                    data && data.length > 0 ?
                        data.map(d => (
                            <div className="question" onClick={() => onQuestionClick(d.id)}>
                                Question : {d.question} {  ((isMultiSelect && multiValues.indexOf(d.id) > -1) || (isSelected == d.id)) ? "-" : "+"}
                                {
                                    ((isMultiSelect && multiValues.indexOf(d.id) > -1) || (isSelected == d.id)) &&
                                    <div className="answer">
                                        Answer : {d.answer}
                                    </div>
                                }
                            </div>
                        ))
                        : "No Data Found"
                }

            </div>
        </>
    )
}

export default Accordian
