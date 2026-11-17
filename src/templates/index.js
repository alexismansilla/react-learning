export const datosFake = {
  nombre: "Alexis Mansilla",
  correo: "alexis.mansilla@ejemplo.com",
  cargo: "Full-stack",
};

export const template = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Confirmación de Postulación — AquaChile</title>
  </head>
  <body style="margin: 0; padding: 24px; background-color: #f8f9fa; font-family: Arial, sans-serif;">
    <div style="max-width: 520px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 8px;">
      <h2 style="color: #0d6efd; margin-top: 0;">AquaChile — Confirmación de Postulación</h2>
      <p>Hola <strong>${datosFake.nombre}</strong>,</p>
      <p>Hemos recibido correctamente tu postulación de prueba en nuestro sistema.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;"><strong>Nombre:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${datosFake.nombre}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;"><strong>Correo:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${datosFake.correo}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;"><strong>Cargo:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${datosFake.cargo}</td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;
