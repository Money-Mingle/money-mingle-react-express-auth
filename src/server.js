const express = require('express');
const path = require('path');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const routes = require('./user-routes');
const Susuroutes = require('./susu-routes');
const inviteRoutes = require('./invite-routes');
const logRoutes = require('./middleware/log-routes');

const app = express();

app.use(handleCookieSessions);
app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);
app.use('/api', Susuroutes);
app.use('/api', inviteRoutes);

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
