import './DosDeMilanesa.css';
import DDMHeader from '../components/DDM/DDMHeader';
import InfoCard from '../components/DDM/InfoCard';

const DosDeMilanesa = () => {
  return (
    <div className="dos-de-milanesa">
      <DDMHeader />
      <main className="ddm-content">
        <InfoCard id="concepto" title="Concepto">
          El cerdito Miguel tiene un carrito donde vende tortas, pero sus
          clientes tienen gustos bastante peculiares. Con el paso del tiempo, su
          carrito se vuelve cada vez más popular: visita nuevas ciudades, llegan
          más y más clientes, y Miguel empieza a incorporar nuevas tortas e
          ingredientes. Ahora, Miguel tiene que atenderlos a todos rápidamente y
          mantenerlos contentos, mientras trata de no desperdiciar comida y
          maximizar sus ganancias.
        </InfoCard>

        <InfoCard id="historia" title="Historia">
          <p>Aquí puedes añadir la historia del juego...</p>
        </InfoCard>
      </main>
    </div>
  );
};

export default DosDeMilanesa;
