// Testimonial.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';  // You can use Chakra UI components for styling
import '../css/Testimonial.css';  // Import your testimonial section CSS file

const Testimonial = () => {
  return (

    <Box className="testimonial-section" p={4} paddingBottom={'100px'}>
      <h2 className="section-title">Testimonial</h2>

      <div className="testimonial-item">
        <Text fontSize="lg" mb={2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at urna ac nulla posuere tristique."</Text>
        <Text fontWeight="bold">John Doe</Text>
      </div>

      <div className="testimonial-item">
        <Text fontSize="lg" mb={2}>"Integer at justo ac elit posuere imperdiet. Sed et ligula vel turpis ultricies aliquam."</Text>
        <Text fontWeight="bold">Jane Smith</Text>
      </div>

      {/* Add more testimonials as needed */}
    </Box>
  );
}

export default Testimonial;
