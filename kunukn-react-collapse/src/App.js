import { useState } from 'react';
import Collapse from '@kunukn/react-collapse';
import './App.css';

function App() {

  const [isOpenA, setIsOpenA] = useState(true);
  const [isOpenB, setIsOpenB] = useState(true);
  const [collapseHeight, setCollapseHeight] = useState("40px");
  const [duration, setDuration] = useState("100ms");

  const [isOpenC, setIsOpenC] = useState(false);
  const transitionStyle = { transitionDuration: "1s" };
  const [collapseStyle, setCollapseStyle] = useState(transitionStyle);

  function collapseA() {
    setIsOpenA(!isOpenA);
  }

  function collapseB() {
    setIsOpenB(!isOpenB);
  }

  function collapseC() {
    setIsOpenC(!isOpenC);
  }

  return (
    <div className="App">
      <div className={'column1'}>
        <span>动画时长500毫秒/折叠后高度40px:</span> <button onClick={collapseA}>折叠/展开</button>
        <Collapse transition={`500ms`} collapseHeight={collapseHeight} isOpen={isOpenA}>
          <div className={'collapseA'}>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
          </div>
        </Collapse>
      </div>

      <div className={'column2'}>
        <span>折叠展开动画时长100毫秒:</span> <button onClick={collapseB}>折叠/展开</button>
        <Collapse transition={`height ${duration} cubic-bezier(.4, 0, .2, 1)`} isOpen={isOpenB}>
          <div className={'collapseB'}>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
          </div>
        </Collapse>
      </div>

      <div className={'column3'}>
        <span>折叠展开动画时长1秒:</span> <button onClick={collapseC}>折叠/展开</button>
        <Collapse style={collapseStyle} isOpen={isOpenC}>
          <div className={'collapseC'}>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
            <p>任何一种技艺达到完美 都会令人无法抗拒</p>
          </div>
        </Collapse>
      </div>
    </div >
  );
}

export default App;
