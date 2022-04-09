import {createSpeechlySpeechRecognition} from '@speechly/speech-recognition-polyfill';
import {useEffect, useState} from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import wordsToNumbers from 'words-to-numbers';

const appId = '23bd67e4-b376-484f-b92c-a0b5dbfeb294';

interface VoiceCounterOptions {
  countTo: number;
}

const useVoiceCounter = ({countTo}: VoiceCounterOptions) => {
  // Initialise values
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const [currentCount, setCurrentCount] = useState(0);
  const [next, setNext] = useState(1);

  // Start listening immediately
  useEffect(() => {
    const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
    SpeechRecognition.startListening({continuous: true});
  }, []);

  const nextWords = ['next', 'count'];
  const backWords = ['back'];

  useEffect(() => {
    if (nextWords.includes(transcript.toLowerCase())) {
      // Allow to go forward 1
      setCurrentCount(currentCount + 1);
      setNext(next + 1);
    } else if (backWords.includes(transcript.toLowerCase())) {
      // Allow to go back 1
      setCurrentCount(currentCount - 1);
      setNext(next - 1);
    } else {
      // Listen for N, and once heard, start listening for N + 1...

      const fromTranscript = wordsToNumbers(transcript);

      if (typeof fromTranscript === 'number' && fromTranscript === next) {
        setCurrentCount(fromTranscript);
        setNext(next + 1);
      }
    }

    resetTranscript();
  }, [transcript]);

  // Helper values
  const isListening = listening && isMicrophoneAvailable;
  const done = currentCount >= countTo;

  return {currentCount, browserSupportsSpeechRecognition, isListening, done};
};
export default useVoiceCounter;
