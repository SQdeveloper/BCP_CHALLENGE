# Landing de tarjetas de credito BCP – Jefferson Silva Quinto

## Descripción

Este proyecto consiste en el desarrollo de una landing experimental para validar una hipótesis de mejora en la conversión (CTR) hacia el formulario de solicitud de tarjetas de crédito del BCP.

La solución implementa un experimento A/B, junto con un sistema de tracking mediante `dataLayer`, simulando una integración con Google Tag Manager (GTM).

---

## Hipótesis

Modificar el color y el mensaje del banner principal puede aumentar el porcentaje de clics (CTR) hacia el formulario de solicitud.

---

## Objetivo

Incrementar el CTR del banner principal hacia el formulario, optimizando la experiencia visual y el copy del call-to-action (CTA).

---

## Análisis del experimento

El objetivo del experimento es comparar el CTR entre las variantes A y B.

Para determinar si la variante B es más efectiva, se analizarán las siguientes métricas:

- CTR por variante = click_cta / view_banner
- Tasa de conversión = submit_form / click_cta

---

### Interpretación

- Si la variante B presenta un CTR significativamente mayor, se valida la hipótesis de que un CTA más directo y mayor contraste visual mejora la conversión.
- Si no hay diferencia significativa, se concluye que el cambio visual no impacta el comportamiento del usuario.
- Si la variante A supera a la B, se rechaza la hipótesis inicial.

---

### Decisión

La decisión final se basará en la variante con mejor rendimiento estadístico y consistencia en las métricas de conversión.

---

## Diseño del experimento

Se implementaron dos variantes del banner:

| Variante | Color   | CTA              |
| -------- | ------- | ---------------- |
| A        | Azul    | "Solicita ahora" |
| B        | Naranja | "Aplica ya"      |

---

### Asignación de variante

- La variante se asigna de forma aleatoria al usuario.
- Se persiste en `localStorage` para mantener consistencia durante la sesión.

---

## Arquitectura de la solución

El proyecto sigue una estructura modular basada en separación de responsabilidades:

- **UI Components** → Banner, Benefits, Form
- **Hooks** → lógica de experimento y tracking
- **Utils** → integración con GTM (`dataLayer`)
- **Types** → tipado estricto con TypeScript

---

## Decisiones técnicas

### Single Page Application (SPA)

Se optó por una landing de una sola página para:

- Mantener un funnel completo de conversión
- Evitar pérdida de atribución entre eventos
- Simplificar el tracking del experimento

En un entorno multi-página, se requeriría persistencia adicional (ej. `localStorage` o query params) para mantener la variante del experimento.

---

### Centralización del tracking

Se implementó un hook personalizado (`useScrollTracking`) que:

- Maneja eventos automáticos (view, scroll)

Se implementó un hook personalizado (`useTracking`) que:

- Expone funciones para eventos manuales (click, submit)

Se implementó un hook personalizado (`useExperiment`) que:

- Asigna, guarda y devuelve la variante del experimento A/B para cada usuario.

Esto permite desacoplar la lógica de tracking de los componentes UI.

---

## Eventos implementados (GTM)

Todos los eventos se envían mediante:

```js
window.dataLayer.push();
```

### Estructura del evento

```js
{
  event: 'experiment_event',
  experimentId: 'bcp_banner_test_v1',
  action: 'click_cta',
  variant: 'A',
  label: 'Solicita ahora'
}
```

---

### Eventos trackeados

| Evento           | Acción      | Descripción                    |
| ---------------- | ----------- | ------------------------------ |
| experiment_view  | view_banner | Banner visible                 |
| experiment_event | click_cta   | Click en CTA                   |
| experiment_event | scroll_form | Formulario visible en viewport |
| experiment_event | submit_form | Envío del formulario           |

---

## Métricas clave

- **CTR** = `click_cta / view_banner`
- **Conversion Rate** = `submit_form / click_cta`

---

## Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite

---

## Deploy

🔗 [Ver proyecto en GitHub Pages](https://sqdeveloper.github.io/BCP_CHALLENGE/)

---

## Repositorio

🔗 [Ver código en GitHub](https://github.com/SQdeveloper/BCP_CHALLENGE)

---

## Consideraciones futuras

- Integración real con Google Tag Manager
- Persistencia de datos para análisis
- Implementación de test estadístico para validación de resultados
- Escalabilidad a múltiples experimentos simultáneos

---

## Autor

Jefferson Silva Quinto
