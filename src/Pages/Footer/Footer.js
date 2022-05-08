import { ChartPieIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, LocationMarkerIcon, MailIcon, PhoneIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='w-100' style={{backgroundColor:'#6A1B4D', fontFamily:'baloo2, cursive'}}>

            <div className='w-100 mx-auto d-flex justify-content-between align-items-center row row-cols-1 row-cols-lg-3 g-2 p-3 mt-5'>
                
                <div className='d-flex justify-content-center  align-items-center'>
                    <img style={{width:'200px'}} className='h-50' src="https://i.postimg.cc/TPy4F034/grocery-farm-LOGO-1.png" alt="" />
                    <div style={{fontFamily:'baloo2, cursive'}}>
                    <h4 style={{fontFamily:'baloo2, cursive', fontWeight:'bolder', fontSize:'18px', color:'lightgray'}}>GROCERY FARM</h4>
                    <small style={{fontSize:'12px', fontWeight:'bold', fontStyle:'italic', color:'lightgray'}}>EST: 2022</small>
                    </div>
                </div>
                
                <div className='d-flex justify-content-between align-items-center'>
                    <div style={{color:'lightgray'}}>
                    <h5 style={{paddingBottom:'20px'}}>Quick Link</h5>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/'}><HomeIcon style={{height:'20px'}}></HomeIcon> Home</Link>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/about'}><IdentificationIcon style={{height:'20px'}}></IdentificationIcon> About Me</Link>
                        <Link style={{color:'lightgray'}}  className='d-block text-decoration-none py-1 fw-bold' to={'/inventory'}><ChartPieIcon style={{height:'20px'}}></ChartPieIcon> Inventory</Link>
                        <Link style={{color:'lightgray'}} className='d-block text-decoration-none py-1 fw-bold' to={'/about'}><QuestionMarkCircleIcon style={{height:'20px'}}></QuestionMarkCircleIcon> Ask Me</Link>
                    </div>
                    <div style={{color:'lightgray'}}>
                        <h5 style={{paddingBottom:'5px'}}>My Contacts</h5>
                        <p><PhoneIcon style={{height:'20px'}}></PhoneIcon> +880172585XXXX</p>
                        <p><MailIcon style={{height:'20px'}}></MailIcon> grocery@farm.com</p>
                        <p><LocationMarkerIcon style={{height:'20px'}}></LocationMarkerIcon> <span style={{fontFamily:'cursive'}}>350 Avenue, Sylhet,<br />3100-SYLHET</span></p>
                    </div>
                </div>
            </div>
            {/* bottom footer  */}
            <div className='w-100 mx-auto d-flex justify-content-between align-items-center text-white fw-bold row row-cols-2 row-cols-lg-3 g-3  p-3'>
                <div style={{color:'lightgray'}} className='px-2'>
                    <small>Copyright ©{year} || Developed By Akash Zaman</small>
                </div>
                <div style={{color:'lightgray'}} className='d-flex justify-content-between align-items-center px-3'>                    
                    <small><InformationCircleIcon style={{height:'20px'}}></InformationCircleIcon> FAQs</small>
                    <small><ShieldCheckIcon style={{height:'20px'}}></ShieldCheckIcon> Privacy</small>                    
                </div>
            </div>
        </section>
    );
};

export default Footer;