import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Swagger config
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Automatic football league API',
            version: '1.0.0',
            description: 'API for soccer simulator',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./src/index.ts'], // folder for Swagger JSDoc
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(swaggerDocs));


/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome message
 *     responses:
 *       200:
 *         description: API for the Automatic Footbot League.
 */


app.get('/', (req, res) => {
    res.send('Automatic Footbot League is warming up...');

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
})


