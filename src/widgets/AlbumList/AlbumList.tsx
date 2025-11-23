import { type FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { MemoItemList } from "../../shared/ui/ItemList/ItemList";
import styles from "./AlbumList.module.css";
import type { IAlbum } from "../../entities/albums/model/types";

interface AlbumListProps {
  albums: IAlbum[];
  isLoading: boolean;
}

export const AlbumList: FC<AlbumListProps> = memo(({ albums, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  return (
    <MemoItemList
      items={albums}
      getKey={(album) => album.id}
      className={styles.list}
      renderItem={(album) => (
        <li
          className={styles.item}
          onClick={() => navigate(`/albums/${album.id}/photos`)}
        >
          {album.title}
        </li>
      )}
    />
  );
});
