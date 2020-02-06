import React from "react";
import { Checkbox } from '@thumbtack/thumbprint-react';

function IsStylist() {
    const [isChecked, setIsChecked] = React.useState(undefined);
    return (

        <Checkbox isChecked={isChecked} onChange={setIsChecked}>
           I am a Stylist
        </Checkbox>
    );
};

export default IsStylist;