import { type } from "os"

export type Inputs = {
    Github?: string
    Twitter? : string
    Portfolio? : string
    LinkedIn? : string
    Discord? : string
    Reddit? : string
    Leetcode? : string
}

export interface  userInterface {
    id? : string
    name: string | undefined
    email: string | undefined
    password: string | undefined
}


export interface linkInterface {
    id?: Number
    userID?: Number
    portfolio?: string,
    twitter?: string,
    github?:  string ,
    linkedin?: string,
    leetcode?: string
    discord?: string,
    reddit?: string
}

export interface themeInterface {
    themeNow : string
    // options: themeOptionsInterface
}
 export interface themeOptionsInterface {
        light:string
        dark?:string
        light1?:string
        dark1?:string
        dark2?:string
        dark3?:string
}