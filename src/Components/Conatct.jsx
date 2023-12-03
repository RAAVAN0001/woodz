// Import necessary Chakra UI components
import { Box, Flex, Text, Input, Textarea, Button } from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css'

const Contact = () => {
    const [state, handleSubmit] = useForm("https://formspree.io/f/xqkvvvzb");

    return (
        <div id='Contact'>
            <h2 className="section-title">Contact</h2>

            <div className="contact-page">

                <Box className="contact-info" p={4}>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>Contact Information</Text>
                    <div>
                        <Text>Location: Punjab</Text>
                        <Text>Phone: 6239378916</Text>
                        <Text>Email: a252550k@gmail.com</Text>
                    </div>
                </Box>

                <Flex className="contact-form" p={4} align="center" justify="center">
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
                        <Box mb={4}>
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Drop Us A Line</Text>
                        </Box>
                        <Box mb={4}>
                            <Input type="text" placeholder="Your Name" name="name" />
                        </Box>
                        <Box mb={4}>
                            <Input type="email" placeholder="Your Email" name="email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </Box>
                        <Box mb={4} w={'100%'}>
                            <Textarea placeholder="Your Message" name="message" />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </Box>
                        <Button w='50%' alignItems={'center'} colorScheme="teal" type="submit" disabled={state.submitting}>
                            Submit
                        </Button>
                    </form>
                </Flex>
               

            </div>
            <a href="https://bluemonkey.7vfail.com" target='blank' className='footer' >
                <Box cursor="pointer" display={'flex'} justifyContent={'center'} alignItems={'center'} textDecoration="none" color="teal.500" opacity={.9} fontSize='.8em'>
                    Developed by bluemonkey.7vfail.com
                </Box>
            </a>
        </div>
    );
}

export default Contact;
