
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// function Translate() {
//   const[options,setOptions]=useState([])
//   const [to,setTo]=useState("en");
//   const [from,setFrom]=useState("en");
//   const [input,setInput]=useState("");
//   const [output,setOutput]=useState("");
//   const translate=()=>{
//     const params=new URLSearchParams();
//     params.append('q',input);
//     params.append('source',from);
//     params.append('target',to);
//     params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    

   


//     axios.post('https://libretranslate.de/translate',params,{
//       headers:{'accept':'application/json',
//       'Content-Type':'application/x-www-form-urlencoded'},
//     }).then(res=>{
//       console.log(res.data)
//       setOutput(res.data.translatedText)
//     })
//   };
//   useEffect(() => {
//     axios.get("https://libretranslate.com/languages",{headers:{'accept':'application/json'}}).then(res=>{
//       // console.log(res)
//       setOptions(res.data)
//     })

//   },[])
//   return (
//     <div className="App container-fluid">

       

//     <div className='container'>
//      <div className='row'>
//       <div className='col-md-4'>
//       <span>From ({from}):  </span>
//       <select className="btn btn-primary form-select-lg mb-3 " onChange={e=>setFrom(e.target.value)}>
//       {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
//       </select>
//       </div>

//       <div className='col-md-4'>
//       <span>   &nbsp;&nbsp;&nbsp;&nbsp; To ({to}):  </span>
//        <select className="btn btn-primary form-select-lg mb-3 " onChange={e=>setTo(e.target.value)}>
//       {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
//       </select>
//       </div>
//       </div>
//       </div>
//       <div className='group col-xs-6'>
//         <div className="form-group">
//           <textarea className="form-control" rows="6" cols="70" onInput={(e)=>setInput(e.target.value)}></textarea>
//         </div>
  
//         <br/> <br/>
//         <div className="form-group col-xs-6">
//         <textarea className="form-control" rows='6'  cols="70" value={output}></textarea>
//         </div>
//       </div>
//       <br/> <br/>
//       <div>
//       <button className="btn btn-primary" onClick={e=>translate()}>Translate</button>
//       </div>
//      <br/> <br/> <br/>
//     </div>
//   );
// }

// export default Translate;

import TextBox from './translat/TextBox'
import Arrows from './translat/Arrows'
import Button from './translat/Button'
import Modal from './translat/Modal'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Translat } from 'react-bootstrap-icons'
import './tanslate.css'
import { Redirect } from 'react-router'




const Translate = ()=> {
  
  const savedInputLanguage = localStorage.getItem('inputLanguage')
  const [inputLanguage,setInputLanguage] = useState(
    savedInputLanguage ? JSON.parse(savedInputLanguage) : 'English')
  useEffect(() => {localStorage.setItem('inputLanguage', JSON.stringify(inputLanguage))},[inputLanguage])
  const savedOutputLanguage = localStorage.getItem('outputLanguage')
  const [outputLanguage,setOutputLanguage] = useState(
    savedOutputLanguage ? JSON.parse(savedOutputLanguage) : 'Arabic')
  useEffect(() => {localStorage.setItem('outputLanguage', JSON.stringify(outputLanguage))},[outputLanguage])
  const savedOutputCode = localStorage.getItem('outputCode')
  const [outputCode,setOutputCode] = useState(
    savedOutputCode ? JSON.parse(savedOutputCode) : 'ar')
  useEffect(() => {localStorage.setItem('outputCode', JSON.stringify(outputCode))},[outputCode])
  const savedInputCode = localStorage.getItem('inputCode')
  const [inputCode,setInputCode] = useState(
    savedInputCode ? JSON.parse(savedInputCode) : 'en')
  useEffect(() => {localStorage.setItem('inputCode', JSON.stringify(inputCode))},[inputCode])
  const savedTextToTranslate = localStorage.getItem('textToTranslate')
  const [textToTranslate,setTextToTranslate] = useState(
    savedTextToTranslate ? JSON.parse(savedTextToTranslate) : '')
  useEffect(() => {localStorage.setItem('textToTranslate', JSON.stringify(textToTranslate))},[textToTranslate])
  const savedTranslatedText = localStorage.getItem('translatedText')
  const [translatedText,setTranslatedText] = useState(
    savedTranslatedText ? JSON.parse(savedTranslatedText) : '')
  useEffect(() => {localStorage.setItem('translatedText', JSON.stringify(translatedText))},[translatedText])

  const [showModal,setShowModal] = useState(null)
  const [languages,setLanguages] = useState(null)
  const getLanguages = ()=>{
    const options = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      params: {target: 'en'},
      headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '77b129fd9amsha1952677780561fp12154ejsn3d055a8ba076',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }
    };
    
    
    axios.request(options).then(function (response) {
      setLanguages(response.data.data.languages);
    }).catch(function (error) {
      console.error(error);
    });
  }
  const translate = ()=>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", textToTranslate);
    encodedParams.append("target", outputCode);
    encodedParams.append("source", inputCode);
    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '77b129fd9amsha1952677780561fp12154ejsn3d055a8ba076',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams
    };
    
    axios.request(options).then(function (response) {
      setTranslatedText(response.data.data.translations[0].translatedText);
    }).catch(function (error) {
      console.error(error);
    });
      }

  useEffect(()=>{
    getLanguages()
  },[])
  const handleClick = ()=>{
    setTextToTranslate(translatedText)
    setTranslatedText(textToTranslate)
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
    setInputCode(outputCode)
    setOutputCode(inputCode)
  }
  console.log('input',inputCode)
  return (
    <div className='app' id='translate'>
      {!showModal && <>
        <div className='container-fluid'>
         <div className='row'>
          <div className='col-md-6 ml-2 display'>
        <TextBox 
          selectedLanguage={inputLanguage}
          style='input' 
          setShowModal={setShowModal}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslatedText={setTranslatedText}
        />
        <div className='arrow-container' onClick={handleClick}>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Arrows/>
        </div>
        </div>
        
        <div className='col-md-6'>
        
        <TextBox 
          selectedLanguage={outputLanguage}
          style='output'
          setShowModal={setShowModal} 
          translatedText={translatedText}
          />
        <div className='button-container'onClick={translate}>
          <Button />
        </div>
        </div>
        </div>
        </div>
      </>}
      {showModal && 
      <Modal 
        setShowModal={setShowModal}
        languages={languages}
        chosenLanguage={showModal==='input' ? inputLanguage:outputLanguage }
        setChosenLanguage={showModal==='input' ? setInputLanguage:setOutputLanguage }
        setChosenCode={showModal==='input' ? setInputCode:setOutputCode }
      /> 
      
       
      
      }
      

    </div>
     
  );
}

export default Translate;