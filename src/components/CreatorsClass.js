import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa6';
import Shimmer from './Shimmer';

class CreatorsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/Bhanu0218');

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className='creators'>
        <div className='card-1'>
          <div className='card-details'>
            <div className='image-container'>
              <img src={avatar_url} alt='Image' className='avatar' />
            </div>
            <div className='user-container'>
              <h4>{name}</h4>
              <h5>Full Stack Engineer</h5>
              <div className='icons'>
                <FaInstagram />
                <FaFacebook />
                <FaGithub />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className='card-2'>
          <div className='card-details'>
            <div className='image-container'>
              <div>
                <img src={avatar_url} alt='Image' className='avatar' />
              </div>
            </div>
            <div className='user-container'>
              <h4>{name}</h4>
              <h5>Instructor | Youtuber</h5>
              <div className='icons'>
                <FaInstagram />
                <FaFacebook />
                <FaGithub />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className='card-3'>
          <div className='card-details'>
            <div className='image-container'>
              <img src={avatar_url} alt='Image' className='avatar' />
            </div>
            <div className='user-container'>
              <h4>{name}</h4>
              <h5>Instructor | Youtuber</h5>
              <div className='icons'>
                <FaInstagram />
                <FaFacebook />
                <FaGithub />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorsClass;
