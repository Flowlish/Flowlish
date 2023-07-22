import { Box, Button, Card, CardBody, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosArrowDown } from "react-icons/io"
import { CgArrowTopRight } from 'react-icons/cg'
import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { profileSelector } from "@/app/providers/StoreProvider/slices/profileSlice/profile"
import { taskSelector } from "@/app/providers/StoreProvider/slices/taskSlice/tasks"
import { workspaceSelector } from "@/app/providers/StoreProvider/slices/workspaceSlice/workspace"

export const DashboardSidebar = () => {
  const profile = useSelector(profileSelector)
  const tasks = useSelector(taskSelector)
  const workspaces = useSelector(workspaceSelector)

  console.log(profile);
  console.log(tasks);
  console.log(workspaces);  

  return (
  <Box p={5} borderRight={"solid 2px"} borderColor={"gray.200"}>
    <Stack spacing={8}>
      <Projects />
      <TeamMembers />
      <Time hours="23.7" statistics="2.5%" />
      <AddProject />
    </Stack>
  </Box>
  )
}

interface CardContainer {
  src: string
  cardmenu: ReactNode
  cardbody: ReactNode
}

const CardContainer = ({ src, cardmenu, cardbody }: CardContainer) => {
  return (
    <Card border={"2px"} borderColor={"gray.100"} shadow={"none"}>
      <CardBody p={1} flexDirection={"row"} display={'flex'} gap={"4"} alignItems={"center"} >
        <Image
          borderRadius='full'
          boxSize='25px'
          src={src}
          alt='Project card'
        />
        <Box display={"flex"} flexGrow={"1"} justifyContent={"space-between"}>
          {cardbody}
          {cardmenu}
        </Box>
      </CardBody>
    </Card>
  )
}

interface ProjectCardProps {
  src: string
  title: string
}

const Projects = () => {
  return (
    <Stack spacing={3}>
      <div>
        <Text fontSize='xl' align={"left"} fontWeight={"semibold"}>Projects</Text>
      </div>
      <Stack spacing={2}>
        <ProjectCard src={"https://fakeimg.pl/50x50"} title={"Piper Enterprice"} />
        <ProjectCard src={"https://fakeimg.pl/50x50"} title={"Piper Enterprice"} />
        <ProjectCard src={"https://fakeimg.pl/50x50"} title={"Piper Enterprice"} />
        <ProjectCard src={"https://fakeimg.pl/50x50"} title={"Piper Enterprice"} />
      </Stack>
    </Stack>
  )
}

const ProjectCard = ({ src, title }: ProjectCardProps) => {
  return (
    <CardContainer
      src={src}
      cardbody={
        <Box display={"flex"} alignItems={"center"}>
          <Text fontWeight={"semibold"} >{title}</Text>
        </Box>
      }
      cardmenu={
        <ProjectCardOptions />
      }
    />
  )
}

const ProjectCardOptions = () => {
  return (
    <Menu>
      <MenuButton bgColor={"transparent"} _hover={{ bgColor: "none" }} as={Button} rightIcon={<BsThreeDotsVertical style={{ scale: "1.4" }} />} />
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

const TeamMembers = () => {
  return (
    <Stack spacing={3}>
      <div>
        <Text fontSize='xl' align={"left"} fontWeight={"semibold"}>Team Members</Text>
      </div>
      <Stack spacing={2}>
        <TeamMemberCard src={"https://fakeimg.pl/50x50"} title={"Karen Smith"} status={true} time={"08:23"} />
        <TeamMemberCard src={"https://fakeimg.pl/50x50"} title={"Karen Smith"} status={false} time={"08:23"} />
        <TeamMemberCard src={"https://fakeimg.pl/50x50"} title={"Karen Smith"} status={true} time={"08:23"} />
        <TeamMemberCard src={"https://fakeimg.pl/50x50"} title={"Karen Smith"} status={true} time={"08:23"} />
      </Stack>
    </Stack>
  )
}

interface TeamMemberCardProps {
  src: string
  title: string
  status: Boolean
  time: string
}

const TeamMemberCard = ({ src, title, status, time }: TeamMemberCardProps) => {
  return (
    <CardContainer
      src={src}
      cardbody={
        <Box textAlign={"start"}>
          <Text fontWeight={"semibold"}>{title}</Text>
          <Box fontWeight={"semibold"} fontSize={"14px"} textColor={"gray.400"} gap={1} display={"flex"} alignItems={"center"}>
            {status ? (
              <Text>Online</Text>
            ) : (
              <Text>Offline</Text>
            )}
            <Text>- {time}</Text>
          </Box>
        </Box>
      }
      cardmenu={
        <TeamCardOptions />
      }
    />
  )
}

const TeamCardOptions = () => {
  return (
    <Menu>
      <MenuButton bgColor={"transparent"} _hover={{ bgColor: "none" }} as={Button} rightIcon={<IoIosArrowDown style={{ scale: "1.4" }} />} />
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

interface TimeProps {
  hours: string
  statistics: string
}

const Time = ({ hours, statistics }: TimeProps) => {
  return (
    <Box p={4} border={"2px"} borderColor={"gray.200"} rounded={"4px"}>
      <VStack spacing={3} alignItems={"start"}>
        <Text textColor={"gray.400"} fontWeight={"semibold"} fontSize={"sm"}>TOTAL HOURS</Text>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>{hours} hours</Text>
        <Box display={'flex'} alignItems={"center"} gap={1}>
          {/* TODO change arrow */}
          <Box display={'flex'} alignItems={"center"} gap={1}>
            <CgArrowTopRight style={{ color: "green" }} />
            <Text textColor={"green"}>{statistics}</Text>
          </Box>
          <Text textColor={"gray.400"} fontWeight={"semibold"} fontSize={"xs"}>from last week</Text>
        </Box>
      </VStack>
    </Box>
  )
}

const AddProject = () => {
  return (
    <Button bgColor={'transparent'} textColor={"blue.500"} borderColor={"blue.500"} border={"dashed 2px"} size='lg'>
      + Add Project
    </Button>
  )
}