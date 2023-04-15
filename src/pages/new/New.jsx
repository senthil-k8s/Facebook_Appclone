import {useState} from 'react'
import "./new.scss"
import Sidebar from "./../../components/sidebar/Sidebar"
import Navbar from "./../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New({inputs, title}) {
  const[file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"><h1>{title}</h1></div>
        <div className="bottom">
          <div className="left">
            <img 
              src={ file ? URL.createObjectURL(file) : "https://play-lh.googleusercontent.com/GkhngtFrSb3G9WXkWxJ9IRppbGVbNy7b_xyqa12Xa-Y3My_SXtsLamI5kR6or5zWGA=w600-h300-pc0xffffff-pd"}
              alt="" className="image"
              
            />
          </div>
          <div className="right">
            <form >

              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadIcon className='icon' />
                </label>
                <input type="file" id="file" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}/>
              </div>

              {inputs.map( (input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              
              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
