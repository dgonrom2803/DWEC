<?php

/**
 * Clase para recoger datos de una base de datos mediante conexiones AJAX
 */
class RecogerDatos {
    public $db;
    public $datoID;

    public function __construct()
    {
        # Conexión con la base de datos 
        $this->db = new mysqli("localhost", "root", "", "tema10");

        # Recogemos el dato recibido por ajax
        $this->datoID = $_GET['id'];

        # Si nuestro id está vacío entramos en la función para recoger el id 
        # y el nombre 
        if ($this->datoID == '') {
            $this->recogerIdNombre();
        } else {
            # Si no, entramos para recoger los datos de ese ID
            $this->recogerDatos($this->datoID);
        }
    }

    /**
     * Función para recoger id y nombre de la tabla "datos"
     */
    public function recogerIdNombre()
    {
        $sql = "SELECT id, nombre FROM datos ORDER BY id";

        $stmt = $this->db->prepare($sql);

        $stmt->execute();

        $result = $stmt->get_result();
        $datos = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($datos);
    }

    /**
     * Función para recoger datos completos de la tabla "datos" por ID
     *
     * @param int $id - ID para filtrar los datos
     */
    public function recogerDatos($id)
    {
        $sql = "SELECT 
                    id,
                    nombre,
                    apellidos,
                    ciudad
                FROM
                    datos
                WHERE id = ? ORDER BY id";

        $stmt = $this->db->prepare($sql);

        $stmt->bind_param('i', $id);

        $stmt->execute();

        $result = $stmt->get_result();
        $datos = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($datos);
    }
}

# Instanciamos la clase para ejecutarla
$clase = new RecogerDatos;

?>
