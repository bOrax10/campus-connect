import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
  let auth = {'token':'false'}
  return(
    auth.token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;
