<?php
class Conexion
{
    public $db;

    public function __construct()
    {
        $this->db = new mysqli("localhost", "root", "", "tema10");
        if ($this->db->connect_errno) {
            throw new Exception('ERROR');
        }
    }

    public function getIdNombre()
    {
        $sql = "
            SELECT 
                datos.id,
                datos.nombre
            FROM
                datos
            ORDER BY 
                datos.id
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute();

        $result = $stmt->get_result();

        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    public function getTodo($id)
    {
        $sql = "
            SELECT 
                datos.id,
                datos.nombre,
                datos.apellidos,
                datos.ciudad
            FROM
                datos
            WHERE
                datos.id = ?
            ORDER BY 
                datos.id
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->bind_param('i', $id);

        $stmt->execute();

        $result = $stmt->get_result();

        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    }
}

// Instancio la clase y llamo a la función
$conn = new Conexion();

if ($_GET['id']) {
    $conn->getTodo($_GET['id']);
} else {
    $conn->getIdNombre();
}
?>