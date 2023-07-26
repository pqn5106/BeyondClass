"use client";
import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const ScholarshipModal = ({ isOpen, onClose, scholarship }) => {
  const springProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.8)',
  });

  return (
    <Modal open={isOpen} onClose={onClose}>
      <animated.div style={springProps}>
        <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
          <Typography variant="h5">{scholarship.name}</Typography>
          <Typography variant="body1">{scholarship.description}</Typography>
        </Box>
      </animated.div>
    </Modal>
  );
};

const ScholarshipsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Sample data for Scholarship 1
  const scholarship1 = {
    id: 1,
    name: 'Scholarship 1',
    description: 'This is the description of Scholarship 1.',
  };

  return (
    <>
      {/* Use Button instead of Link */}
      <Button onClick={handleOpenModal}>{scholarship1.name}</Button>
      {isModalOpen && (
        <ScholarshipModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          scholarship={scholarship1}
        />
      )}
    </>
  );
};

export default ScholarshipsList;
