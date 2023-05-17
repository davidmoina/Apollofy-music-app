import { useNavigate } from 'react-router-dom';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import styles from './welcomePage.module.scss';

export const WelcomePage = () => {
	const navigate = useNavigate();

	return (
		<>
			<main className={styles.container}>
				<div className='z-50 '>
					<div
						className='flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent drop-shadow-[0_1.2px_1.2px_rgba(123,88,175,0.8)] text-4xl sm:text-7xl font-extrabold tracking-wide antialiased'
						style={{
							backgroundImage:
								'url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)',
						}}
					>
						Palyer Music
					</div>
					<div className='text-gray-500 text-4xl text-center font-bold uppercase flex flex-col justify-around my-10'>
						<span>Listen</span>
						<div className='overflow-hidden h-14'>
							<div className='animate-slide'>
								<span className='inline-block text-white py-1 px-3 mt-1 mb-11 bg-indigo-600'>
									Great
								</span>
							</div>
							<div>
								<span className='inline-block text-white py-1 px-3 mb-11 bg-cyan-600'>
									Amazing
								</span>
							</div>
							<div>
								<span className='inline-block text-white py-1 px-3 mb-11 bg-violet-700'>
									Awesome
								</span>
							</div>
						</div>
						<span>Music!</span>
					</div>
				</div>

				<div className='z-50 flex gap-4 items-center'>
					<button
						onClick={() => navigate('/login')}
						className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
					>
						<span className='w-28 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Login
						</span>
					</button>
					<button
						onClick={() => navigate('/register')}
						className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
					>
						<span className='w-28 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Register
						</span>
					</button>
				</div>
			</main>
			<BackgroundAnimated />
		</>
	);
};
