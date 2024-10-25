"use client"
import Image from 'next/image'
import React from 'react'

import portfolio from "../public/social-icons/portfolio.png"
import portfolioAfterCopy from "../public/social-icons/portfolioAfterCopy.png"

import twitter from "../public/social-icons/twitter.png"
import twitterAfterCopy from "../public/social-icons/twitterAfterCopy.png"

import discord from "../public/social-icons/discord.png"
import discordAfterCopy from "../public/social-icons/discordAfterCopy.png"

import github from "../public/social-icons/github.png"
import githubAfterCopy from "../public/social-icons/githubAfterCopy.png"

import linkedin from "../public/social-icons/linkedin.png"
import linkedinAfterCopy from "../public/social-icons/linkedinAfterCopy.png"

import reddit from "../public/social-icons/reddit.png"
import redditAfterCopy from "../public/social-icons/redditAfterCopy.png"

import leetcode from "../public/social-icons/leetcode.png"
import leetcodeAfterCopy from "../public/social-icons/portfolio.png"

const SocialIcon = ({linkKey}: {linkKey: string}) => {

  const SocialIconMap = {
    portfolio : {
      default : portfolioAfterCopy,
      beforeCopy : portfolio,
      afterCopy : portfolioAfterCopy
    },
    linkedin : {
      default : linkedinAfterCopy,
      beforeCopy : linkedin,
      afterCopy : linkedinAfterCopy
    },
    twitter : {
      default : twitterAfterCopy,
      beforeCopy : twitter,
      afterCopy : twitterAfterCopy
    },
    github : {
      default : githubAfterCopy,
      beforeCopy : github,
      afterCopy : githubAfterCopy
    },
    discord : {
      default : discordAfterCopy,
      beforeCopy : discord,
      afterCopy : discordAfterCopy
    },
    reddit : {
      default : redditAfterCopy,
      beforeCopy : reddit,
      afterCopy : redditAfterCopy
    },
    leetcode: {
      default : leetcode,
      beforeCopy : leetcode,
      afterCopy : leetcodeAfterCopy
    },

}

  return (
    <div className="px-2 h-8 w-fit uppercase font-bold flex justify-center items-center rounded-lg text-xs">
        <Image
         src={ SocialIconMap[linkKey as keyof typeof SocialIconMap].default}
         width={25}
         height={25}
         alt={"#"}
        />
    </div>
  )
}

export default SocialIcon