import React from 'react';
import Prev from "./prev/Prev"
import PrevBase from "./prevbase/PrevBase"
import FileUploader from './prevbase/FileUploader';

function Previouses() {
    return (
        <>
            <Prev />
            <PrevBase />
            <FileUploader />
        </>
    );
  }

export default Previouses;