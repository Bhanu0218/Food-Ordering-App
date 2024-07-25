import ShimmerCards from './ShimmerCards';

const Shimmer = () => {
  return (
    <div className='bd'>
      <div className='fb'>
        <button className='b'></button>
      </div>
      <div className='rc'>
        <ShimmerCards />
        <ShimmerCards />
      </div>
    </div>
  );
};

export default Shimmer;
