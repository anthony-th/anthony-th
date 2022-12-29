import React from 'react';
import './styles/main.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import BackGround from './assets/video/bg.mp4'

function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center min-w-[360px]'>
      <div className="bg-neutral-900/50 absolute w-full h-full z-10 min-w-[360px]"></div>
      <video className='w-screen h-screen object-cover absolute min-w-[360px]' autoPlay loop muted src={BackGround}></video>
      <div className="z-20 relative flex flex-col justify-center text-center gap-4">
        <h1 className="text-white text-3xl font-yesteryear">Coming soon</h1>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
          labelStyle={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Yesteryear'}}
          digitBlockStyle={{ width: 35, height: 55, fontSize: 30 }}
          dividerStyle={{ color: 'transparent', height: 0 }}
          separatorStyle={{ color: 'white', size: '6px' }}
          duration={0.5}
        >
          Finished
        </FlipClockCountdown>
      </div>
    </div>
  );
};

export default App;
