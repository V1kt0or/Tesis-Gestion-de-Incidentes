const express = require('express');
const incident = require('../components/incidentes/network')
const user = require('../components/usuarios/network')
const supp = require('../components/miembrosSop/network')
const colegio = require('../components/datosColegio/network')
const routes = function (server) {
    server.use('/incidentes', incident)
    server.use('/usuarios', user)
    server.use('/soporte', supp)
    server.use('/colegio', colegio)
}

module.exports = routes