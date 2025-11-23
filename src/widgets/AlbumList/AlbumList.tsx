// src/widgets/AlbumList/AlbumList.tsx
import { type FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import type { IAlbum } from "../../entities/albums/model/IAlbums";
import styles from "./AlbumList.module.css";

interface AlbumListProps {
  albums: IAlbum[];
  isLoading: boolean;
}

export const AlbumList: FC<AlbumListProps> = memo(({ albums, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  const handleClick = (albumId: number) => {
    navigate(`/albums/${albumId}/photos`);
  };

  return (
    <ul className={styles.list}>
      {albums.map((album) => (
        <li
          key={album.id}
          className={styles.item}
          onClick={() => handleClick(album.id)}
        >
          {album.title}
        </li>
      ))}
    </ul>
  );
});
