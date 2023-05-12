import { MusicRow } from '../../components/musicRow/MusicRow';
import { Track } from '../../interfaces/songs';

interface Props {
	tracks: Track[];
}

export const SongListContainer = ({ tracks }: Props) => {
	return (
		<div className='flex flex-col p-4 gap-3'>
			{tracks.map(song => (
				<MusicRow
					thumbnail={song.thumbnail}
					artist={song.artists}
					title={song.name}
					actualSong={song}
					key={song._id}
				/>
			))}
		</div>
	);
};
