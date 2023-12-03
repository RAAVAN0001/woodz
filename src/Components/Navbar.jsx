import { ChakraProvider, extendTheme, Box, Flex, Text, Spacer, IconButton, useMediaQuery, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../css/Navbar.css';
import { useEffect, useState } from 'react';

// Define your custom theme

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    // Show the back-to-top button when scrolled down
    setShowBackToTop(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box p={4} bg="teal.500">
      <Flex align="center" justifyContent={'space-around'} bg="teal.500">
        <Text ml='12vw' bg="teal.500" fontSize="xx-large" fontWeight="bold" color="white">
          Woodz
        </Text>
        {isLargerThan768 ? (
          <Flex gap={'50'} bg="teal.500">
            <ScrollLink bg="teal.500" to="home" spy={true} smooth={true} duration={500} className="nav-link">
              <Text bg="teal.500" cursor={'pointer'} color="white">Home</Text>
            </ScrollLink>
            <ScrollLink bg="teal.500" to="Services-page" spy={true} smooth={true} duration={500} className="nav-link">
              <Text bg="teal.500" cursor={'pointer'} color="white">Services</Text>
            </ScrollLink>
            <ScrollLink to="gallery-page" spy={true} smooth={true} duration={650} className="nav-link">
              <Text bg="teal.500" cursor={'pointer'} color="white">Gallery</Text>
            </ScrollLink>
            <ScrollLink bg="teal.500" to="Contact" spy={true} smooth={true} duration={1000} className="nav-link">
              <Text bg="teal.500" cursor={'pointer'} color="white">Contact</Text>
            </ScrollLink>
          </Flex>
        ) : (
          <>
            <Spacer bg="teal.500" />
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              color="white"
              size="md"
              backgroundColor={'teal'}
              onClick={handleDrawerOpen}
            />
            <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
              <DrawerOverlay />
             
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>
                  <DrawerBody>
                    <ScrollLink to="home" spy={true} smooth={true} className="drawer-link" onClick={handleDrawerClose}>
                      <Text color="white">Home</Text>
                    </ScrollLink>
                    <ScrollLink to="Services-page" spy={true} smooth={true} duration={300} className="drawer-link" onClick={handleDrawerClose}>
                      <Text color="white">Service</Text>
                    </ScrollLink>
                    <ScrollLink to="gallery-page" spy={true} smooth={true} duration={800} className="nav-link" onClick={handleDrawerClose}>
                      <Text bg="teal.500">Gallery</Text>
                    </ScrollLink>
                    <ScrollLink to="Contact" spy={true} smooth={true} duration={1000} className="drawer-link" onClick={handleDrawerClose}>
                      <Text color="white">Contact</Text>
                    </ScrollLink>
                    {/* Add more navigation links as needed */}
                  </DrawerBody>
                </DrawerContent>
             
            </Drawer>
          </>
        )}
      </Flex>
      {showBackToTop && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          &#8593;
        </button>
      )}
    </Box>
  );
};

export default Navbar;
