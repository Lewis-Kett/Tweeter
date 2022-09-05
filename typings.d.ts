export interface TweetType extends TweetBody {
   _id: string
   createdAt: string
   updatedAt: string
   __v: number
   blockTweet: boolean
}

export type TweetBody = {
    text: string
    username: string
    profileImage: string
    image?: string
}

export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImage: string
}

export interface CommentType extends CommentBody {
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
}