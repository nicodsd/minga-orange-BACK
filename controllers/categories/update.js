/* import Category from '../../models/Category.js'

const update = async (req, res, next) => {
    try {
        let update = await Category.updateOne(
            { _id:req.params.id } //objeto de busqueda de lo que se quiere modificar
            req.body    //objeto con la modificacion (modifica una, dos o todas las propiedades que envie el cliente)
        )
        if(update.modifiedCount) {
            return res.status(200).json({
                succes: true,
                message: 'updated',
                update
            })
        } else {
            return res.status(400).json({
                succes: false,
                message: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
}
export default update */

import Category from "../../models/Category.js"

const update = async(req,res,next)=>{
    try{
        let update = await Category.findOneAndUpdate(
            { _id:req.params.id },//objeto de busqueda
            req.body//objeto con las modificaciones
            //opcional el objeto para que devuelva el objeto modificado o el obj previo a la modificacion
        )
        return res.status(200).json({
            success: true,
            update
        })
    } catch (error){
        next(error)
    }
}

export default update