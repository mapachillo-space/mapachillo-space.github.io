import './DosDeMilanesa.css';
import DDMHeader from '../components/DDM/DDMHeader';
import TranslateButton from '../components/DDM/TranslateButton';
import DevNews from '../components/DDM/Sections/DevNews';
import Concept from '../components/DDM/Sections/Concept';
import Controls from '../components/DDM/Sections/Controls';
import Characters from '../components/DDM/Sections/Characters';
import Ingredients from '../components/DDM/Sections/Ingredients';
import Team from '../components/DDM/Sections/Team';

const DosDeMilanesa = () => {
  return (
    <div className="dos-de-milanesa">
      <TranslateButton />
      <DDMHeader />
      <main className="ddm-content">
        <Concept />
        <DevNews />
        <Controls />
        <Characters />
        <Ingredients />
        <Team />
      </main>
    </div>
  );
};

export default DosDeMilanesa;
