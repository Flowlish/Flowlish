import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react';

interface NavbarProps {
  children: ReactNode
}

const Start = ({ children }: { children: ReactNode }) => {
  return (
    <Flex alignItems="center" gap="0.5rem">{children}</Flex>
  )
}

const Center = ({ children }: { children: ReactNode }) => {
  return (
    <Flex alignItems="center" gap="0.5rem">{children}</Flex>
  )
}

const End = ({ children }: { children: ReactNode }) => {
  return (
    <Flex alignItems="center" gap="0.5rem">{children}</Flex>
  )
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <Flex width="full" justify="space-between" padding="0.5rem" borderBottom="2px" borderColor="gray.200">
      {children}
    </Flex>
  )
}

Navbar.Start = Start;
Navbar.Center = Center;
Navbar.End = End;

export default Navbar;
