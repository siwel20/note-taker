const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static('public'));


htmlRoutes(app)
apiRoutes(app)
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});