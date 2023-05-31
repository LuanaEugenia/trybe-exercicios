import Title from './title';
import ModuleDetails from './moduleDetails';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  const name = 'Luana Eugênia';
  const birth = '05/03/1999';
  const age = calculateAge(birth);
  return (
    <>
      <h1>{`${name}`}</h1>
      <h3>{`Idade: ${age}`}</h3>
      <Title />
      <ModuleDetails />
    </>
  );
}
export default HelloWorld;
