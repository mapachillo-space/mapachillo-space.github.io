import { useRef, useEffect, useState } from 'react';
import './DDMHeader.css';
import BannerPattern from '@/assets/banner-pattern.svg?react';
import Logo from '@/assets/logo.svg?react';

const DDMHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<SVGSVGElement>(null); // SVG element for the pattern
  const [containerWidth, setContainerWidth] = useState(0);
  const [bannerWidth, setBannerWidth] = useState(180);

  useEffect(() => {
    const updateMeasurements = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (bannerRef.current) {
        setBannerWidth(bannerRef.current.getBoundingClientRect().width);
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  const bannerCount = Math.ceil(containerWidth / bannerWidth) + 1;

  return (
    <header className="ddm-header" ref={containerRef}>
      <div className="ddm-banner-container">
        {/* hidden banner for measuring */}
        <div className="ddm-banner-measure" aria-hidden="true">
          <BannerPattern ref={bannerRef} className="ddm-banner-svg" />
        </div>

        {Array.from({ length: bannerCount }).map((_, i) => (
          <BannerPattern key={`banner-${i}`} className="ddm-banner-svg" />
        ))}
      </div>
      <Logo className="ddm-logo" />
    </header>
  );
};

export default DDMHeader;
