var express = require('express');
var router = express.Router();



const cvData = {
  name: "Riki Chandra",
  address: "Jl. Rajawali no.14",
  email: "rikichandra20@mhs.mdp.ac.id",
  phone: "123-456-7890",
  education: [
    {
      school: "SMA Islam Az-Zahra",
      degree: "Sekolah Menengah Atas",
      major: "IPS",
      years: "2017 - 2020"
    },
    {
      school: "Universitas Multi Data Palembang",
      degree: "Strata 1",
      major: "Sistem Informasi",
      years: "2020 - 2024"
    }
  ],
  experience: [
    {
      company: "Bangkit Academy",
      position: "Studi Independen",
      years: "Feb 2023 - May 2023",
      description: "Android Developer"
    },
    {
      company: "Orbit Future Academy",
      position: "Studi Independen",
      years: "Agu 2022 - Dec 2022",
      description: "Ai Developer"
    }
  ]
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { cvData });
});

module.exports = router;
