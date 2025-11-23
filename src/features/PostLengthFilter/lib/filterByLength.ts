import type { IPost } from "../../../entities/post/model/types";

export function filterByLength(posts: IPost[], minLength: number): IPost[] {
  return posts.filter((post) => post.title.length >= minLength);
}
