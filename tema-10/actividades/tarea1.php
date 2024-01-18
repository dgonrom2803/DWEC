<?php

class RecogerDatos {
    private $db;
    private $datoID;

    public function __construct()
    {
        // Conexión con la base de datos 
        $this->db = new mysqli("localhost", "root", "", "tema10");

        // Recogemos el dato recibido por ajax
        $this->datoID = isset($_GET['id']) ? $_GET['id'] : '';

        // Si nuestro id está vacío, entramos en la función para recoger el id y el nombre 
        // de lo contrario, recogemos los datos de ese id
        if (empty($this->datoID)) {
            $this->recogerIdNombre();
        } else {
            $this->recogerDatos($this->datoID);
        }
    }

    public function recogerIdNombre()
    {
        $sql = "SELECT id, nombre FROM datos ORDER BY id";

        $stmt = $this->db->prepare($sql);
        $stmt->execute();

        $result = $stmt->get_result();
        $datos = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($datos);
    }

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

$clase = new RecogerDatos;

?>
