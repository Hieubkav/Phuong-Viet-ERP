
import React from 'react';
import { ImageIcon } from './icons/Icons';

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
  return (
    <div className={`w-${width} my-6`}>
      {src ? (
        // Hiển thị ảnh thật nếu có src
        <div className="rounded-lg overflow-hidden border dark:border-gray-600 border-gray-300">
          <img
            src={src}
            alt={description}
            className="w-full h-auto object-contain dark:bg-gray-800 bg-gray-100"
            style={{ maxHeight: '500px' }}
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
    </div>
  );
};

export default ImagePlaceholder;
