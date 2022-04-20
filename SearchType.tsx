import React, { FC } from "react";
import { wikipedia } from "./api";
import { CustomInput } from "./custom-input";
import { Suggests } from './Suggests';
import { Warning } from './Warning';

export const SearchType: FC = () => {

  const [text, updateText] = React.useState('');

  return(
       <div className="search">
         <CustomInput text={text} onChange={updateText} />
         <Suggests text={text} fetchFunc={wikipedia} />
         <Warning />
      </div>
  )
};