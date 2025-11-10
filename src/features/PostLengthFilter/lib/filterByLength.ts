// src/features/PostLengthFilter/lib/filterByLength.ts
import type { Post } from "../../../widgets/PostList/PostList";

export function filterByLength(posts: Post[], minLength: number): Post[] {
  return posts.filter((post) => post.title.length >= minLength);
}
