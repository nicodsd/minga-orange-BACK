import mercadopago from 'mercadopago'

const donation = async (req, res, next) => {

    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN_MP })

    try {
        const { unit_price } = req.body;

        // Crear la preferencia de donación con Mercado Pago
        const preference = {
            items: [
                {
                    title: 'Donation',
                    unit_price: parseFloat(unit_price),
                    quantity: 1,
                },
            ],
            back_urls: {
                success: 'https://www.youtube.com/watch?v=6I-BGW-XG_U',
                failure: '',
                pending: '',
            },
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(201).json({ preferenceId: response.body.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Oops! An error occurred while creating the donation preference.' });
    }
};

export default donation;
