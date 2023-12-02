import Author from "../models/Author.js";
import Company from "../models/Company.js";

const finds_id = async (req, res, next) => {
  const userId = req.user.id; // Obtener el ID del usuario autenticado

    try {
    // Buscar el autor correspondiente según el ID del usuario logueado
    const author = await Author.findOne({ user_id: userId });

    if (author) {
      req.body.author_id = author._id; // Agregar la propiedad author_id al req.body
      return next(); // Pasar al siguiente middleware o controlador
    }

    // Buscar la empresa correspondiente según el ID del usuario logueado
    const company = await Company.findOne({ user_id: userId });

    if (company) {
      req.body.company_id = company._id; // Agregar la propiedad company_id al req.body
      return next(); // Pasar al siguiente middleware o controlador
    }

    return res.status(404).json({
        error: "Autor o empresa no encontrado para el usuario logueado",
    });
    } catch (error) {
    return res.status(400).json({
        error: "Ha ocurrido un error",
    });
    }
};

export default finds_id;
