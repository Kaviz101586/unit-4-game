var activeHero;
var activeEnemy;
var defeatedEnemy;
var selectedHero=false;
var selectedEnemy=false;

var hp;
var ap;
var cp;

var heroes = {
    luke: {
        name: "Luke Skywalker",
        image: "assets/images/Luke_Skywalker_ROTJ.png",
        heroId: "#Luke",
        faction: "good",
        hp: 200,
        ap: 25,
        cp: 25
    },
    owk: {
        name: "Obi Wan Kenobi",
        image: "assets/images/5c1e46f9f3a8427ed791d882798e35e0d09ba438e1f6ca815811eef154412b9a_4076420.jpg",
        heroId: "#OWK",
        faction: "good",
        hp: 200,
        ap: 25,
        cp: 25
    },
    rey: {
        name: "Rey",
        image: "assets/images/star_wars_the_last_jedi_rey_jedi_training_sixth_sc_by_werewolfblooddarui-dbr50sz.png",
        heroId: "#Rey",
        faction: "good",
        hp: 200,
        ap: 25,
        cp: 25
    },
    yoda: {
        name: "Yoda",
        image: "assets/images/yoda.jpg",
        heroId: "#Yoda",
        faction: "good",
        hp: 200,
        ap: 25,
        cp: 25
    },
    vader: {
        name: "Darth Vader",
        image: "assets/images/empire-strikes-back_1920x1080.jpg",
        heroId: "#Vader",
        faction: "evil",
        hp: 200,
        ap: 25,
        cp: 25
    },
    maul: {
        name: "Darth Maul",
        image: "assets/images/darth-maul-star-wars-cardboard-stand-up_13577493.jpg",
        heroId: "#Maul",
        faction: "evil",
        hp: 200,
        ap: 25,
        cp: 25
    },
    kylo: {
        name: "Kylo Ren",
        image: "assets/images/kylo-ren-foto.jpg",
        heroId: "#Kylo",
        faction: "evil",
        hp: 200,
        ap: 25,
        cp: 25
    },
    palpatine: {
        name: "Darth Sidious",
        image: "assets/images/Star-Wars-Darth-Sidious-solo-movie.jpg",
        heroId: "#Palp",
        faction: "evil",
        hp: 200,
        ap: 25,
        cp: 25
    }
}

$(document).ready(function() {
    $("#Luke").click(function() {
        if (!selectedHero) {
            $("#Luke").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Luke").appendTo("#attackerPlaceholder");
            $("#Luke").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#Luke").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#Luke").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Luke").appendTo("#defenderPlaceholder");
            $("#Luke").animate({opacity: '1.0'},"slow");
            $("#Luke").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
    })


    $("#OWK").click(function() {
        if (!selectedHero) {
            $("#OWK").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#OWK").appendTo("#attackerPlaceholder");
            $("#OWK").animate({opacity: '1.0'},"slow");
            $("#Luke").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#OWK").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#OWK").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#OWK").appendTo("#defenderPlaceholder");
            $("#OWK").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
    })

    $("#Rey").click(function() {
        if (!selectedHero) {
            $("#Rey").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Rey").appendTo("#attackerPlaceholder");
            $("#Rey").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Luke").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#Rey").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#Rey").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Rey").appendTo("#defenderPlaceholder");
            $("#Rey").animate({opacity: '1.0'},"slow");
            $("#Rey").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })


    $("#Yoda").click(function() {
        if (!selectedHero) {
            $("#Yoda").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Yoda").appendTo("#attackerPlaceholder");
            $("#Yoda").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Luke").animate({opacity: "0"})
            $("#Yoda").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
           
        }
        else if (!selectedEnemy) {
            $("#Yoda").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Yoda").appendTo("#defenderPlaceholder");
            $("#Yoda").animate({opacity: '1.0'},"slow");
            $("#Yoda").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Vader").click(function() {
        if (!selectedHero) {
            $("#Vader").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Vader").appendTo("#attackerPlaceholder");
            $("#Vader").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Vader").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#Vader").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Vader").appendTo("#defenderPlaceholder");
            $("#Vader").animate({opacity: '1.0'},"slow");
            $("#Vader").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Maul").click(function() {
        if (!selectedHero) {
            $("#Maul").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Maul").appendTo("#attackerPlaceholder");
            $("#Maul").animate({opacity: '1.0'},"slow");
            $("#Vader").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Maul").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
           
        }
        else if (!selectedEnemy) {
            $("#Maul").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Maul").appendTo("#defenderPlaceholder");
            $("#Maul").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Kylo").click(function() {
        if (!selectedHero) {
            $("#Kylo").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Kylo").appendTo("#attackerPlaceholder");
            $("#Kylo").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Vader").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Kylo").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#Kylo").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Kylo").appendTo("#defenderPlaceholder");
            $("#Kylo").animate({opacity: '1.0'},"slow");
            $("#Kylo").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })  
    $("#Palp").click(function() {
        if (!selectedHero) {
            $("#Palp").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Palp").appendTo("#attackerPlaceholder");
            $("#Palp").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Vader").animate({opacity: "0"})
            $("#Palp").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            
        }
        else if (!selectedEnemy) {
            $("#Palp").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Palp").appendTo("#defenderPlaceholder");
            $("#Palp").animate({opacity: '1.0'},"slow");
            $("#Palp").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
        }
        else 
            alert("You must deal with this enemy first!")
        })
    })