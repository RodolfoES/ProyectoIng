# 📌 Endpoints necesarios para el backend de Truek-e

Este documento detalla los endpoints que el backend debe implementar para que el frontend funcione correctamente, según el diseño y diagrama de clases.

---

## 🔐 1. Autenticación de Usuario

| Acción           | Método | Endpoint          | Body (JSON)                                      | Respuesta esperada                        |
|------------------|--------|-------------------|-------------------------------------------------|------------------------------------------|
| Registrarse      | POST   | `/api/usuarios`   | `{nombre, apellido, correo, celular, contraseña}`| `{mensaje, id_usuario}`                   |
| Iniciar sesión   | POST   | `/api/login`      | `{correo, contraseña}`                           | `{token, usuario_id}`                     |

---

## 👤 2. Gestión de Perfil

| Acción           | Método | Endpoint                 | Body (JSON)                                   | Respuesta esperada             |
|------------------|--------|--------------------------|-----------------------------------------------|-------------------------------|
| Ver perfil propio | GET    | `/api/usuarios/:id`      | —                                             | `{datos del usuario}`          |
| Editar perfil    | PUT    | `/api/usuarios/:id`      | `{nombre, apellido, celular, fotoPerfil}`     | `{mensaje}`                   |
| Calificar usuario| POST   | `/api/calificaciones`    | `{puntuadorId, puntuadoId, valor, comentario}`| `{mensaje}`                   |

---

## 📦 3. Publicaciones (Objetos)

| Acción                  | Método | Endpoint             | Body (JSON)                                      | Respuesta esperada            |
|-------------------------|--------|----------------------|-------------------------------------------------|------------------------------|
| Listar objetos publicados| GET    | `/api/objetos`       | —                                               | `[lista de objetos]`          |
| Ver objeto específico   | GET    | `/api/objetos/:id`   | —                                               | `{detalle del objeto}`        |
| Publicar nuevo objeto   | POST   | `/api/objetos`       | `{nombre, descripcion, categoriaId, imagenes}` | `{mensaje, id}`               |
| Editar objeto           | PUT    | `/api/objetos/:id`   | `{nombre?, descripcion?, categoriaId?, imagenes?, estado?}` | `{mensaje}`                  |
| Eliminar objeto         | DELETE | `/api/objetos/:id`   | —                                               | `{mensaje}`                  |

---

## 🔄 4. Intercambios (Solicitudes)

| Acción                 | Método | Endpoint                     | Body (JSON)                                                            | Respuesta esperada           |
|------------------------|--------|------------------------------|------------------------------------------------------------------------|------------------------------|
| Enviar solicitud       | POST   | `/api/solicitudes`           | `{solicitanteId, receptorId, objetoSolicitadoId, objetoPropuestoId}`   | `{mensaje, id}`              |
| Ver solicitudes propias| GET    | `/api/solicitudes?usuarioId=…` | —                                                                    | `[lista de solicitudes]`     |
| Cambiar estado solicitud| PUT    | `/api/solicitudes/:id`       | `{estado}` donde estado ∈ EstadoSolicitud                              | `{mensaje}`                  |

---

## 🧑‍⚖️ 5. Moderación

| Acción                  | Método | Endpoint                    | Body (JSON)                     | Respuesta esperada          |
|-------------------------|--------|-----------------------------|--------------------------------|----------------------------|
| Ver objetos pendientes  | GET    | `/api/moderacion/pendientes`| —                              | `[lista de objetos]`        |
| Aprobar objeto          | PUT    | `/api/moderacion/aprobar/:id`| —                              | `{mensaje}`                 |
| Rechazar objeto         | PUT    | `/api/moderacion/rechazar/:id`| `{motivo}`                    | `{mensaje}`                 |

---

## 🛎️ 6. Notificaciones

| Acción                 | Método | Endpoint                      | Body (JSON) | Respuesta esperada          |
|------------------------|--------|-------------------------------|-------------|----------------------------|
| Ver notificaciones     | GET    | `/api/notificaciones/:idUsuario` | —           | `[notificaciones]`          |
| Marcar como leída      | PUT    | `/api/notificaciones/:id`      | —           | `{mensaje}`                 |

---

## Notas

- Todos los IDs deben ser UUID.
- El backend debe implementar autenticación (token JWT recomendado).
- Las respuestas siempre en JSON.
- Validar estados según enumeraciones definidas (`EstadoObjeto`, `EstadoSolicitud`, etc.).
