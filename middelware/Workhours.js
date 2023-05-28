const { responsiveFontSizes } = require("@mui/material")

function Workhours (req, res, next) {
    let date = new date() //current time
    let hours = date.getHours()
    let day = date.getDay()
    let oppeningday = [1,2,3,4,5]
    if(oppeningday.includes(day) && hours >=9 && hours<=17)
    {return next()}
    else {res.redirect("/erreur")}

}
module.exports = Workhours