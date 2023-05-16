// import { NavLink } from 'react-router-dom';
// import { Album } from '../../../interfaces/songs';
import { AlbumCard, CardAlbum } from '../../../components/Cards/CardAlbum';
import styles from '../cardsContainer.module.scss';

interface AlbumContainerProps {
	title: string;
	albums: AlbumCard[] | null;
	isPlayable: boolean;
}

export const CardAlbumsContainer = ({ title, albums }: AlbumContainerProps) => {
	return (
		<section className={`flex flex-col mb-8 ${styles.cardsContainer}`}>
			<div className='flex justify-between'>
				<h2 className={`text-xl md:text-2xl mb-2 ${styles.containerTitle}`}>
					{title}
				</h2>
				{/* <NavLink to='/albums'>View All</NavLink> */}
			</div>
			<div
				className={`flex jutify-center items-center overflow-x-auto lg:flex-wrap gap-6 ${styles.containerCard}`}
			>
				{albums?.map((album, index) => (
					<CardAlbum key={index} albums={album} />
				))}
			</div>
		</section>
	);
};
