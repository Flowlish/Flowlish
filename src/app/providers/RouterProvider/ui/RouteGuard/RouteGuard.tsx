import { useSession } from '@/hooks/useSession'
import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

interface RouteGuardProps {
  children: ReactNode
}

export const RouteGuard = ({ children }: RouteGuardProps) => {
  const { status } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (status === 'unauthorized') navigate(`/signin?callbackUrl=${location.pathname}`)
  }, [status])
  
  return <>{children}</>
}