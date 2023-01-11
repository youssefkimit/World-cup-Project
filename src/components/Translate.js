import {useState,useEffect} from 'react';
import axios from 'axios';
function Translate() {
  const[options,setOptions]=useState([])
  const [to,setTo]=useState("en");
  const [from,setFrom]=useState("en");
  const [input,setInput]=useState("");
  const [output,setOutput]=useState("");
  const translate=()=>{
    const params=new URLSearchParams();
    params.append('q',input);
    params.append('source',from);
    params.append('target',to);
    params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');


    axios.post('https://libretranslate.de/translate',params,{
      headers:{'accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded'},
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };
  useEffect(() => {
    axios.get("https://libretranslate.com/languages",{headers:{'accept':'application/json'}}).then(res=>{
      console.log(res)
      setOptions(res.data)
    })

  })
  return (
    <div className="App container-fluid">
    <div className='container'>
     <div className='row'>
      <div className=' col-md-4'>
      <span>From ({from}):  </span>
      <select className="btn btn-primary form-select-lg mb-3" onChange={e=>setFrom(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      </select>
      </div>

      <div className=' col-md-4'>
      <span>   &nbsp;&nbsp;&nbsp;&nbsp; To ({to}):  </span>
       <select className="btn btn-primary form-select-lg mb-3 " onChange={e=>setTo(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      </select>
      </div>
      </div>
      </div>
      <div className='group col-xs-6'>
        <div className="form-group">
          <textarea className="form-control" rows="6" cols="70" onInput={(e)=>setInput(e.target.value)}></textarea>
        </div>
     <br/><br/><br/>

        <div className="form-group col-xs-6">
        <textarea className="form-control" rows='6'  cols="70" value={output}></textarea>
        </div>
      </div>
      <br/><br/>
      <div>
      <button className="btn btn-primary" onClick={e=>translate()}>Translate</button>
      </div>
     <br/><br/><br/><br/>
    </div>
  );
}

export default Translate;