import { useState, useEffect } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BiLibrary } from 'react-icons/bi';
import { useMediaQuery } from '@react-hook/media-query';
import { FC } from 'react';
import styles from './mobileNav.module.scss';


interface Props {
  icon: React.ReactNode;
  text: string;
}

export const MobileNavButton = ({ icon, text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleTransitionEnd = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={`text-center flex flex-col items-center ${
        isExpanded
          ? 'scale-90 transition duration-100 linear'
          : 'scale-100'
      }`}
      onClick={toggleExpanded}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="sidebar-icon">{icon}</div>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

export const MobileNavBar: FC = () => {
  const mediaQuery = useMediaQuery('(max-width: 768px)');
  const [isPhoneScreen, setIsPhoneScreen] = useState<boolean>(mediaQuery);

  useEffect(() => {
    setIsPhoneScreen(mediaQuery);
  }, [mediaQuery]);

  if (!isPhoneScreen) {
    return null;
  }

  
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black flex justify-around items-center shadow-lg">
      <MobileNavButton
        icon={<MdHomeFilled size="30" style={{ color: 'white' }} />}
        text="Home"
      />
      <MobileNavButton
        icon={<BiSearch size="30" style={{ color: 'white' }} />}
        text="Search"
      />
      <MobileNavButton
        icon={<BiLibrary size="30" style={{ color: 'white' }} />}
        text="Playlists"
      />
    </nav>
  );
};

export default MobileNavBar;