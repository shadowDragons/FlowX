'use client';

import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillCustomerService } from 'react-icons/ai';

import Hero from '~/lib/components/Hero';
import {
  fadeInDown,
  staggerTextContainer,
} from '~/lib/components/motion/variants';
import ProductType from '~/lib/components/ProductType';
import Project from '~/lib/components/Project';
import Service from '~/lib/components/Service';

import '~/lib/styles/moreButton.css';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      flex="auto"
    >
      <Box w="full" pl={10} pr={10} mb={20}>
        <Hero />
      </Box>

      <Box w="full">
        <Box
          pl={10}
          pr={10}
          pt={100}
          paddingBottom={100}
          bg={useColorModeValue('gray.50', 'gray.700')}
        >
          <ProductType />
        </Box>

        <Box w="full" pl={10} pr={10} pt={100} paddingBottom={100}>
          <Project />
        </Box>

        <Box
          w="full"
          bg={useColorModeValue('gray.50', 'gray.700')}
          pl={10}
          pr={10}
          pt={100}
          paddingBottom={100}
        >
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.6 }}
          >
            <motion.div variants={fadeInDown}>
              <Flex my={10} justifyContent="center" alignItems="center">
                <Box marginRight={4}>
                  <AiFillCustomerService size={40} />
                </Box>
                <Heading as="h2" size="md" fontWeight={600} fontSize="4xl">
                  我们的服务
                </Heading>
              </Flex>
            </motion.div>
            <Service />
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
