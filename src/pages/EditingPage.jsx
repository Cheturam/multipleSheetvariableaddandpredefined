import React from 'react'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'

export default function EditingPage(props) {
    const { click, spreadSheetValue, handleInputChange, addMore } = props


    return (
        <>
            {spreadSheetValue.map((useInputField, index) => (
                <>
                    <div>
                        <label>Name</label>
                        <input id={index} name={"name"} onChange={(e) => handleInputChange(e)} />
                        <label>Age</label>
                        <input id={index} name={"age"} onChange={(e) => handleInputChange(e)} />

                    </div>

                </>
            ))}
            <ButtonComponent content="Add more item" onClick={addMore} />

            <ButtonComponent content="submit" onClick={click} />
        </>
    )
}
