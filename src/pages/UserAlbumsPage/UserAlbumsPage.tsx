// src/widgets/AlbumList/AlbumListContainer.tsx
import { type FC } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";
import { albumsApi } from "../../entities/albums/api/albumsApi";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { AlbumList } from "../../widgets/AlbumList/AlbumList";

const AlbumListContent: FC<{ albums: any[]; isLoading: boolean }> = ({
  albums,
  isLoading,
}) => {
  return <AlbumList albums={albums} isLoading={isLoading} />;
};

const EnhancedAlbumList = withLoading(AlbumListContent);

export const UserAlbumsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userIdNum = id ? Number(id) : undefined;
  const { data: albums = [], isLoading } = albumsApi.useFetchUserAlbumsQuery(
    userIdNum ?? skipToken
  );

  return <EnhancedAlbumList isLoading={isLoading} albums={albums} />;
};
