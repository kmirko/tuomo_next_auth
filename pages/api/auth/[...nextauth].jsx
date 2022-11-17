import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const user = { email: 'example@gmail.com', password: '123' };

        return user;
      },
    }),
  ],
});
