import { Tweet } from "./Tweet";
import { mockTweet } from "../../utils/mockData"

export default {
  title: "Components/Tweet",
  component: Tweet,
};

export const Primary = () => <Tweet tweet={mockTweet}/>;
