import App from 'next/app';
import { connect } from 'react-redux';
import Router from 'next/router';

function getRedirectTo() {
  if (typeof window !== 'undefined' && window.location) {
    return window.location;
  }
  return {};
}

export default function requireAuth(Component) {
  class PremimumComponent extends App {
    UNSAFE_componentWillMount = () => {
      this.checkAuth(this.props);
      this.getUserData();
      console.log('Test');
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
      this.checkAuth(nextProps);
    };

    checkAuth = (props) => {
      const { authenticated, authenticating } = props;
      if (!authenticating && !authenticated) {
        console.log('redirect');
        Router.replace(
          `/login?r=${redir.pathname + encodeURIComponent(redir.search)}`,
          '/login',
          { shallow: true }
        );
      }
    };

    getUserData = () => {
      const { dispatch } = this.props;
      dispatch({ type: '@@auth/GET_USER' });
    };

    refreshToken = () => {
      const { dispatch } = this.props;
      dispatch({ type: '@@auth/REFRESH_TOKEN' });
    };

    render() {
      const { authenticating, authenticated, auth, ...otherProps } = this.props;
      console.log('props@@,', this.props);
      return authenticating ? (
        <div className="loading-container">
          {/* <div className={classnames("loading", {})} /> */}
          {/* <LoadingWrapper isLoading /> */}
          <span>Loading...</span>
        </div>
      ) : (
        <Component
          {...otherProps}
          auth={auth}
          // authServices={{
          //   refreshToken: this.refreshToken,
          //   // getUserData,
          // }}
        />
      );
    }
  }

  const mapStateToProps = (store) => ({
    authenticating: store.auth.authenticating,
    auth: store.auth,
    authenticated: store.auth.authenticated,
  });

  return connect(mapStateToProps)(PremimumComponent);
}
