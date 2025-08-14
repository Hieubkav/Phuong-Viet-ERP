
import React, { useState } from 'react';
import { ImageIcon } from './icons/Icons';
import { getImageUrl } from '../utils/imageUtils';
import ImageModal from './ImageModal';

interface ImagePlaceholderProps {
  description: string;
  caption?: string;
  width?: string;
  height?: string;
  src?: string; // Thêm prop src để hiển thị ảnh thật
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  description,
  caption,
  width = 'full',
  height = '64',
  src
}) => {
  // Xử lý đường dẫn ảnh với base URL
  const imageSrc = src ? getImageUrl(src) : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (imageSrc) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className={`w-${width} my-6`}>
      {imageSrc ? (
        // Hiển thị ảnh thật nếu có src
        <div className="rounded-lg overflow-hidden border dark:border-gray-600 border-gray-300">
          <img
            src={imageSrc}
            alt={description}
            className="w-full h-auto object-contain dark:bg-gray-800 bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ maxHeight: '500px' }}
            onClick={handleImageClick}
            title="Click để xem ảnh phóng to"
          />
        </div>
      ) : (
        // Hiển thị placeholder nếu không có src
        <div
          className={`dark:bg-gray-800 bg-gray-100 border-2 border-dashed dark:border-gray-600 border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 text-center h-${height}`}
        >
          <ImageIcon className="w-12 h-12 dark:text-gray-500 text-gray-400 mb-4" />
          <p className="dark:text-gray-400 text-gray-600 text-sm">{description}</p>
        </div>
      )}
      {caption && <p className="text-center text-sm dark:text-gray-500 text-gray-600 mt-2 italic">{caption}</p>}

      {/* Image Modal */}
      {imageSrc && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          src={imageSrc}
          alt={description}
          caption={caption}
        />
      )}
    </div>
  );
};

export default ImagePlaceholder;
