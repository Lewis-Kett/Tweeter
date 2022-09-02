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