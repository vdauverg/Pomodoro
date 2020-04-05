import React from "react";

import THEME from "./Theme";
import Timer from "./Timer";
import Button from "./Button";

function App() {
    return (
        <THEME>
            <Timer />
            <Button />
        </THEME>
    )
}

export { App };