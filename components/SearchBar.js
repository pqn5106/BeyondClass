import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      label="Search"
      placeholder="Enter your search term"
      sx={{
        borderRadius: '50px', // Adjust the border-radius value as per your preference
        borderColor: '#6B7280', // Dark grey border outline color
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#D1D5DB', // Light grey inside border color
          },
        },
        '& .MuiOutlinedInput-input': {
          '&::placeholder': {
            color: '#D1D5DB', // Light grey placeholder text color
          },
          color: '#111827', // Dark grey text color
        },
        '&:hover .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#D1D5DB', // Light grey inside border color on hover
          },
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& fieldset': {
            borderColor: '#D1D5DB', // Light grey inside border color when focused
          },
        },
      }}
    />
  );
};

export default SearchBar;
