import './Photo.css';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => {
  return (
    <li className="photo">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </li>
  );
};

Photo.propTypes = {
    photo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Photo;
