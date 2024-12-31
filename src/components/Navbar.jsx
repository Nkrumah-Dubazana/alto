import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ 
        position: 'sticky', 
        background: '#000', 
        top: 0, 
        justifyContent: 'space-between' 
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        <span 
          style={{
            marginLeft: '10px',
            fontSize: '24px',
            fontFamily: 'Jumanji', 
            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 0px 10px rgba(253,187,45,0.7)',
            animation: 'glow 1.5s infinite alternate'
          }}
        >
          MamBoJumBoO
        </span>
      </Link>
      <SearchBar />

      
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 0 0 10px rgba(253,187,45,0.7), 0 0 20px rgba(253,187,45,0.5);
            }
            to {
              text-shadow: 0 0 20px rgba(253,187,45,1), 0 0 30px rgba(253,187,45,0.8);
            }
          }
        `}
      </style>
    </Stack>
  );
};

export default Navbar;