import './PhotoList.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

import Photo from './Photo';


const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100');

                if (res.status === 200) {
                    setPhotos(res.data);
                }else{
                    throw new Error (`Failed to fetch data with status : ${res.status}`);
                }
                
            } catch (err) {
                setError(err.message);
  
            } finally {
                setIsLoading(false);
            }
        };
        getPhotos();
    }, []);
    return <div className='photo-list'>
        <h1>Photo List </h1>
        {isLoading && <Loading />}
        {error && <p className='error'>{error}</p>}
        <ul>
            {photos.map((photo)=> (
                <Photo key={photo.id} photo = {photo}/>))}
        </ul>
    </div>
} 

export default PhotoList;