import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesProps } from '../props/app-routes-props.tsx';

export function NotFoundPage(): React.JSX.Element {
  return (
    <Fragment>
      <h1>
        404. <br/> <small>Unfortunately, page was not found</small>
      </h1>
      <Link to={AppRoutesProps.MainPage} className="header__nav-link" style={{color: 'gray', textDecoration: 'underline'}}>
        Go to main page
      </Link>
    </Fragment>
  );
}
