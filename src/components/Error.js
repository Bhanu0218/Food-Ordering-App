import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className='error'>
      <div className='err-container'>
        <h1>OOPS!</h1>
        <h5>
          Error {err.status} : {err.statusText}
        </h5>
        <p>{err.data}</p>
        <button className='err-btn'>Go Back</button>
      </div>
    </div>
  );
};

export default Error;
