{/* Gallery Section */ }
// Home.jsx
import React from 'react';
import bedroomImage from '../assets/gallery/bad.jpg';
import bathroomImage from '../assets/gallery/bathroom.jpg';
import chairImage from '../assets/gallery/chairr.jpg';
import kitchen from '../assets/gallery/kitchenn.jpg';
import sofa from '../assets/gallery/soffa.jpg';
import '../css/gallery.css';

const Gallery = () => {
    return (<>
         <gallery id='gallery-page'>
            <h2 className="section-title">Explore Our Gallery</h2>
            <div className="gallery-section">
                <div className="gallery-item">
                    <img src={bedroomImage} alt="Gallery Item 1" loading='lazy' />
                    <p>Description for Bedroom</p>
                </div>


                <div className="gallery-item">
                    <img src={chairImage} alt="Gallery Item 1"  loading='lazy' />
                    <p>Description for Bedroom</p>
                </div>

                <div className="gallery-item">
                    <img src={kitchen} alt="Gallery Item 2"  loading='lazy' />
                    <p>Description for Bathroom</p>
                </div>

          

                <div className="gallery-item">
                    <img src={sofa} alt="Gallery Item 3"  loading='lazy' />
                    <p>Description for Chair</p>
                </div>



                <div className="gallery-item">
                    <img src={kitchen} alt="Gallery Item 2"  loading='lazy' />
                    <p>Description for Bathroom</p>
                </div>

                <div className="gallery-item">
                    <img src={bathroomImage} alt="Gallery Item 2"  loading='lazy' />
                    <p>Description for Bathroom</p>
                </div>

               


                {/* Add more gallery items as needed */}
            </div>
         </gallery>
        </>
    );
}

export default Gallery;


