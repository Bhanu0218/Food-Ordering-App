import Creators from './Creators';
import CreatorsClass from './CreatorsClass';
import React from 'react';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='about'>
        <h2>Let's have a look about us</h2>
        <CreatorsClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className='about'>
//       <h2>Let's have a look about us</h2>
//       <Creators name={'Bhanu (func)'} />
//       <CreatorsClass name={'Bhanu (class)'} />
//     </div>
//   );
// };

export default About;
