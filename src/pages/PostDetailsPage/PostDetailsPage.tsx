// src/pages/PostDetailsPage/PostDetailsPage.tsx
import { type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/providers/store/hooks/redux";
import { postsSelectors } from "../../entities/post/model/slice/postSlice";
import { postApi } from "../../entities/post/api/postApi";
import type { IPost } from "../../entities/post/model/types";
import styles from "./PostDetailsPage.module.css"; // новый файл CSS

export const PostDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const navigate = useNavigate();

  let post: IPost | undefined = useAppSelector((state) =>
    postsSelectors.selectById(state, postId)
  );

  const { data: fetchedPosts = [] } = postApi.useFetchAllPostsQuery(undefined, {
    skip: !!post,
  });

  if (!post && fetchedPosts.length) {
    post = fetchedPosts.find((p) => p.id === postId);
  }

  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.wrapper}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <article className={styles.card}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.body}</p>
      </article>
    </div>
  );
};
