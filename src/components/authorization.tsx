import { Navigate } from 'react-router-dom';
import { AppRoutesProps } from '../props/app-routes-props.tsx';
import {AuthStatus} from '../internal/enums/auth-status-enum.tsx';

interface AuthorizationProps {
  authStatus: AuthStatus;
  children: React.JSX.Element;
}

export function Authorization(props: AuthorizationProps): React.JSX.Element {
  const { authStatus, children } = props;
  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoutesProps.LoginPage} />;
}
