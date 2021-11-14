import { useState } from "react";
import { doHello } from './event';

function HelloTwo() {
    const [message, setMessage] = useState("");

    function hello() {
        // 触发组件间通讯的事件，传递参数。
        doHello("world");

        setMessage("I said hello.");
    }

    return (
        <div>
            <button onClick={hello}>say hello</button>
            <br />
            {message}
        </div>
    );
}

export default HelloTwo;