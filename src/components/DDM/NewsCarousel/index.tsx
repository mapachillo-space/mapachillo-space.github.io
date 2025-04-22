import { ReactNode } from 'react';
import './NewsCarousel.css';

interface CarouselProps {
  children: ReactNode;
}

export const NewsCarousel = ({ children }: CarouselProps) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">{children}</div>
    </div>
  );
};
export default NewsCarousel;
