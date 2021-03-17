import imageA from '../assets/Ellipse 22.png';
import imageB from '../assets/Ellipse 23.png';
import imageC from '../assets/Ellipse 24.png';

const getUsers = () => {
    return [
                {
                    name: 'Joseph Ike',
                    type: 'Vendor',
                    image: imageA,
                    location: 'Akoka'
                },
                {
                    name: 'Adetola Fashina',
                    type: 'Customer',
                    image: imageB,
                    location: 'Ikeja'
                },
                {
                    name: 'Emmanuella Fayemi',
                    type: 'Customer',
                    image: imageC,
                    location: 'Somolu'
                },
            ];
} 

export default getUsers;