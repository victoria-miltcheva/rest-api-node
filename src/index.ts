import express from 'express';
import config from 'config';
import {
  connectToDatabase,
  initializeServices
} from './utilities/initialization';
import { RecordsRouter } from './routes/recordsRouter';

const app = express();
const port = config.get('port');

// Parse the URL-encoded data with the querystring library
app.use(express.urlencoded({ extended: false }));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to DB
connectToDatabase();

// Service initialization
const { databaseService } = initializeServices();

// Configure the Records routes
const recordsRouter = new RecordsRouter(databaseService);
app.get('/test', (req, res) => {
  res.send('test');
});
app.use('/', recordsRouter.router);

app.listen(port, () => {
  console.log('App listening on port', port);
});
