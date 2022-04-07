import {PropsWithChildren} from 'react';

const Layout = ({children}: PropsWithChildren<{}>) => (
  <main className="flex text-center bg-pink-300 min-h-screen">{children}</main>
);

export default Layout;
