import { RouteGuard } from '@/app/providers/RouterProvider';
import { DashboardNavbar } from './dashboard-navbar';

const DashBoard: React.FC = () => {
  return (
    <RouteGuard>
      <DashboardNavbar />
      <div>
        <h2>Dashboard</h2>
        <p>Welcome!</p>
      </div>
    </RouteGuard>
  )
}

export default DashBoard;