const express = require('express')
const mongoose = require('mongoose');
const animals = require('../models/animal');
const db = require('../src/db');

const routes = express.Router();

routes.get('/animais', async (req, res) => {
  try {
    const animais = await animals.find();
    res.status(200).json(animais);
  } catch (error) {
    res.status(500).json({ error: error })
  }
});

routes.get('/:continente', async (req, res) => {
  const { continente } = req.params; // Pega o continente a partir dos parâmetros da URL
  try {
    // Busca os animais pelo continente, retornando apenas os campos 'nome', 'imagem' e 'continente'
    const animais = await animals.find(
      { continente }, // Filtro: animais que pertencem ao continente
      'nome imagem continente' // Projeção: apenas esses campos serão retornados
    );
    res.status(200).json(animais); // Retorna os animais filtrados
  } catch (error) {
    res.status(500).json({ error: error.message }); // Envia uma resposta de erro se houver falha
  }
});

routes.get('sons', async (req, res) => {
  try {
    const sons = await animals.find(
    {som},
    'som'
  );
  res.status(200).json(sons);
  } catch(error) {
    res.status(500).json({error: error.message});
  }
});


module.exports = routes;