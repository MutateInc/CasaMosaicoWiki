---
sidebar_position: 1
---

# El Proyecto

Para tomar las decisiones más acertadas para el proyecto y para el equipo, es necesario tener como prioridad la necesidad del cliente, por lo cual en este documento se describirá de nivel más alto a más bajo el proceso y decisiones.

## Necesidad

La necesidad(es) identificada de Casa Mosaico al momento de redactar este documento son las siguientes:

```
1. Agilizar el proceso de registrar una factura (tanto de proveedores como de clientes), actualizar inventario, y mantener integridad de dicha información en el transcurso de un pedido.

2 (TENTATIVO). Identificar clientes que aún no han pagado parte o  la totalidad de algún pedido sin necesidad de realizar búsquedas extensivas en estados de cuenta con facturas y sin tener que esperar a que el banco emita dicho estado de cuenta.
```

## Beneficio Objetivo

Al momento de redactar este documento se tienen las siguientes propuestas de beneficio en una solución para las necesidades del cliente descritas en muy alto nivel, ya que aún no están aprovadas por cliente (Casa Mosaico).

```
1. En el proceso de registrar un movimiento, reducir los puntos de falla humana de 5 a 1, para el día 10 de junio.

2. Reducir el tiempo de registrar un movimiento a máximo 5 minutos, para el día 10 de junio.

3. Reducir el tiempo de identificar el saldo de un cliente a un máximo de 5 minutos, para el día 10 de junio.
```

## Procesos

Para entender y definir mejor el objetivo a lograr con la solución del cliente es necesario tener claridad con los procesos del cliente relacionados con las necesidades identificadas. Los cuales describiremos a continuación.

**Proceso 1 (Recepción Facturas de Proveedores):**

```
    0. [REQUISITO] Rocío usualmente el jueves corrobora inventario que tiene y calcula cuánto debe pedir.
    1. Escribe el pedido a proveedores.
    2. Recibe el pedido (entre martes y miércoles) con la factura del pedido. Corrobora que el pedido tenga lo mencionado en la factura y actualiza el inventario (en excel).
    3. Se ordenan los productos en base a fecha de caducidad (por lote).
```

**Proceso 2 (Generación de Facturas Órdenes de Venta a Clientes):**

```
    1. El cliente solicita por whatsapp (usualmente), o correo, el pedido indicando fecha de entrega necesaria.
        1.1 En caso de que el cliente no solicite, Rocío contacta al cliente para verificar si necesita algún producto.
    2. Se prepara el envío y se genera la factura.
        2.1 En caso de que no se requiera factura se envía con remisión (clientes que no usan factura).
        2.2 Se verifica que los productos no estén expirados.
    3. Se despacha el pedido (junto con factura impresa) y una vez que regresa la camioneta, se verifica si hubo productos que regresaron.
    4. Se actualiza el inventario con los productos que se fueron.
```

**Proceso 3 (Verificación de Créditos y Pagos):**

```
    Nota: algunos pagos se realizan en efectivo, otros por transferencia (usualmente).
    1. El banco emite el estado de cuenta (una vez por mes).
    2. Rocío recorre el estado de cuenta, movimiento por movimiento, buscando la factura que corresponda al monto de dicho movimiento.
    3. Una vez identificado un movimiento que corresponda con factura, se marca como pagado.
        3.1 En caso de que existan varias facturas con un mismo monto y falten movimientos en el estado de cuenta que correspondan a dichos montos, se solicita a los clientes un comprobante de pago.
```

## Otros Puntos a Considerar

- En el futuro, se considera que exista una persona para recepción de producto (proceso 1) y otra para generación de facturas (en caso de encontrar una API, esto se podría evitar). [formulario de recepción y nuevos usuarios por rol].
- Los datos de facturación podrían guardarse para agilizar la generación de facturas (e incluso para integración con API).
- Algunos pedidos tienen diferente precio debido al volumen de la orden.
- Datos importantes a guardar en el inventario es el precio de compra (neto), fecha de caducidad (tal vez por lote), presentación (contenedores, bolsas, etc.) y descripción.
- Podría ser útil guardar comprobantes/complementos de pago y las facturas.
- En ocasiones es necesario cancelar facturas.
- Versión de facturación es 4.0.
- También es necesario registrar a qué proveedor ya le ha pagado y a quién tiene pendiente pagarle.
- El sistema que usa Rocío actualmente para facturar es Contpaq.
- Podría ser útil imprimir el inventario del pedido para darlo al operador y pueda preparar el envío, asegurándose así de que tenga las mismas cantidades que se van a facturar y que se actualizarán del inventario.
- Hay que considerar qué sucede si Rocío se enferma y no puede trabajar presencialmente.
