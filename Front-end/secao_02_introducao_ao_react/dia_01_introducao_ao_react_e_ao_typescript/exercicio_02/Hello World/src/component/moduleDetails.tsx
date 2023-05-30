function ModuleDetails() {
  const modulos = ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da computação'];
  return (
    <ul>
      <li>{modulos[0]}</li>
      <li>{modulos[1]}</li>
      <li>{modulos[2]}</li>
      <li>{modulos[3]}</li>
    </ul>
  );
}

export default ModuleDetails;
