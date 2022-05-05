import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='w-100 bg-success'>

            <article className='w-100 mx-auto d-flex justify-content-between align-items-center row row-cols-1 row-cols-lg-3 g-2 p-3 mt-5'>
                
                <article className='d-flex justify-content-center  align-items-center'>
                    <img style={{width:'200px'}} className='h-50' src="https://i.postimg.cc/tRcg8s9V/grocery-farm.png" alt="" />
                    <article>
                    <h1 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bolder', fontSize:'30px', color:'white'}}>GROCERY FARM</h1>
                    <small style={{fontSize:'12px', fontWeight:'bold', fontStyle:'italic', color:'white'}}>EST: 2022</small>
                    </article>
                </article>
                
                <article className='d-flex justify-content-between align-items-center'>
                    <article className='text-white'>
                    <h2 style={{paddingBottom:'20px'}}>Quick Link</h2>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/'}>Home</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/about'}>About Me</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/inventory'}>Inventory</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/about'}>Ask Me</Link>
                    </article>
                    <article className='text-white'>
                        <h2 style={{paddingBottom:'5px'}}>My Contacts</h2>
                        <p>Phone: +880172585XXXX</p>
                        <p>E-Mail: grocery@farm.com</p>
                        <p>Address: <span style={{fontFamily:'cursive'}}>350 Avenue, Sylhet,<br />3100-SYLHET</span></p>
                    </article>
                </article>
            </article>
            {/* bottom footer  */}
            <article className='w-100 mx-auto d-flex justify-content-between align-items-center text-white fw-bold row row-cols-2 row-cols-lg-3 g-3  p-3'>
                <article className='px-2'>
                    <small>Copyright ©{year} || Developed By Akash Zaman</small>
                </article>
                <article className='d-flex justify-content-between align-items-center text-warning px-3'>                    
                    <small>FAQs</small>
                    <small>Privacy</small>                    
                </article>
            </article>
        </section>
    );
};

export default Footer;