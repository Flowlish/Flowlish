import Navbar from '@/components/widgets/Navbar/Navbar'
import { Input, Menu, MenuButton, MenuList, MenuItem, MenuCommand } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { useSession } from '@/hooks/useSession'
import { Settings, Bell, MenuSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import supabase from '@/services/supabase-api-config'

export const DashboardNavbar = () => {
  const { user } = useSession();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/signin');
  }

  const userName = user?.user_metadata.name
  // const userEmail = user?.user_metadata.email
  const userAvatar = user?.user_metadata.avatar_url
  

  return (
    <Navbar>
      <Navbar.Start>
        <Input placeholder='Search' />
      </Navbar.Start>
      <Navbar.End>
        <Settings />
        <Bell />
        <Menu>
          <MenuButton>
            <Avatar name={userName} src={userAvatar}/>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleSignOut}>
              Sign out
            </MenuItem>  
          </MenuList>
        </Menu>
      </Navbar.End>
    </Navbar>
  )
}