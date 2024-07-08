import React from 'react';
import Grid from '@mui/material/Grid';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const isDelivered = true; // Example flag, replace with actual logic
  const navigate=useNavigate();
  return (
    
    <Grid onClick={()=>navigate('/account/order/${5}')}container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item xs={12}>
        <div className='flex justify-between cursor-pointer border p-5 shadow-md shadow-black hover:shadow-2xl transition-shadow duration-300'>
          <div className='flex'>
            <img
              className='w-[5rem] h-[5rem] object-cover object-top'
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/0/u/l-grr-try-this-original-imahf82hhpghag6h.jpeg?q=70"
              alt="Product"
            />
            <div className='ml-5 space-y-2'>
              <p className='font-semibold'>Lane Men Slim Mid Rise Black Jeans</p>
              <p className='text-gray-500 text-xs font-semibold'>Size: M</p>
              <p className='text-gray-500 text-xs font-semibold'>Color: Black</p>
            </div>
          </div>
          <div className='flex items-center'>
            <p className='font-semibold'>₹1099</p>
          </div>
          <div className='flex items-center'>
            {isDelivered ? (
              <p className='flex items-center'>
                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2' />
                <span className='text-sm font-semibold'>Delivered On March 03</span>
              </p>
            ) : (
              <p className='text-sm font-semibold'>
                <span>Expected Delivery On Mar 03</span>
              </p>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default OrderCard;