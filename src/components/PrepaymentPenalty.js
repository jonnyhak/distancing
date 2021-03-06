
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function PrepaymentPenalty(props) {
    
    const options = [
            {value: "No prepayment penalty", label: "No prepayment penalty"},
            {value: "No prepayment penalty in the event of a sale", label: "No prepayment penalty in the event of a sale"},
            {value: "Stepdown prepayment penalty", label: "Stepdown prepayment penalty"},
            {value: "Yield Maintenance", label: "Yield Maintenance"},
            {value: "Defeasance", label: "Defeasance"}
    ]
    
    return (
        <div>
            <label>Please select all prepayment penalty options that you can offer</label>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedPrepaymentPenalty}
                onChange={props.setSelectedPrepaymentPenalty}
                labelledBy="Select"
            />

        </div>
    )
}