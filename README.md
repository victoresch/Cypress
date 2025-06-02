
# 🧪 Automatización de Test Store usando Cypress

Este repositorio contiene pruebas automatizadas de extremo a extremo (E2E) para el sitio [https://automationteststore.com], desarrolladas con **Cypress** utilizando el **patrón Page Object Model (POM)**, organizadas en flujos web y mobile haciendo uso de variable de entorno para ejecutar los test mobile.

---

## 📁 Estructura del Proyecto

```
cypress/
├── e2e/
│   ├── desktop/       # Casos de prueba para escritorio
│   └── mobile/        # Casos de prueba para mobile
├── fixtures/          # Datos mock (no utilizados en esta prueba)
├── pages/             # Page Objects (POM)
└── support/           # Comandos personalizados y config global
```

---

## 🧪 Casos de prueba implementados

### Desktop
- 🔐 Login válido e inválido
- 🔍 Búsqueda de productos (existente / inexistente)
- 🛒 Agregar al carrito desde una categoría
- ❌ Eliminar productos del carrito
- 📬 Enviar formulario de contacto

### Mobile
- 📂 Navegación por menú mobile
- 🔍 Búsqueda de productos desde mobile
- 🛒 Agregar producto desde mobile y verificar carrito

---

## 🚀 Scripts de ejecución

🖥️ Modo Interactivo
npx cypress open                     # Ejecutar en modo escritorio
npx cypress open --env viewport=mobile  # Ejecutar en modo mobile

⚡ Modo Headless (sin interfaz gráfica)
  # 🖥️ Ejecutar pruebas desktop
npm run test:desktop

# 📱 Ejecutar pruebas mobile
npm run test:mobile

# 🧪 Ejecutar ambas suites (mobile + desktop)
npm run test:all


> 📌 El flag `--env viewport=mobile` puede usarse para personalizar lógica condicional si fuera necesario en el futuro.

---

## 🧱 Patrón de diseño: Page Object Model (POM)

Todos los selectores y lógica de interacción están encapsulados en archivos bajo `cypress/pages/`. Esto mejora el mantenimiento y legibilidad.

Ejemplo:

```js
// HomePage.js
class HomePage {
  visit() {
    cy.visit('/');
  }

  searchFor(productName) {
    cy.get('#filter_keyword').type(productName);
    cy.get('.button-in-search').click();
  }

  expandMobileMenu(itemText) {
    cy.get('#categorymenu select option').then($options => {
      const match = [...$options].find(opt => opt.textContent.trim() === itemText);
      if (match) {
        cy.get('#categorymenu select').select(match.value, { force: true });
      } else {
        throw new Error(\`Opción "\${itemText}" no encontrada en el menú.\`);
      }
    });
  }
}
```

---

## 💡 Buenas prácticas seguidas

- ✅ Separación clara entre desktop y mobile (`/desktop`, `/mobile`)
- ✅ Uso consistente de `beforeEach` para setup
- ✅ Validación de mensajes esperados tras cada acción
- ✅ Código modular y reutilizable

---

## 🛠 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Node.js

---

## 📌 Notas adicionales

- Las pruebas se realizan en el entorno público del sitio `https://automationteststore.com`.
- No se requieren datos sensibles ni autenticación real.
- Este proyecto puede ser extendido fácilmente a flujos de checkout, filtros o navegación avanzada.

---

## ✍️ Autor

Pruebas creadas por [Victor Estupiñan] como parte de una prueba técnica en automatización.
