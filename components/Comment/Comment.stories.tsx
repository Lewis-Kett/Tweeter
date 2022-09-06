import { Comment } from "./Comment";
import { mockComment } from "../../utils/mockData";

export default {
  title: "Components/Comment",
  component: Comment,
};

export const Primary = () => <Comment comment={mockComment} />;
