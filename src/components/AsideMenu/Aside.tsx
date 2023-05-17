import styles from './aside.module.scss';
import {
	AiOutlineHome,
	AiOutlineSearch,
	AiFillHeart,
	AiOutlineHeatMap,
} from 'react-icons/ai';
import {
	MdOutlineLibraryMusic,
	MdAlbum,
	MdOutlineAudiotrack,
	// MdFeaturedPlayList,
} from 'react-icons//md';
import { IoMdAdd } from 'react-icons/io';
import { VscLibrary } from 'react-icons/vsc';
import { TbMicrophone2 } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { AddPlaylistModal } from '../AddPlayListModal/AddPlaylistModal';
import { useFetch } from '../../api/useFetch';
import { Playlist } from '../../interfaces/playlist';

const Aside = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const location = useLocation();

	const user = JSON.parse(localStorage.getItem('User')!);

	const { data } = useFetch<Playlist<string>[]>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/all/${user.id}`
	);

	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<ul>
					<li>
						<Link
							className={`${location.pathname == '/' && styles.activeLink}`}
							to='/'
						>
							<span>
								<AiOutlineHome />
							</span>{' '}
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/search' && styles.activeLink
							}`}
							to='/search'
						>
							<span>
								<AiOutlineSearch />
							</span>{' '}
							Search
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/library' && styles.activeLink
							}`}
							to='/library'
						>
							<span>
								<VscLibrary />
							</span>{' '}
							Library
						</Link>
					</li>
					<li>
						<Link
							className={`${location.pathname == '/fav' && styles.activeLink}`}
							to='/fav'
						>
							<span>
								<AiFillHeart />
							</span>{' '}
							Favorite Songs
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.navbar}>
				<h4>My collection</h4>
				<ul className={styles.ulCollections}>
					<li>
						<Link
							className={`${
								location.pathname == '/playlists'
									? styles.activeLink
									: styles.inactiveLink
							}`}
							to='/playlists'
						>
							<span>
								<MdOutlineLibraryMusic />
							</span>{' '}
							Playlists
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/albums'
									? styles.activeLink
									: styles.inactiveLink
							}`}
							to='/albums'
						>
							<span>
								<MdAlbum />
							</span>
							Albums
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/tracks'
									? styles.activeLink
									: styles.inactiveLink
							}`}
							to='/tracks'
						>
							<span>
								<MdOutlineAudiotrack />
							</span>
							Tracks
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/artists'
									? styles.activeLink
									: styles.inactiveLink
							}`}
							to='/artists'
						>
							<span>
								<TbMicrophone2 />
							</span>
							Artists
						</Link>
					</li>
					<li>
						<Link
							className={`${
								location.pathname == '/genre'
									? styles.activeLink
									: styles.inactiveLink
							}`}
							to='/genre'
						>
							<span>
								<AiOutlineHeatMap />
							</span>
							Genres
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.navbar}>
				<h4>My playlists</h4>
				<button className={styles.addPlaylistBtn} onClick={openModal}>
					<IoMdAdd />
					<p>Create playlist</p>
				</button>
				<ul>
					{data?.map(item => (
						<li key={item._id}>
							<Link
								className={`${
									location.pathname == `/playlist/${item._id}`
										? styles.activeLink
										: styles.inactiveLink
								}`}
								to={`/playlist/${item._id}`}
							>
								<span className={styles.playlistImage}>
									{/* <MdFeaturedPlayList /> */}
									<img
										src={item.thumbnail}
										alt={item.name}
										width={40}
										height={40}
									/>
								</span>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<AddPlaylistModal closeModal={closeModal} />
			</Modal>
		</div>
	);
};

export default Aside;
