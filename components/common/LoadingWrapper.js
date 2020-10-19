export default function LoadingWrapper({ loading, children }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  return children;
}
