//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const path = require("path");
const fs = require("fs");

//const options = {
//key: fs.readFileSync('/etc/pki/tls/private/cornejomultyservicios.com.key'),
//cert: fs.readFileSync('/etc/pki/tls/certs/cornejomultyservicios.com.cert')
//};

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    //hour: "numeric",
    //minute: "numeric"
  };

  var day = today.toLocaleDateString("es-vzla", options);

  res.render("index", {
    kindOfDay: day,
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.ejs");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us20.api.mailchimp.com/3.0/lists/c435cc622f";

  const options = {
    method: "POST",
    auth: "marco1:755a67bb1a946ab38dea5ba059c7886a-us20",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(
        __dirname + "/felicitaciones-te-subcribiste-exitosamente.html"
      );
    } else {
      res.sendFile(__dirname + "/algo-salio-mal-intenta-de-nuevo");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.get("/http://localhost:3000/", function (req, res, html) {
  res.sendFile(path.join(__dirname + "http://localhost:3000/"));
});

app.get("/index.html", function (req, res, html) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get(
  "/proyecto.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname +
        "/proyecto.html"
      )
    );
  }
);

app.get(
  "/proyectoclarines.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname +
        "/proyectoclarines.html"
      )
    );
  }
);

app.get(
  "/proyectoBarcelona.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname +
        "/proyectoBarcelona.html"
      )
    );
  }
);

app.get(
  "/Como-puedo-crear-contenido-valioso-y-relevante-para-mi-sitio-web.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname +
        "/Como-puedo-crear-contenido-valioso-y-relevante-para-mi-sitio-web.html"
      )
    );
  }
);

app.get("/Que-hacer-si-mi-laptop-no-prende.html", function (req, res, html) {
  res.sendFile(path.join(__dirname + "/Que-hacer-si-mi-laptop-no-prende.html"));
});

app.get(
  "/Como-saber-si-mi-laptop-tiene-problemas-de-ram.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname + "/Como-saber-si-mi-laptop-tiene-problemas-de-ram.html"
      )
    );
  }
);

app.get(
  "/Proyecto.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname + "/Proyecto.html"
      )
    );
  }
);

app.get(
  "/Como-saber-si-mi-laptop-tiene-problemas-targeta-madre.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname + "/Como-saber-si-mi-laptop-tiene-problemas-targeta-madre.html"
      )
    );
  }
);

app.get(
  "/Cuales-son-los-problemas-mas-comunes-con-laptops.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname + "/Cuales-son-los-problemas-mas-comunes-con-laptops.html"
      )
    );
  }
);

app.get(
  "/Como-saber-si-mi-laptop-tiene-problemas-de-video.html",
  function (req, res, html) {
    res.sendFile(
      path.join(
        __dirname + "/Como-saber-si-mi-laptop-tiene-problemas-de-video.html"
      )
    );
  }
);




//app.get('/http://localhost:5001/', function(req, res, html) {
//  res.sendFile(path.join(__dirname + 'http://localhost:5001/'));
//});

// Arranque del servidor
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
