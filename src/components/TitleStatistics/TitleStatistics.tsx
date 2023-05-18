import React from 'react';
import styles from './TitleStatistics.module.scss';


interface Props {
    text: string;
  }
  
  const TitleStatistics: React.FC<Props> = ({ text }) => (
    <div className={styles.container}>
        <h2 className={styles.title}>{text}</h2>
    </div>
  );
  
  
  
  export default TitleStatistics;