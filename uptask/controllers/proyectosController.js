const Proyectos = require('../models/Proyectos');
const slug = require('slug');

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  
  res.render('index', {
    nombrePagina: 'Proyectos',
    proyectos
  });
};

exports.formularioProyecto = (req, res) => {
  res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto'
  })
};

exports.nuevoProyecto = async (req, res) => {
  const { nombre } = req.body;

  let errores = [];

  if(!nombre) {
    errores.push({'texto': 'Agrega un nombre al proyecto'});
  }

  if(errores.length > 0 ) {
    res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo Proyecto',
      errores
    })
  } else {
    const url = slug(nombre).toLowerCase();
    const proyecto = await Proyectos.create({nombre, url});
    res.redirect('/');
  }
};