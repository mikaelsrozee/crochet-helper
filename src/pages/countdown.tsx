import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import useVoiceCounter from '../helpers/useVoiceCounter';

interface MicrophoneIconProps {
  active: boolean;
}

const MicrophoneIcon = ({active}: MicrophoneIconProps) => (
  <div className="h-8 w-8 m-4 fixed">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={active ? 'green' : 'red'}
    >
      <path
        fillRule="evenodd"
        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
        clipRule="evenodd"
      />
    </svg>
    <span>{active ? 'On' : 'Off'}</span>
  </div>
);

const Countdown = () => {
  const router = useRouter();
  const to = router.query?.to;

  useEffect(() => {
    if (to === undefined && router.isReady) {
      router.push('/');
    }
  }, [to]);

  const {browserSupportsSpeechRecognition, currentCount, done, isListening} =
    useVoiceCounter({countTo: Number(to)});

  useEffect(() => {
    if (done && router.isReady) {
      router.push(`/?to=${to}`);
    }
  }, [done]);

  return (
    <>
      {browserSupportsSpeechRecognition ? (
        <>
          <MicrophoneIcon active={isListening} />
          <h1 className="text-8xl text-center font-extrabold m-auto">
            {currentCount === 0 ? 'Go!' : currentCount}
          </h1>
        </>
      ) : (
        <h1 className="text-2xl m-auto">
          Unfortunately, your browser does not support speech recognition.
        </h1>
      )}
    </>
  );
};

export default Countdown;
