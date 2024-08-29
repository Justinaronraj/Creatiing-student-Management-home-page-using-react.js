import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
export default function Content() {
  return (
    <div>
        <div className='section'>
                <h1 className='title'>Students Dashboard</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 car1'>
                    <i><IoPersonSharp /></i>
                    <p>Regular Students</p>
                    </div>
                    <div className='col-3 car2'>
                    <i><IoPersonSharp /></i>
                    <p>Remedial Students</p>
                    </div>
                    <div className='col-3 car3'>
                    <i><IoPersonSharp /></i>
                    <p>In Paid Clubs</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
