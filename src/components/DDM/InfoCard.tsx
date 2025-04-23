import './InfoCard.css'; // Optional styling for the component

interface InfoCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ id, title, children }) => {
  return (
    <section className="info-card" id={id}>
      <h2>{title}</h2>
      <div className="info-content">{children}</div>
    </section>
  );
};

export default InfoCard;
