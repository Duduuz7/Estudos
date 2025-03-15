import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

app.get('/api/bandas/:nome', async (req, res) => {
  try {
    const { nome } = req.params;
    const response = await axios.get(`https://metal-api.dev/search/bands/name/${nome}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

app.get('/api/albuns/:nome', async (req, res) => {
    try {
        const { nome } = req.params;
        const response = await axios.get(`https://metal-api.dev/search/albums/title/${nome}`);
        res.json(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).json({ error: 'Erro ao buscar dados' });
      }
})

const porta = 3000;
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
