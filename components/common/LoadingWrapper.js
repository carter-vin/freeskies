import { LoadingOutlined } from '@ant-design/icons';

export default function LoadingWrapper({ loading, children }) {
  if (loading) {
    return (
      <div style={{ margin: '2em', textAlign: 'center' }}>
        <LoadingOutlined style={{ fontSize: '2em', color: '#407cff' }} />
      </div>
    );
  }
  return children;
}
