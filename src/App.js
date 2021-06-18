import '@shopify/polaris/dist/styles.css'
import './App.scss'
import ImageComponent from './components/ImageComponent'
import { useState, useEffect } from 'react'
import { ColorPicker, Page, Card, FooterHelp, Link } from '@shopify/polaris';
import * as htmlToImage from 'html-to-image';
import QouteTextField from './components/QouteTextField';

function App() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7
  });
  const [txtValue, setTxtValue] = useState('Your quote')
  const handleTxtChange = (newValue => setTxtValue(newValue))

  const generateImage = async()=>{
    let node = document.getElementById("generate-image")
    const fontEmbedCss = await htmlToImage.getWebFontEmbedCss(node)
    node.style.display = "flex"
    htmlToImage.toPng(node, {fontEmbedCss})
    .then(function(dataUrl){
      let img = document.getElementById('image-holder')
      img.src = dataUrl
      node.style.display = "none"
    })
    .catch(function(err){
      console.log(err)
    })
  }

  useEffect(()=>{
    generateImage()
  })

  return (
    <>
      <Page title="Enter quote and select color">
        <Card sectioned className="Card">
          <div className = "container">
            <div className = "quote-text">
              <QouteTextField value = {txtValue} handleChange = {handleTxtChange}/>
            </div>
            <div className = "quote-color">
              <ColorPicker allowAlpha color = {color} onChange={setColor}/>
            </div>
            <div className = "quote-image">
              <ImageComponent color = {color} textValue = {txtValue}/>
            </div>
          </div>
        </Card>
        <FooterHelp>
          GitHub Link:{' '}
          <Link external url="https://github.com/FrancisPaterno/quote-to-image-processor">
            here
          </Link>
        </FooterHelp>
      </Page>
    </>
  );
}

export default App;
