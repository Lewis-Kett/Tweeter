import { exampleTweet } from "../../utils/mockData/mockTweet";
import { Feed } from "./Feed";

export default {
  title: "Compositions/Feed",
  component: Feed,
};

export const Primary = () => <Feed tweets={[exampleTweet]}/>;
