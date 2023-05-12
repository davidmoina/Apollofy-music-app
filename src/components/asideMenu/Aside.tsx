import styles from './aside.module.scss';
import { AiOutlineHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import {
	MdOutlineLibraryMusic,
	MdAlbum,
	MdOutlineAudiotrack,
} from 'react-icons//md';
import { VscLibrary } from 'react-icons/vsc';
import { TbMicrophone2 } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { CreateTrack } from '../CreateTrack/CreateTrack';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal/Modal';
import { IoMdAdd } from 'react-icons/io';
import styleButonModal from '../ListsModalContent/listsModalContent.module.scss';

const Aside = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const location = useLocation();

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
					<li>
						<button
							onClick={openModal}
							className={styleButonModal.addPlaylistBtn}
						>
							Create new Song{' '}
							<IoMdAdd
								style={{ display: 'inline-block', marginBottom: '5px' }}
							/>
						</button>
						<Modal isOpen={isOpen} closeModal={closeModal}>
							<CreateTrack />
						</Modal>
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
				</ul>
			</div>
		</div>
	);
};

export default Aside;
