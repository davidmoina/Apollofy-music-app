import React from 'react';
import Plot from 'react-plotly.js';

interface Genre {
  totalPlays: number;
  genre: string;
  totalDuration: number;
}

interface Props {
  genres: Genre[];
}

const TopGenres: React.FC<Props> = ({ genres }) => {
  const genreNames = genres.map((genre) => genre.genre);
  const totalPlays = genres.map((genre) => genre.totalPlays);
  const totalDuration = genres.map((genre) => genre.totalDuration);

  return (
    <Plot
      data={[
        {
          x: genreNames,
          y: totalPlays,
          type: 'bar',
          name: 'Total Plays',
          marker: { color: 'red' },
        },
        {
          x: genreNames,
          y: totalDuration,
          type: 'bar',
          name: 'Total Duration',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ barmode: 'group', 
                paper_bgcolor: 'rgba(240,240,240,1)',
                plot_bgcolor: "rgba(240,240,240,1)" }}
    />
  );
};

export default TopGenres;
