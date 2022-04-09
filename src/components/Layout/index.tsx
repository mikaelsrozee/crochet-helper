import {PropsWithChildren, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {backgroundColor} from '../../helpers/context';
import {BACKGROUND_COLORS} from '../../helpers/style';

const Layout = ({children}: PropsWithChildren<{}>) => {
  const [bgColor, setBgColor] = useRecoilState(backgroundColor);
  const {length} = BACKGROUND_COLORS;
  const bg = BACKGROUND_COLORS[((bgColor % length) + length) % length];

  useEffect(() => {
    if (bgColor > 100) {
      setBgColor(0);
    }
  }, [bgColor]);

  return (
    <main className={`flex text-center ${bg} min-h-screen`}>{children}</main>
  );
};

export default Layout;
