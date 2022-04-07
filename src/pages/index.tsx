import {useState} from 'react';
import Link from 'next/link';
import {cn} from '../helpers/style';
import {useRouter} from 'next/router';

const InputValue = () => {
  const {query} = useRouter();
  const to = Number(query.to);
  const [count, setCount] = useState(isNaN(to) ? 0 : to);
  const linkDisabled = count <= 0;
  return (
    <div className="flex flex-col m-auto gap-4">
      <h1 className="text-2xl">What do you want to count to?</h1>
      <nav className="flex flex-col m-auto gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="w-16 h-16 text-2xl bg-white border-black rounded-lg m-auto"
        >
          +
        </button>
        <h2 className="text-3xl font-extrabold">{count}</h2>
        <button
          onClick={() => setCount(count - 1)}
          className="w-16 h-16 text-2xl bg-white border-black rounded-lg m-auto"
        >
          -
        </button>
      </nav>
      <Link href={`/countdown?to=${count}`}>
        <a>
          <button
            disabled={linkDisabled}
            className={cn(
              linkDisabled ? 'bg-gray-400' : 'bg-green-400',
              'px-8 py-4 rounded-lg'
            )}
          >
            Go
          </button>
        </a>
      </Link>
    </div>
  );
};

export default InputValue;
