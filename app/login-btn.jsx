'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import UserInformation from './user-information';

export default function LoginBtn({ children }) {
  console.log('client');
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <UserInformation data={session.user} />
        <button onClick={() => signOut()}>Sign Out</button>
        {/* {children} */}
      </>
    );
  }

  return (
    <>
      No signed ,<br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
