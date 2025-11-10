import { useState } from 'react';

export default function Personal() {

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        { src: '/ashrita-olivia-yosemite.jpeg', description: 'Description for photo 1' },
        { src: '/cape-photo-stack.JPG', description: 'Description for photo 2' },
        { src: '/chicago-photo.jpeg', description: 'Description for photo 3' },
        { src: '/croatia.jpeg', description: 'Description for photo 4' },
        { src: '/family-photo.jpeg', description: 'Description for photo 5' },
        { src: '/Kappa%20Delta.jpg', description: 'Description for photo 6' },
        { src: '/Kappa%20Delta.jpg', description: 'Description for photo 7' },
        { src: '/Kappa%20Delta.jpg', description: 'Description for photo 8' },
        { src: '/Kappa%20Delta.jpg', description: 'Description for photo 9' }
    ];

    const openModal = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return(
        <section id="personal" className="personal-section">
            <div className="personal-flex-container">
                <div className="personal-container">
                    <h2 className="personal-heading">Outside of the classroom</h2>
                    <p className="personal-text">
                        Hi! I'm Olivia, a second year Computer Science and Mathematics major at Northeastern University.
                        I'm from the Chicago suburbs.
                    </p>
                    <h2 className="personal-heading">Things I love</h2>
                    <p className="personal-text">
                        Hi! I'm Olivia, a second year Computer Science and Mathematics major at Northeastern University.
                        I'm from the Chicago suburbs.
                    </p>
                </div>
                <div className="personal-photo">
                    <h2 className="photo-album-title">Little Photo Album:</h2>
                    <div className="photo-grid">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo.src}
                                alt={`Photo ${index + 1}`}
                                onClick={() => openModal(photo)}
                            />
                        ))}
                    </div>
                    {selectedPhoto && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={closeModal}>&times;</button>
                                <img src={selectedPhoto.src} alt="Selected" />
                                <p className="modal-description">{selectedPhoto.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}