// src/pages/AlbumPhotosPage/AlbumPhotosPage.tsx
import { type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./AlbumPhotosPage.module.css";
import { albumPhotosApi } from "../../entities/albums/api/albumPhotosApi";

export const AlbumPhotosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = id ? Number(id) : undefined;
  const navigate = useNavigate();

  const { data: photos = [], isLoading } =
    albumPhotosApi.useFetchAlbumPhotosQuery(albumId ?? 0, {
      skip: !albumId,
    });

  if (isLoading) return <div>Loading...</div>;
  if (!photos.length) return <div>No photos found</div>;

  return (
    <div className={styles.wrapper}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>Album #{albumId} Photos</h1>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
