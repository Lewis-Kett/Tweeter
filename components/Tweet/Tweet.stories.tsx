import { Tweet } from "./Tweet";
import { exampleTweet } from "../../utils/mockData/mockTweet"

export default {
  title: "Components/Tweet",
  component: Tweet,
};

export const Primary = () => <Tweet tweet={exampleTweet}/>;
