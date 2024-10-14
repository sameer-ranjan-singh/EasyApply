import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      }
    },
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),
  GoogleProvider({
    clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
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
    signIn:"/src/app/signup"
  }
})

/*
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers:  [
  GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
    })
]})
*/