import useQuery from '@/hooks/useQuery';

const Home = () => {
  const { data, loading, error } = useQuery('/home');
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  return <div style={{ height: '2000px' }}>Home</div>;
};
export default Home;
