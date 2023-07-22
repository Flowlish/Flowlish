import { RouteGuard } from '@/app/providers/RouterProvider';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';

const style = {
  display: "flex",
  height: "100vh"
}

const DashBoard: React.FC = () => {
  return (
    <RouteGuard>
      <div style={style}>
        <div style={{
          flexBasis: "20%"
        }}>
          <DashboardSidebar />
        </div>
        <div style={{
          flexBasis: "100%"
        }}>
          <DashboardNavbar />
          <div>
            <h2>Dashboard</h2>
            <p>Welcome!</p>
          </div>
        </div>
      </div>
    </RouteGuard>
  )
}

export default DashBoard;