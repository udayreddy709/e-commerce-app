import { useState } from "react"
import "../Styles/MerchantSignup.css"

const MerchantSignUp = () => {
let [name, setName] = useState("")
let [email, setEmail] = useState("")
let [gst_number, setGst_number] = useState("")
let [password, setPassword] = useState("")
let [phone, setPhone] = useState("")


  return (
    <div className="merchantsignup">
       {/* <h3>MerchantSignup</h3> */}
       <form action="">
      <label htmlFor="">Name</label>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the Name" required/>
      <label htmlFor="">Email</label>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter the Email" required/>
      <label htmlFor="">GST_Number</label>
      <input value={gst_number} onChange={(e)=>{setGst_number(e.target.value)}} type="text" placeholder="Enter the Gst Number" required/>
      <label htmlFor="">Phone</label>
      <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="[0-9]{10}" placeholder="Enter the Phone No" required/>
      <label htmlFor="">Password</label>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter the Password" required/>
      <button className="btn btn-outline-info">Submit</button>
    </form>
    </div>
   
  
  )
}

export default MerchantSignUp