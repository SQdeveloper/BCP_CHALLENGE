# Tracking del Experimento A/B

## Objetivo

Medir el impacto de las variantes del banner en el comportamiento del usuario dentro de la landing.

---

## Eventos implementados

### 1. Banner View

```js
{
  event: 'experiment_view',
  action: 'view_banner',
  variant: 'A | B',
  label: 'banner_loaded'
}
```

---

### 2. Click CTA

```js
{
  event: 'experiment_event',
  action: 'click_cta',
  variant: 'A | B',
  label: 'Solicita ahora | Aplica ya'
}
```

---

### 3. Scroll al formulario

```js
{
  event: 'experiment_event',
  action: 'scroll_form',
  variant: 'A | B',
  label: 'form_visible'
}
```

---

### 4. Submit del formulario

```js
{
  event: 'experiment_event',
  action: 'submit_form',
  variant: 'A | B',
  label: 'form_submit'
}
```

---

## Métricas derivadas

- CTR → click_cta / view_banner
- Conversion Rate → submit_form / click_cta

---

## Consideraciones

- Se asegura persistencia de variante mediante localStorage
- Se evita pérdida de atribución usando una landing single-page
- Los eventos están diseñados para ser compatibles con GTM
