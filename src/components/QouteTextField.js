import { TextField } from '@shopify/polaris'
import React from 'react'

function QouteTextField({value, handleChange}) {

    return (
        <TextField label="Your Quote" value = {value} onChange = {handleChange} maxLength={100} showCharacterCount={true}/>
    )
}

export default QouteTextField
