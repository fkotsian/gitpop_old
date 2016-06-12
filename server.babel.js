import express from 'express';
import path from 'path';
const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function() {
  console.log('Server started at port: ' + app.get('port'));
});
