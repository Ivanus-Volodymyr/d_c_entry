import React from 'react';
import { toast } from 'react-toastify';

import img from '../../../../assets/icons/dimensions.png';
import { Input } from '../../../UI';

interface Props {
  value: string;
}

const Code = ({ value }: Props) => {
  const copyToClipboard = () => {
    if (!value) {
      toast.error('Code is empty');
      return;
    }

    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast('Code copied to clipboard!');
      })
      .catch(err => {
        toast.error('Failed to copy code: ', err);
      });
  };

  return (
    <div className="flex flex-col w-full p-1 mt-1">
      <div className="flex justify-center items-center w-full gap-3">
        <Input
          value={value}
          disabled={true}
          type="text"
          className="p-2 g-aliceblue border-2 border-teal-500 rounded-md w-full"
          placeholder="Code.."
        />
        <img src={img} alt="copy" className="cursor-pointer w-6 h-6" onClick={copyToClipboard} />
      </div>
    </div>
  );
};

export default Code;
