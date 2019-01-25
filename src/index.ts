import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as basicAuth from 'express-basic-auth';

const app: express.Application = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(basicAuth({
    challenge: true, // open popup in browser
    users: {
        // username : password
        'admin': 'admin',
    }
}));

app.get('/', (req, res) => {
    res.send('Successfully logged in!');
});

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', `Production Express server running at http://localhost:${PORT}/`);
});