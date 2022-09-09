import { Tweet } from "./Tweet";
import { mockTweet } from "../../utils/mockData"

export default {
  title: "Compositions/Tweet",
  component: Tweet,
};

export const Primary = () => <Tweet tweet={mockTweet}/>;
