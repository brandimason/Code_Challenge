import React from 'react'
import Modal from './Modal'
import { useState } from 'react';

function SkiResortTile({ name, region, country, weather}) {

    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
 
    return (
        <div>
            <div className="flex justify-center items-center h-48 w-64 bg-blue-500 my-8" onClick={handleOpen}>
                <div className="text-center font-bold text-xl">
                    {name}
                    <br></br>
                    {region}, {country}
                </div>
            </div>
        
            <Modal isOpen={open} onClose={handleClose} weather={weather}/>
        </div>
    );
}

export default SkiResortTile