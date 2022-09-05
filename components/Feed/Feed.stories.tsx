import { mockTweet } from "../../utils/mockData";
import { Feed } from "./Feed";

export default {
  title: "Compositions/Feed",
  component: Feed,
};

export const Primary = () => <Feed tweets={[mockTweet]}/>;
