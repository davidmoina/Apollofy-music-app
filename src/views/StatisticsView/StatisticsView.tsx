import { useState, useEffect } from 'react';
import TopGenres from '../../components/TopGenres/TopGenres';
import TopTracks from '../../components/TopTracks/TopTracks';
import InfoBarPlaylists2 from '../../components/InfoBarPlaylists2/InfoBarPlaylists2';
import TitleStatistics from '../../components/TitleStatistics/TitleStatistics';
import styles from './StatisticsView.module.scss';

export const StatisticsView = () => {
	

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
                
                    <TitleStatistics text="Top Genres"></TitleStatistics>
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: "center" }}>
                        <TopGenres genres={propsGenres} key={propsGenres.length}/>
                    </div>    
            
                <div className={styles.container}>
                    <TitleStatistics text="Top 30 songs"></TitleStatistics>
                    <InfoBarPlaylists2></InfoBarPlaylists2>
                    <TopTracks songs={propsTracks} />
                </div>
             </div>
	);
};
