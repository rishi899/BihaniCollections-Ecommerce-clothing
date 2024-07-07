import { ButtonBase, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from "@mui/material/Button";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
        <div className="flex items-center">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
        <img
          className="w-full h-full object-cover object-top"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>

      <div className="ml-5 space-y-1">
        <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
        <p className="opacity-70">Size: L, White</p>
        <p className="opacity-70">Seller: Crishtaliyo 2fashion</p>

        <div className="flex space-x-5 items-center text-lg  text-gray-900 pt-6">
          <p className="font-semibold">199</p>
          <p className="opacity-50 line-through ml-2">211</p>
          <p className="text-green-600 font-semibold">5% Off</p>
        </div>


      </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
            <IconButton sx={{color:"RGB(145 85 253)"}}>
                 <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>3</span>
            <IconButton sx={{color:"RGB(145 85 253)"}}>
                 <AddCircleOutlineIcon/>
            </IconButton>
            
        </div>
        <div>
            <Button sx={{color:"red"}}>
                Remove
            </Button>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
