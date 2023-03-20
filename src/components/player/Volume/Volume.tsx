import { ChangeEvent } from "react";
import { TbVolume } from "react-icons/tb";

type Props = {
   volume: number,
   onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Volume= ({ volume, onChange }:Props) => {
   return (
      <div className="flex">
         <TbVolume size={25} color={'white'}/>
         <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={ volume } 
            onChange={ onChange }
            className="ml-2"
         />
      </div>
   )
}
