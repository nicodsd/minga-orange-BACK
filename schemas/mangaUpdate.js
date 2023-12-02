import joi from "joi-oid";

export const mangaUpd = joi.object({
    title: joi.string()
        .messages({
            'any.required': 'Invalid Title'
        }),
    cover_photo: joi.string()
        .uri()
        .messages({
            'any.required': 'Url invalid',
            'string.uri': 'Url invalid'
        }),
    description: joi.string()
        .min(10)
        .messages({
            'string.min': 'Description too short'
        }),
    category_id: joi.objectId()
        .messages({
            'any.required': 'Category id invalid',
        })
});