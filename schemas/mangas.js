import Joi from "joi-oid";

const MangasSchema = Joi.object({
    author_id: Joi.objectId()
        .required()
        .messages({
            "any.required": "Author id required",
            "string.required": "Author required",
        }),
    company_id: Joi.objectId(),
    title: Joi.string()
        .required()
        .messages({
            'any.required': 'Title required',
            'string.empty': 'Title required'
        }),
    cover_photo: Joi.string()
        .custom((value, helpers) => {
            const regex = /^https?:\/\/storage\.googleapis\.com\/.*$/;

            if (regex.test(value)) {
                return value;
            }

            return helpers.error('any.invalid');
        }, 'Firebase URL validation')
        .required()
        .messages({
            'any.required': 'URL invalid',
            'string.empty': 'Image required',
            'any.invalid': 'URL invalid'
        }),
    description: Joi.string()
        .min(10)
        .required()
        .messages({
            'any.required': 'Description required',
            'string.required': 'Description required',
            'string.min': 'Description too short'
        }),
    category_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Category id required',
            'string.empty': 'Category id required'
        })
});

export default MangasSchema;