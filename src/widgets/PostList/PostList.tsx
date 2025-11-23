// src/widgets/PostList/PostList.tsx
import type { FC } from "react";
import { useState, useMemo, memo } from "react";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";
import { PostCard } from "../../entities/post/ui/PostCard";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter/PostLengthFilter";
import { useAppSelector } from "../../app/providers/store/hooks/redux";
import { postsSelectors } from "../../entities/post/model/slice/postSlice";
import { postApi } from "../../entities/post/api/postApi";
import type { IPost } from "../../entities/post/model/types";
import { MemoItemList } from "../../shared/ui/ItemList/ItemList";

interface PostListProps {
  userId?: number | string;
  postsFromOutside?: IPost[];
  isLoadingFromOutside?: boolean;
}

type PostListContentProps = {
  posts: IPost[];
  isLoading: boolean;
};

const PostListContent: FC<PostListContentProps> = memo(
  ({ posts, isLoading }) => {
    if (isLoading) return <div>Loading...</div>;

    return (
      <MemoItemList<IPost>
        items={posts}
        getKey={(post) => post.id}
        className={styles.list}
        renderItem={(post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
            comments={[]}
          />
        )}
      />
    );
  }
);

const EnhancedPostList = withLoading(PostListContent);

export const PostList: FC<PostListProps> = ({
  userId,
  postsFromOutside,
  isLoadingFromOutside,
}) => {
  const [minLength, setMinLength] = useState(25);

  // 1️⃣ Получаем данные через RTK Query
  const { data: fetchedPosts = [], isLoading: loadingFromApi } = userId
    ? postApi.useFetchPostByUserQuery(userId)
    : postApi.useFetchAllPostsQuery();

  // 2️⃣ Берем данные из глобального стейта через entityAdapter
  const postsFromStore = useAppSelector(postsSelectors.selectAll);

  // 3️⃣ Выбираем, какие данные использовать: приоритет у внешних props > store > API
  const postsToShow = postsFromOutside?.length
    ? postsFromOutside
    : postsFromStore?.length
    ? postsFromStore
    : fetchedPosts;

  const isLoading = isLoadingFromOutside ?? loadingFromApi;

  // 4️⃣ Фильтруем по длине
  const filteredPosts = useMemo(
    () => filterByLength(postsToShow, minLength),
    [postsToShow, minLength]
  );

  return (
    <>
      <PostLengthFilter minLength={minLength} setMinLength={setMinLength} />
      <EnhancedPostList isLoading={isLoading} posts={filteredPosts} />
    </>
  );
};
