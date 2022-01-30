import config from 'config';
import startServer from './utilities/startServer';

const server = startServer();
const port = config.get('port');

server.listen(port, () => {
  console.log('Server listening on port', port);
});
