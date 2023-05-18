import { useNavigate } from 'react-router-dom';

interface Props {
	img: string;
	name: string;
	user: string;
	songs: number;
	type: string;
	path: string;
}

export const PlaylistAlbumRow = ({
	img,
	name,
	songs,
	user,
	type,
	path,
}: Props) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(path)}
			className='flex gap-3 items-center px-2 py-2 mx-2 mb-2 bg-neutral-800 rounded-md'
		>
			<img className='w-14 rounded-md' src={img} alt={name} />
			<div>
				<p className='text-base font-bold text-gray-100 mb-1'>{name}</p>
				<p className='text-xs text-gray-400 tracking-wider'>
					{type} | {user} | {songs} songs
				</p>
			</div>
		</div>
	);
};
