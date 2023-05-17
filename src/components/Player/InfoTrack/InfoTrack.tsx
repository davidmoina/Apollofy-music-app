import styles from './infoTrack.module.scss';

type TrackInfo = {
	artist: string;
	name: string;
	thumbnail: string;
};

export const InfoTrack = ({ artist, name, thumbnail }: TrackInfo) => {
	return (
		<div className='flex items-center'>
			<div className={`mx-0.5 ${styles.imgPlayer}`}>
				<img src={thumbnail} alt={name} />
			</div>
			<div className={`flex flex-col md:w-64 pl-2 ${styles.textInfo}`}>
				<h2>{name}</h2>
				<h3>{artist}</h3>
			</div>
		</div>
	);
};
