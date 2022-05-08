import React from 'react';

const Fruits = () => {
    return (
        <div style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
            <h4 style={{fontFamily:'baloo2,cursive',fontWeight:'bold', textAlign:'center',marginTop:'25px'}}>ORGANIC FRUITS HOUSE...</h4>
            
            <div style={{fontFamily:'baloo2, cursive',color:'gray'}} className='w-100 d-flex mx-auto text-center justify-content-center align-items-center row row-cols-1 row-cols-lg-2 p-5'>
            <div className='d-flex text-center  text-start row row-cols-1 row-cols-lg-3'>
                    <div>
                      <h6 style={{color:'#6A1B4D',fontWeight:'bold'}}>TROPICAL FRUITS</h6>
                      <p>Coconuts</p>
                      <p>Dragonfruits</p>
                      <p>Pomegranate</p>
                      <p>PassionFruits</p>
                  </div>
                  <div>
                      <h6 style={{color:'#6A1B4D',fontWeight:'bold'}}>CITRUS FRUITS</h6>
                      <p>Fresh Oranges</p>
                      <p>Organci Limes</p>
                      <p>Grape fruits</p>   
                      <p>Yellow Lemons</p>
                  </div>
                  <div>
                      <h6 style={{color:'#6A1B4D',fontWeight:'bold'}}>STONE FRUITS</h6>
                      <p>Sweet Apricots</p>
                      <p>Nectarines</p>
                      <p>Doughnut peachs</p>
                      <p>Italian Fruits</p>
                  </div>
            </div>
            <div>
                <img style={{width:'350px'}} src="https://i.postimg.cc/1RHQf3hB/delevery-BOY.png" alt="" />
            </div>
            </div>
                
        

            
            
        </div>
    );
};

export default Fruits;