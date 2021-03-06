
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function PropertyTypes(props) {
    
    const options = [
            {value: "Multi family", label: "Multi family (5+ units)"},
            {value: "Multi unit residential investment", label: "Multi unit residential investment (2-4 units)"},
            {value: "SFR", label: "SFR"},
            {value: "SRO Housing", label: "SRO Housing"},
            {value: "Motels", label: "Motels"},
            {value: "Special use / entertainment", label: "Special use / entertainment"},
            {value: "Hotel", label: "Hotel"},
            {value: "Short term rentals", label: "Short term rentals"},
            {value: "Horizontal Construction", label: "Horizontal Construction"},
            {value: "Vertical Construction", label: "Vertical Construction"},
            {value: "Raw Land", label: "Raw Land"},
            {value: "Traditional office building", label: "Traditional office building"},
            {value: "Executive suite office", label: "Executive suite office"},
            {value: "Industrial", label: "Industrial"},
            {value: "Self storage", label: "Self storage"},
            {value: "Gas stations / convenience stores", label: "Gas stations / convenience stores"},
            {value: "Car wash", label: "Car wash"},
            {value: "Mobile / Manufactured home park", label: "Mobile / Manufactured home park"},
            {value: "RV Park", label: "RV Park"},
            {value: "Grocery Anchored Retail", label: "Grocery Anchored Retail"},
            {value: "Single tenant - public, investment grade credit", label: "Single tenant - public, investment grade credit"},
            {value: "Single tenant - private, non-credit franchise", label: "Single tenant - private, non-credit franchise"},
            {value: "Unanchored strip center", label: "Unanchored strip center"},
            {value: "Owner occupied retail", label: "Owner occupied retail"},
            {value: "Owner occupied medical", label: "Owner occupied medical"},
            {value: "Owner occupied industrial", label: "Owner occupied industrial"},
            {value: "Medical office", label: "Medical office"},
            {value: "Enclosed Malls", label: "Enclosed Malls"},
            {value: "Retail outlets - open aired malls", label: "Retail outlets - open aired malls"},
            {value: "Power Centers - open aired big box retail", label: "Power Centers - open aired big box retail"},
            {value: "Student Housing", label: "Student Housing"},
            {value: "Cannabis retail / dispensary - owner occupied", label: "Cannabis retail / dispensary - owner occupied"},
            {value: "Cannabis retail / dispensary - investment property", label: "Cannabis retail / dispensary - investment property"},
            {value: "Cannabis Cultivation Facility - owner occupied", label: "Cannabis Cultivation Facility - owner occupied"},
            {value: "Cannabis Cultivation Facility - investment property", label: "Cannabis Cultivation Facility - investment property"},
            {value: "Senior Living / Assisted Living / Active Living / Independent Living / Nursing Home", label: "Senior Living / Assisted Living / Active Living / Independent Living / Nursing Home (Please select if you lend on ANY of these facilities)"}
    ]
    
    return (
        <div>
            <label>Please select all property types that you lend on</label>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedPropertyTypes}
                onChange={props.setSelectedPropertyTypes}
                labelledBy="Select"
            />

        </div>
    )
}
