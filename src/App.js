// import logo from './logo.svg';
import { useSpring, animated } from 'react-spring'
import './App.css';
import { useState } from 'react';
// import MyLineChart from './components/LineChart/LineChart';
// import PhoneChart from './components/PhoneChart/PhoneChart';

function App() {


  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)

  })
  return (
    <div className="App">
      {/* <MyLineChart></MyLineChart> */}
      {/* <PhoneChart></PhoneChart> */}
      <animated.div style={props}>I will fade in</animated.div>


    </div>
  );
}

export default App;
