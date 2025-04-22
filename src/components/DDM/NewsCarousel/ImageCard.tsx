import './NewsCarousel.css';
interface ImageCardProps {
  date: string;
  description: string;
  imageSrc: string;
  altText: string;
}

export const ImageCard = ({
  date,
  description,
  imageSrc,
  altText,
}: ImageCardProps) => {
  return (
    <div className="dev-card">
      <img src={imageSrc} alt={altText} />
      <p>
        <strong>{date}</strong> — {description}
      </p>
    </div>
  );
};
