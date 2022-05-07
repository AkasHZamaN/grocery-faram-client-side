import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='w-100' style={{backgroundColor:'#6A1B4D', fontFamily:'baloo2, cursive'}}>

            <div className='w-100 mx-auto d-flex justify-content-between align-items-center row row-cols-1 row-cols-lg-3 g-2 p-3 mt-5'>
                
                <div className='d-flex justify-content-center  align-items-center'>
                    <img style={{width:'200px'}} className='h-50' src="https://i.postimg.cc/tRcg8s9V/grocery-farm.png" alt="" />
                    <div style={{fontFamily:'baloo2, cursive'}}>
                    <h4 style={{fontFamily:'baloo2, cursive', fontWeight:'bolder', fontSize:'18px', color:'lightgray'}}>GROCERY FARM</h4>
                    <small style={{fontSize:'12px', fontWeight:'bold', fontStyle:'italic', color:'lightgray'}}>EST: 2022</small>
                    </div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center'>
                    <div style={{color:'lightgray'}}>
                    <h5 style={{paddingBottom:'20px'}}>Quick Link</h5>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/'}>Home</Link>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/about'}>About Me</Link>
                        <Link style={{color:'lightgray'}}  className='d-block text-decoration-none py-1 fw-bold' to={'/inventory'}>Inventory</Link>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/about'}>Ask Me</Link>
                    </div>
                    <div style={{color:'lightgray'}}>
                        <h5 style={{paddingBottom:'5px'}}>My Contacts</h5>
                        <p>Phone: +880172585XXXX</p>
                        <p>E-Mail: grocery@farm.com</p>
                        <p>Address: <span style={{fontFamily:'cursive'}}>350 Avenue, Sylhet,<br />3100-SYLHET</span></p>
                    </div>
                </div>
            </div>
            {/* bottom footer  */}
            <div className='w-100 mx-auto d-flex justify-content-between align-items-center text-white fw-bold row row-cols-2 row-cols-lg-3 g-3  p-3'>
                <div style={{color:'lightgray'}} className='px-2'>
                    <small>Copyright ©{year} || Developed By Akash Zaman</small>
                </div>
                <div style={{color:'lightgray'}} className='d-flex justify-content-between align-items-center px-3'>                    
                    <small>FAQs</small>
                    <small>Privacy</small>                    
                </div>
            </div>
        </section>
    );
};

export default Footer;