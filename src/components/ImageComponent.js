import React from 'react'
import {rgbString, hsbToRgb} from '@shopify/polaris'

function ImageComponent({color, textValue}) {
    const rgbaColor = rgbString(hsbToRgb(color))
    return (
        <div id="image-panel">
            <div id = "generate-image" style={{color:rgbaColor}}>
                <div className="text-content">{textValue}</div>
            </div>
            <span><strong>Your image here : </strong></span>
            <img id = "image-holder" alt="Qoute" loading="lazy"/>
        </div>
    )
}
export default ImageComponent
