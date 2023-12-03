// Service.jsx
import React from 'react';
import bedroomImage from '../assets/gallery/bad.jpg';
import bathroomImage from '../assets/gallery/bathroom.jpg';
import chairImage from '../assets/gallery/chairr.jpg';
import '../css/Service.css';

const Service = () => {
    return (
        <>
        <services id='Services-page'>
            <h2 className="section-title">Our Services</h2>
            <div className="service-section" >
                <div className="service-item">
                    <img src={bedroomImage} alt="Service Image 1" />
                    <h3>Custom Furniture</h3>
                    <p>We create bespoke furniture tailored to your needs and style.</p>
                </div>

                <div className="service-item">
                    <img src={bathroomImage} alt="Service Image 2" />
                    <h3>Wood Restoration</h3>
                    <p>Revitalize and restore the beauty of your wooden furniture.</p>
                </div>

                <div className="service-item">
                    <img src={chairImage} alt="Service Image 3" />
                    <h3>Carpentry Repairs</h3>
                    <p>Fixing and repairing all types of carpentry issues in your home.</p>
                </div>

                {/* Add more service items as needed */}
            </div>
        </services>
        </>
    );
}

export default Service;
