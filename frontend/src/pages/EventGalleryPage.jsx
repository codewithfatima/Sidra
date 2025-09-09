import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import imageData from './ImageData';
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const EventGalleryPage = () => {
    const { t, i18n } = useTranslation();
    const { subcategory } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);


    const normalizedSubcategory = subcategory.toLowerCase().replace(/\s+/g, '');

    const filteredImages = imageData.filter(
        (img) =>
            img.category === 'events' &&
            img.subcategory &&
            img.subcategory.toLowerCase().replace(/\s+/g, '') === normalizedSubcategory
    );


    const subcatKey = filteredImages[0]?.subcategory;
    const heading = subcatKey ? t(`galleryy.events.${subcatKey}`) : t('galleryy.title');


    const openModal = (img) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto mt-15">

            <h2 className="text-3xl font-bold mb-6 text-center">{heading}
                <span className='bg-yellow-500 w-20 h-1 block text-center rounded-lg mx-auto mt-2' ></span>
            </h2>

            <Link to='/gallery' className=' '>
                <span className='w-60 bg-yellow-500 rounded-lg px-3 py-2 flex items-center gap-3 text-black font-bold mb-5 cursor-pointer hover:bg-yellow-500'>
                    <FaArrowLeftLong />
                    {t('gallerys')}
                </span>
            </Link>

            {filteredImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {filteredImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => openModal(img)}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500  ">No images found for this event.</p>
            )}

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto rounded-md" />
                        <p className="mt-2 text-center text-gray-700 ">{selectedImage.alt}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default EventGalleryPage;
