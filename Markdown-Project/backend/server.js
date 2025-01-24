const express = require('express');
const cors = require('cors');
const {marked} = require('marked');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('<h1>Server Running...</h1>')
})
app.post('/convert', (req, res) => {
    try {
      const { markdown } = req.body;
      if (!markdown) {
        return res.status(400).send({ error: 'Markdown content is required' });
      }
      const html = marked(markdown);
      res.send({ html });
    } catch (err) {
      res.status(400).send({ error: 'Invalid JSON format', details: err.message });
    }
});
  
  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
