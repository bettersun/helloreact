import { useState, useEffect } from "react";
import { addListenerHello } from './event';

function HelloOne() {

    const [message, setMessage] = useState("Hello");

    useEffect(
        () => {
            // 注册事件监听，把事件触发时要调用的处理函数传递过去。
            // 运行一次即可
            addListenerHello(helloHandler);
        }, []
    )

    // 组件间通讯事件触发时的处理。
    function helloHandler(args) {
        setMessage("Hello, " + args + "!")
    }

    return (
        <div>
            {message}
        </div>
    );
}

export default HelloOne;