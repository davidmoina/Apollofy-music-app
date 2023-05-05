import { useFetch } from "../../api/useFetch";
import { SongListContainer } from "../../containers/songListContainer/SongListContainer";
import PlaylistHeader from "../../components/playlistHeader/PlaylistHeader";

const samplePlaylists = {
  id: 1,
  name: "All the tracks",
  isFollowed: true,
  thumbnail:
    "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg",
  description:
    "Get your mic on with this beats. You are going to sing all the way down",
  publicAccessible: true,
  primaryColor: "#fbdc00",
};

export const TracksView = () => {
  const { VITE_APP_SERVICE_URL } = import.meta.env;
  const { data } = useFetch(`${VITE_APP_SERVICE_URL}/track`);

  return (
    <div>
      <PlaylistHeader {...samplePlaylists} />
      <SongListContainer tracks={data} />
    </div>
  );
};
