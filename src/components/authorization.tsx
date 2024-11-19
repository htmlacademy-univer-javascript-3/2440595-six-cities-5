import { Navigate } from 'react-router-dom';
import { AppRoutesProps } from '../props/app-routes-props.tsx';

interface AuthorizationProps {
  isAuthorized: boolean;
  children: React.JSX.Element;
}

export function Authorization(props: AuthorizationProps): React.JSX.Element {
  const { isAuthorized, children } = props;
  return isAuthorized ? children : <Navigate to={AppRoutesProps.LoginPage} />;
}
