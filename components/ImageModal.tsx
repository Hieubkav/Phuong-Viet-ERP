import React, { useEffect, useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src, alt, caption }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Đóng modal khi nhấn ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Ngăn scroll body khi modal mở
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset zoom khi đóng modal
  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen]);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative max-w-[95vw] max-h-[95vh] mx-4 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full"
          aria-label="Đóng modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute -top-12 right-16 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full"
          aria-label={isZoomed ? "Thu nhỏ" : "Phóng to"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isZoomed ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10h-3m-3 0h3m0 0V7m0 3v3"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            )}
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-auto">
          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400">Không thể tải ảnh</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{alt}</p>
            </div>
          )}

          {/* Image */}
          <img
            src={src}
            alt={alt}
            className={`object-contain cursor-pointer transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'max-w-full max-h-[80vh]'
            } ${isLoading || hasError ? 'hidden' : 'block'}`}
            style={{ minWidth: '300px' }}
            onClick={handleImageClick}
            onLoad={handleImageLoad}
            onError={handleImageError}
            title={isZoomed ? "Click để thu nhỏ" : "Click để phóng to"}
          />
          
          {/* Caption */}
          {caption && (
            <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700 border-gray-200">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
                {caption}
              </p>
            </div>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden absolute top-4 right-4 z-10 flex space-x-2">
          {/* Mobile Zoom Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label={isZoomed ? "Thu nhỏ" : "Phóng to"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isZoomed ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10h-3m-3 0h3m0 0V7m0 3v3" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              )}
            </svg>
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label="Đóng modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
