// App de horarios con enfoque funcional y persistencia en localStorage.

const STORAGE_KEY = 'scheduleClasses';

// Crea un id único simple para la clase.
const createId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

// Carga la lista de clases desde localStorage.
const loadClasses = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

// Guarda la lista de clases en localStorage.
const saveClasses = (classes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
};

// Valida que cada campo no esté vacío.
const validateClassData = ({ nombre, dia, hora }) => {
  if (!nombre?.trim()) return 'El nombre de la clase es obligatorio.';
  if (!dia?.trim()) return 'El día de la clase es obligatorio.';
  if (!hora?.trim()) return 'La hora de la clase es obligatoria.';
  return '';
};

// Genera una nueva clase y devuelve la lista actualizada.
const addClass = (classes, clase) => {
  const error = validateClassData(clase);
  if (error) return { error, classes };
  const nuevaClase = { ...clase, id: createId() };
  const updated = [...classes, nuevaClase];
  saveClasses(updated);
  return { classes: updated, error: '' };
};

// Elimina una clase por id y retorna lista actualizada.
const removeClass = (classes, id) => {
  const updated = classes.filter((clase) => clase.id !== id);
  saveClasses(updated);
  return updated;
};

// Muestra un mensaje de error en el formulario.
const showError = (message) => {
  const errorEl = document.getElementById('form-error');
  errorEl.textContent = message || '';
};

// Renderiza la lista de clases en la tabla.
const renderClasses = (classes) => {
  const listContainer = document.getElementById('classes-list');
  const emptyMessage = document.getElementById('empty-message');

  if (!classes.length) {
    listContainer.innerHTML = '';
    emptyMessage.style.display = 'block';
    return;
  }

  emptyMessage.style.display = 'none';

  const rows = classes
    .map(
      (clase) => `
        <tr>
          <td>${clase.nombre}</td>
          <td>${clase.dia}</td>
          <td>${clase.hora}</td>
          <td>
            <button class="btn btn-sm btn-outline-danger delete-class-btn" data-id="${clase.id}">Borrar</button>
          </td>
        </tr>
      `
    )
    .join('');

  listContainer.innerHTML = `
    <table class="table table-bordered table-striped mb-0">
      <thead class="table-light"><tr><th>Clase</th><th>Día</th><th>Hora</th><th>Acción</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
};

// Inicializa eventos y renderizado.
const init = () => {
  let classes = loadClasses();

  const form = document.getElementById('class-form');
  const inputName = document.getElementById('class-name');
  const inputDay = document.getElementById('class-day');
  const inputTime = document.getElementById('class-time');
  const clearBtn = document.getElementById('clear-all-btn');
  const listContainer = document.getElementById('classes-list');

  const refresh = (nextClasses) => {
    classes = nextClasses;
    renderClasses(classes);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showError('');

    const clase = {
      nombre: inputName.value,
      dia: inputDay.value,
      hora: inputTime.value,
    };

    const result = addClass(classes, clase);
    if (result.error) {
      showError(result.error);
      return;
    }

    refresh(result.classes);
    form.reset();
    inputName.focus();
  });

  listContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('delete-class-btn')) return;
    const id = target.dataset.id;
    refresh(removeClass(classes, id));
  });

  clearBtn.addEventListener('click', () => {
    classes = [];
    saveClasses(classes);
    refresh(classes);
  });

  renderClasses(classes);
};

document.addEventListener('DOMContentLoaded', init);
