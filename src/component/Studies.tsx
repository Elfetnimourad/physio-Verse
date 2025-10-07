import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import openai from './Fetch';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import { GoogleGenerativeAI, type GenerateContentRequest, type Part } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import NorthIcon from '@mui/icons-material/North';
import NavigationIcon from '@mui/icons-material/Navigation';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import CircularProgress from '@mui/material/CircularProgress';
import {addingChats,getData} from './FirebaseConfig'
const genAI = new GoogleGenerativeAI("AIzaSyBrHXS-7FXuwewb_zwRDpGm2BiUUtyFMvQ"); 
function Studies() {
 const [topic,setTopic] = useState<React.Dispatch<React.SetStateAction<string>>>();
const [items,setItems] = useState<{}[]>([]);
const [query ,setQuery] = useState<string>("");
const [isLoading,setIsLoading] = useState<boolean>(false);


const promting = async (query: string | GenerateContentRequest | (string | Part)[]) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(query);
    setItems([...items,{question:query,answer:result.response.text()}])
    console.log(result);
    console.log("this is items",items)
    addingChats(query,result.response.text())
    // if(reg.test(item)){
    
    // }
    setIsLoading(true);
  } catch (err) {
    console.error(err);
  }
};




// console.log(topic)
 
setTimeout(()=>{
setIsLoading(false)
},3000)

console.log(items)
  return (
    <div className='d-flex row justify-content-center' >
          <OutlinedInput  placeholder="ask anything" id="fullWidth" 
                     endAdornment={<InputAdornment position="end"><NorthIcon sx={{cursor:'pointer',color:'white'}} onClick={()=>promting(query)}/></InputAdornment>}
 className="" style={{width:"50%",color:'white',borderColor:'white'}} multiline value={query} onChange={(e)=>setQuery(e.target.value)}/>
            {/* <Box sx={{width:5,transform:'translate(-215%,20%)'}} >
<NavigationIcon/></Box> */}
    {/* <div className='d-flex column justify-content-evenly' style={{width:"60%"}}>
        <button onClick={()=>promting(query)}><i className="bi bi-arrow-up"></i></button>

      
      </div> */}
    
      <div className='p-5'>
  {!isLoading && items.map((item)=>
    <div className=''>
    
<div  style={{border:"1px solid black",width:'fit-content',padding:5,borderRadius:"20px",marginLeft:"auto",marginBottom:8,opacity:0.7}}>{item.question}</div>

      <div><ReactMarkdown>{item.answer}</ReactMarkdown></div>
 
    </div>

 
  
  
  
     
         ) }
 {isLoading && <CircularProgress disableShrink />}

        </div>
    </div>
  )
}

export default Studies

//AIzaSyBrHXS-7FXuwewb_zwRDpGm2BiUUtyFMvQ