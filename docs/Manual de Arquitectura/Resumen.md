---
sidebar_position: 1
---

# Arquitectura de Solución de Casa Mosaico

# Decisiones de la Solución

Es importante considerar una gran variedad de factores para poder tomar las decisiones sobre qué herramientas y qué estrategias tomar a la hora de desarrollar la solución. En este caso, comenzaremos por decidir que solución de back-end se usará ya que otros factores dependerán de dicha decisión.

El desgloce de cada factor a considerar para la decisión sería demasiado largo para este resumen, por lo tanto se realizarán en sus respectivas secciones y aquí se colocará únicamente la conclusión.

Las tablas comparativas de cada framework se encuentran [en el siguiente link](https://docs.google.com/spreadsheets/d/1uozX1ccRj4kSYTOSV0WPLc1fdak2UQO6rOpb9yUyVmE/edit?usp=sharing).

## Backend

Para el backend se ha tomado la decisión de utilizar **Firebase** ya que es la que más simplifica las áreas relacionadas con las necesidades del proyecto y la curva de aprendizaje no es demasiado alta, por lo tanto consideramos factible tener un arranque ágil y mantener una buena velocidad de desarrollo.

Otra consideración fue AWS o Azure, sin embargo, aunque son más flexibles y tienen más funcionalidad, estas tienen mayor curva de aprendizaje e involucran mayor cantidad de trabajo para algunas tareas.

## Frontend

Decidimos usar Vue, ya que aunque contamos con un poco de curva de aprendizaje, tiene mejor integración con el hosting (usaremos algún hosting de sitio estático o sencillo como el de firebase o github pages) y con herramientas de automatización (CI, CD, etc.) y dicha curva de aprendizaje no es demasiado alta. Otra consideración grande fue Laravel ya que la curva de aprendizaje es bastante baja para el equipo, sin embargo no es muy compatible con el hosting elegido ni el backend.

## Otras Estructuras

- Debido a que usaremos Vue, se sugiere desarrollar una librería que nos sirva como API para interacción con Firebase, de tal manera propensamos la separación en MVC, evitamos repetición de código, facilitamos el desarrollo de pruebas unitarias, y se facilita el mantenimiento futuro. (Queda pendiente agregar esto en un diagrama formal de la arquitectura)
