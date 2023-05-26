const diaSelect = document.getElementById('dia');
const almuerzoSection = document.querySelector('.almuerzo');
const cenaSection = document.querySelector('.cena');
const imprimirButton = document.getElementById('imprimir');

function mostrarMenu() {
  const dia = diaSelect.value;
  switch (dia) {
    case '1':
      almuerzoSection.innerHTML = `
        
      `;

      cenaSection.innerHTML = `
        <h3>Cena</h3>
        <ul>
          <li>Ensalada Lucho's Cheff</li>
          <li>Crepe de Ternera Desmechada en Salsa de Puerros</li>
          <li>Brownie con Helado de Americana</li>
        </ul>
      `;
      break;
    case '2':

      almuerzoSection.innerHTML = `
        <h3>Almuerzo</h3>
        <ul>
          <li>Muzzarellitas Panadas con Salsa Alexander</li>
          <li>Muslitos Deshuesados al Ajillo con Verduras Asadas</li>
          <li>Helado Almendrado</li>
        </ul>
      `;
      cenaSection.innerHTML = `
        <h3>Cena</h3>
        <ul>
          <li>Ensalada Caesar con Pollo</li>
          <li>Milanesa de Peceto Napolitana</li>
          <li>Bombon Suizo</li>
        </ul>
      `;
      break;
    case '3':
    
      almuerzoSection.innerHTML = `
        <h3>Almuerzo</h3>
        <ul>
          <li>Ensalada Caprese</li>
          <li>Bondiola Braseada</li>
          <li>Budín de Pan</li>
        </ul>
      `;
      cenaSection.innerHTML = `
        <h3>Cena</h3>
        <ul>
          <li>Empanada Criolla</li>
          <li>Suprema con Arroz Pilaff</li>
          <li>Casatta Tricolor</li>
        </ul>
      `;
      break;
    case '4':
      almuerzoSection.innerHTML = `
        <h3>Almuerzo</h3>
        <ul>
          <li>Bruschetta Mediterránea</li>
          <li>Tallarín Parisienne</li>
          <li>Crumble de Manzana con Helado</li>
        </ul>
      `;
      cenaSection.innerHTML = `
        <h3>Cena</h3>
        <ul>
          <li>Papas Cheddar</li>
          <li>Carne al Horno Braseada</li>
          <li>Mousse de Chocolate con Frutos Rojos</li>
        </ul>
      `;
      break;
    default:
      almuerzoSection.innerHTML = '';
      cenaSection.innerHTML = '';
      alert('Por favor seleccione un día válido');
      diaSelect.value = '1'; // añadir esta línea para que vuelva al primer día después de mostrar el error
  }
}

imprimirButton.addEventListener('click', () => {
  window.print();
});

// Añadir funcionalidad para mostrar el menú del día actual al cargar la página
mostrarMenu();

// Añadir listener para el evento 'change' del select para actualizar el menú al cambiar de día
diaSelect.addEventListener('change', mostrarMenu);

switch (dia) {
    case '1':
      almuerzoSection.innerHTML = `
        ...
      `;
      cenaSection.innerHTML = `
        ...
      `;
      break;
    case '2':
      almuerzoSection.innerHTML = `
        ...
      `;
      cenaSection.innerHTML = `
        ...
      `;
      break;
    case '3':
      almuerzoSection.innerHTML = `
        ...
      `;
      cenaSection.innerHTML = `
        ...
      `;
      break;
    case '4':
      almuerzoSection.innerHTML = `
        <h2>Almuerzo</h2>
        <ul>
          <li>Parrilla Mixta</li>
          <li>Empanadas de Carne y Pollo</li>
          <li>Ensalada Mixta</li>
        </ul>
      `;
      cenaSection.innerHTML = `
        <h2>Cena</h2>
        <ul>
          <li>Pollo al Curry con Arroz</li>
          <li>Ensalada de Frutas</li>
          <li>Helado de Chocolate</li>
        </ul>
      `;
      break;
    default:
      almuerzoSection.innerHTML = '';
      cenaSection.innerHTML = '';
      alert('Por favor seleccione un día válido');
      diaSelect.value = '1';
      mostrarMenu();
      break;
  }
  