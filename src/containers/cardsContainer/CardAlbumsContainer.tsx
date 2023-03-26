
import { Album } from '../../interfaces/songs';
import { CardAlbum } from '../../components/Cards/CardAlbum';
import styles from './cardsContainer.module.scss';

interface AlbumContainerProps {
   title: string;
   albums: Album[];
}

export const CardAlbumsContainer = ({ title, albums }: AlbumContainerProps) => {
   return (
      <section className={`mb-8 ${styles.cardsContainer}`}>
         <h2 className={`text-xl md:text-2xl mb-2 ${styles.containerTitle}`}>{title}</h2>
         <div className={`flex overflow-x-auto gap-6 ${styles.containerCard}`}> 
            {albums.map((album, index) => (
               <CardAlbum key={index} albums={album} />
            ))}
         </div>  
      </section>
   )
}
