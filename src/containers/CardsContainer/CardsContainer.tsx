import { CardPlaylist } from '../../components/Cards/CardPlaylist';
import { Playlist } from '../../interfaces/playlist';
import { Track, Album } from '../../interfaces/songs';
import styles from './cardsContainer.module.scss';

interface PlaylistRecommendationsContainerProps {
	title: string;
	playlists: Playlist<string>[] | Track[] | Album[] | undefined | null;
	isPlayable?: boolean;
}

export const CardsContainer = ({
	title,
	playlists,
	isPlayable = false,
}: PlaylistRecommendationsContainerProps) => {
	return (
		<section className={`mb-8 ${styles.cardsContainer}`}>
			<h2 className={`text-xl md:text-2xl mb-6 ${styles.containerTitle}`}>
				{title}
			</h2>
			<div className={`flex overflow-x-auto gap-6 ${styles.containerCard}`}>
				{playlists?.map((playlist, index) => (
					<CardPlaylist
						key={index}
						name={playlist?.name}
						thumbnail={playlist?.thumbnail}
						isPlayable={isPlayable}
						id={playlist._id}
					/>
				))}
			</div>
		</section>
	);
};
