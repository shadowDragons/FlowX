'use client';

import { ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import CustomImageViewer from '~/lib/components/ImageViewer';
import SkillIcon from '~/lib/components/SkillsIcon';
import 'tdesign-react/dist/tdesign.css';

interface Item {
  id: number;
  title: string;
  img: string;
  imgs: string[];
  desc: string;
  tags: string[];
  skills: string[];
}

const items: Item[] = [
  {
    id: 1,
    title: 'React Commerce',
    img: '/project/xiaolu/show1.png',
    imgs: ['/project/xiaolu/show1.png', '/project/TradeZen/show3.png'],
    desc: 'This sofa is perfect for modern tropical spaces, baroqueinspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    tags: ['aaa', 'bbb'],
    skills: [
      'laravel',
      'antDesign',
      'css',
      'java',
      'js',
      'mysql',
      'nestjs',
      'nextjs',
      'php',
      'prisma',
      'react',
      'springboot',
      'vue',
    ],
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: '/project/TradeZen/show3.png',
    imgs: ['/project/xiaolu/show1.png', '/project/TradeZen/show3.png'],
    desc: 'This sofa is perfect for modern tropical spaces, baroqueinspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    tags: ['aaa', 'bbb'],
    skills: [
      'laravel',
      'antDesign',
      'css',
      'java',
      'js',
      'mysql',
      'nestjs',
      'nextjs',
      'php',
      'prisma',
      'react',
      'springboot',
      'vue',
    ],
  },
];

const CartItem = ({ item }: { item: Item }) => {
  const trigger = ({ open }) => (
    <Button onClick={open} flex="1" variant="ghost" leftIcon={<ViewIcon />}>
      查看更多图片
    </Button>
  );

  return (
    <Card width={400}>
      <CardBody>
        <Image
          src={item.img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>{item.desc}</Text>
          <Box marginBottom={3}>
            {item.tags.map((tag) => (
              <Tag colorScheme="teal" marginRight={2} fontSize={20}>
                {tag}
              </Tag>
            ))}
          </Box>
          <Box marginBottom={3}>
            {item.skills.map((skill) => (
              <Tooltip label={skill}>
                <Box as="span" marginRight={1}>
                  <SkillIcon height={6} width={9} skill={skill} />
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <CustomImageViewer trigger={trigger} images={item.imgs} />
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <Box pl={10} pr={10}>
      <Flex height={100} alignItems="center">
        <Heading as="h1">111</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={100}>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </SimpleGrid>

      <Flex height={100} alignItems="center">
        <Heading as="h1">111</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={100}>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </SimpleGrid>

      <Flex height={100} alignItems="center">
        <Heading as="h1">111</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={100}>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
