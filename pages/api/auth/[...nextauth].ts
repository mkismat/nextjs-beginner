import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
console.log("I am here");
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: "fc403a63b7917e822f05",
      clientSecret: "0f4e00aa04aa661fa3c44a9d34ada6fad29c59e0",
    }),
  ],
  // database: process.env.DB_URL,
  // session: {
  //   jwt: true
  // },
  jwt: {
    secret: "asdcvbtjhm",
  },
  callbacks: {
    async jwt(params) {
      let { token, user } = params;
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(params) {
      let { session, token } = params;
      if (session.user) {
        //@ts-ignore
        session.user.id = token.id;
      }
      return session;
    },
  },
});
