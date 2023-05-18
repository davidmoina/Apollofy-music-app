import { useState, useEffect } from 'react';
// import { useFetch } from '../../api/useFetch';
import TopGenres from '../../components/TopGenres/TopGenres';
import TopTracks from '../../components/TopTracks/TopTracks';
import InfoBarPlaylists2 from '../../components/InfoBarPlaylists2/InfoBarPlaylists2';
import InfoBarPlaylistsGenreStats from '../../components/InfoBarPlaylistsGenreStats/InfoBarPlaylistsGenreStats';
import TitleStatistics from '../../components/TitleStatistics/TitleStatistics';
// import { Track } from '../../interfaces/songs';

export const StatisticsView = () => {
	// const { VITE_APP_SERVICE_URL } = import.meta.env;
	// const { data: tracks } = useFetch<Track[]>(`${VITE_APP_SERVICE_URL}/track`);

    const [propsTracks, setPropsTracks] = useState([]);
    const [propsGenres, setPropsGenres] = useState([]);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_SERVICE_URL}/track/mostPlayed`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPropsTracks(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchTracks();
    }, []);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_SERVICE_URL}/genre/genreStats`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data)
                setPropsGenres(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchTracks();
    }, []);

	return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div style={{ height: '50%', overflowY: 'auto', marginBottom: "3vh" }}>
                    <TitleStatistics text="Top Genres"></TitleStatistics>
                    <InfoBarPlaylistsGenreStats></InfoBarPlaylistsGenreStats>
                    <TopGenres genres={propsGenres} key={propsGenres.length}/>
                </div>
                <div style={{ height: '50%', overflowY: 'auto' }}>
                    <TitleStatistics text="Top 30 songs"></TitleStatistics>
                    <InfoBarPlaylists2></InfoBarPlaylists2>
                    <TopTracks songs={propsTracks} />
                </div>
             </div>
    

		// </div>
	);
};
