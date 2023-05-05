type TrackInfo = {
	artist: string;
	name: string;
	thumbnail: string;
};

export const MobileSongLayout = ({ artist, name, thumbnail }: TrackInfo) => {
	return (
		<div className='between'>
			<div className={` `}>
				<img src={thumbnail} alt={name} />
			</div>
			<div className={``}>
				<h2>{name}</h2>
				<h3>{artist}</h3>
			</div>
		</div>
	);
};
