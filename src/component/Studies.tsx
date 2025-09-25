import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Studies() {
const [topic,setTopic] = useState("");
const [items,setItems] = useState([])
 async function fetchData(topic){
const res = await fetch(`https://api.crossref.org/works?query=${topic}&rows=10`);
  const data = res.json().then(d=>d.message.items);
  console.log(data)
  setItems(...data)
   }
console.log(topic)
//   useEffect(() => {
//   async function fetchData(){
// const res = await fetch(`https://api.crossref.org/works?query`);
//   const data = res.json();
//   console.log(data)
//    }

//    fetchData()
  
//   }, [])
  return (
    <div className='d-flex row justify-content-center' >
          <TextField  label="fullWidth" id="fullWidth" className="w-50" style={{width:"40%"}} />

    <div className='d-flex column justify-content-evenly' style={{width:"60%"}}>
        <nav >All</nav>
        <nav onClick={()=>fetchData("relativity")}>relativity</nav>
        <nav onClick={()=>fetchData("quantum")}>quantum </nav>
        <nav onClick={()=>fetchData("black hole")}>black hole</nav>
        <nav>csz</nav>
      </div>
    
      <div>
           {/* <ImageListItem key={item.img} >
            <img
             
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
       */}
  

        </div>

    </div>
  )
}

export default Studies