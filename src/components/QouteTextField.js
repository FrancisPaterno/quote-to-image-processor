import { TextField } from '@shopify/polaris'
import React from 'react'

function QouteTextField({value, handleChange, handleOnBlur}) {

    return (
        <TextField label="Your Quote" value = {value} onChange = {handleChange} onBlur = {handleOnBlur} maxLength={100} showCharacterCount={true}/>
    )
}

export default QouteTextField
