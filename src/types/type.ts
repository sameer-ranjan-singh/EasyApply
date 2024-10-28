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
    id?: string,
    userID?: string
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
}