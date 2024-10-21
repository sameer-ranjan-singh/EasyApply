import NextAuth, {type DefaultSession} from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      userLoggedIn: boolean
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}

export const providers: Provider[] = [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),
  GoogleProvider({
    clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
  }),
  Credentials({
    async authorize(credentials) {
      return { ...credentials }
    },
  }),
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages:{
    signIn:"../../signup"
  },
  callbacks: {
    session({ session }) {
    // session({ session,token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          userLoggedIn: false
        },
      }
    },
  },
})