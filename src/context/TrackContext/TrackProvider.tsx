import { createContext, useState } from 'react';
import { Track } from '../../interfaces/songs';

interface TrackContextValue {
	tracks: Track[];
	setTrack: React.Dispatch<React.SetStateAction<never[]>>;
}

export const TrackContext = createContext<TrackContextValue | null>(null);
type Props = {
	children: JSX.Element | JSX.Element[];
};

const TrackProvider = ({ children }: Props) => {
	const [tracks, setTrack] = useState([]);

	return (
		<TrackContext.Provider value={{ tracks, setTrack }}>
			{children}
		</TrackContext.Provider>
	);
};
export default TrackProvider;
