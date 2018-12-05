var activeHero;
var activeEnemy;
var defeatedEnemy;
var selectedHero=false;
var selectedEnemy=false;
var songChange=false;
var firstAttack=false;
var audio = new Audio("assets/images/Lightsaber Clash-SoundBible.com-203518049.mp3")

var hp;
var ap;
var cp;

var heroArr = ["#luke","#owk","#rey","#yoda","#vader","#maul","#kylo","#palp"]

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
        hp: 400,
        ap: 10,
        cp: 20
    },
    rey: {
        name: "Rey",
        image: "assets/images/star_wars_the_last_jedi_rey_jedi_training_sixth_sc_by_werewolfblooddarui-dbr50sz.png",
        heroId: "#Rey",
        faction: "good",
        hp: 100,
        ap: 30,
        cp: 15
    },
    yoda: {
        name: "Yoda",
        image: "assets/images/yoda.jpg",
        heroId: "#Yoda",
        faction: "good",
        hp: 150,
        ap: 50,
        cp: 50
    },
    vader: {
        name: "Darth vader",
        image: "assets/images/empire-strikes-back_1920x1080.jpg",
        heroId: "#Vader",
        faction: "evil",
        hp: 400,
        ap: 10,
        cp: 20
    },
    maul: {
        name: "Darth Maul",
        image: "assets/images/darth-maul-star-wars-cardboard-stand-up_13577493.jpg",
        heroId: "#Maul",
        faction: "evil",
        hp: 100,
        ap: 30,
        cp: 15
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
        hp: 150,
        ap: 50,
        cp: 50
    }
}

$(document).ready(function() {
    $("#yourHp").hide();
    $("#enemyHp").hide();
    

    $("#Luke").click(function() {
        if (!selectedHero) {
            $(".goodhp").empty();
            $("#Luke").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Luke").appendTo("#attackerPlaceholder");
            $("#Luke").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#Luke").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.luke;
            
        }
        else if (!selectedEnemy) {
            $("#lukeHp").empty()
            $("#Luke").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Luke").appendTo("#defenderPlaceholder");
            $("#Luke").animate({opacity: '1.0'},"slow");
            $("#Luke").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.luke;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
    })


    $("#OWK").click(function() {
        if (!selectedHero) {
            $(".goodhp").empty();
            $("#OWK").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#OWK").appendTo("#attackerPlaceholder");
            $("#OWK").animate({opacity: '1.0'},"slow");
            $("#Luke").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#OWK").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.owk;
            
        }
        else if (!selectedEnemy) {
            $("#owkHp").empty()
            $("#OWK").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#OWK").appendTo("#defenderPlaceholder");
            $("#OWK").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.owk;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
    })

    $("#Rey").click(function() {
        if (!selectedHero) {
            $(".goodhp").empty();
            $("#Rey").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Rey").appendTo("#attackerPlaceholder");
            $("#Rey").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Luke").animate({opacity: "0"})
            $("#Yoda").animate({opacity: "0"})
            $("#Rey").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.rey;
            
        }
        else if (!selectedEnemy) {
            $("#reyHp").empty()
            $("#Rey").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Rey").appendTo("#defenderPlaceholder");
            $("#Rey").animate({opacity: '1.0'},"slow");
            $("#Rey").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.rey;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })


    $("#Yoda").click(function() {
        if (!selectedHero) {
            $(".goodhp").empty();
            $("#Yoda").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Yoda").appendTo("#attackerPlaceholder");
            $("#Yoda").animate({opacity: '1.0'},"slow");
            $("#OWK").animate({opacity: "0"})
            $("#Rey").animate({opacity: "0"})
            $("#Luke").animate({opacity: "0"})
            $("#Yoda").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.yoda;
           
        }
        else if (!selectedEnemy) {
            $("#yodaHp").empty()
            $("#Yoda").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Yoda").appendTo("#defenderPlaceholder");
            $("#Yoda").animate({opacity: '1.0'},"slow");
            $("#Yoda").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.yoda;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Vader").click(function() {
        if (!selectedHero) {
            $(".evilhp").empty();
            $("#Vader").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Vader").appendTo("#attackerPlaceholder");
            $("#Vader").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Vader").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.vader;
        }
        else if (!selectedEnemy) {
            $("#vaderHp").empty()
            $("#Vader").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Vader").appendTo("#defenderPlaceholder");
            $("#Vader").animate({opacity: '1.0'},"slow");
            $("#Vader").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.vader;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Maul").click(function() {
        if (!selectedHero) {
            $(".evilhp").empty();
            $("#Maul").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Maul").appendTo("#attackerPlaceholder");
            $("#Maul").animate({opacity: '1.0'},"slow");
            $("#Vader").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Maul").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.maul;
        }
        else if (!selectedEnemy) {
            $("#maulHp").empty()
            $("#Maul").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Maul").appendTo("#defenderPlaceholder");
            $("#Maul").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.maul;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })
    $("#Kylo").click(function() {
        if (!selectedHero) {
            $(".evilhp").empty();
            $("#Kylo").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Kylo").appendTo("#attackerPlaceholder");
            $("#Kylo").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Vader").animate({opacity: "0"})
            $("#Palp").animate({opacity: "0"})
            $("#Kylo").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.kylo;
        }
        else if (!selectedEnemy) {
            $("#kyloHp").empty()
            $("#Kylo").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Kylo").appendTo("#defenderPlaceholder");
            $("#Kylo").animate({opacity: '1.0'},"slow");
            $("#Kylo").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.kylo;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })  
    $("#Palp").click(function() {
        if (!selectedHero) {
            $(".evilhp").empty();
            $("#Palp").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Palp").appendTo("#attackerPlaceholder");
            $("#Palp").animate({opacity: '1.0'},"slow");
            $("#Maul").animate({opacity: "0"})
            $("#Kylo").animate({opacity: "0"})
            $("#Vader").animate({opacity: "0"})
            $("#Palp").animate({height: "400px", width: "350px"},"slow");
            $("#textbox1").text("")
            selectedHero = true;
            activeHero = heroes.palpatine;
        }
        else if (!selectedEnemy) {
            $("#palpHp").empty()
            $("#Palp").animate({left: '0px', top: '0px', opacity: '0.4'},"slow");
            $("#Palp").appendTo("#defenderPlaceholder");
            $("#Palp").animate({opacity: '1.0'},"slow");
            $("#Palp").animate({height: "400px", width: "350px"},"slow");
            selectedEnemy = true;
            activeEnemy = heroes.palpatine;
            $("#yourHp").show();
            $("#enemyHp").show();

            $("#yourHp").text("Health Points: " + activeHero.hp);
            $("#enemyHp").text("Health Points: " + activeEnemy.hp);
        }
        else 
            alert("You must deal with this enemy first!")
        })


        $("#attack").click(function() {
            if(!songChange) {
                $("#song").attr("src","assets/images/Star-Wars-Duel-of-the-Fates.mp3");
                songChange=true;
            }

            if (activeEnemy.hp <= 0) {
                selectedEnemy = false;
                $(activeEnemy.heroId).remove();
                $("enemyHp").hide();
                $("#textbox1").text("You've defeated your opponent! Choose another enemy")
            }

            else if (activeHero.hp <= 0) {
                selectedHero = false;
                activeHero.image.empty();
                $("#yourHp").hide();
                $("#textbox1").text("You lose! Try again!")
            }

            else {
                attack ()
                counter()
            }

            function attack() {
            if(!firstAttack) {
                $(activeHero.heroId).animate({left:"+=300px"}, "fast");
                $(activeHero.heroId).animate({left:"-=300px"}, "fast");
                audio.play();
                activeEnemy.hp = activeEnemy.hp - activeHero.ap; 
                activeEnemy.hp = Math.max(0,activeEnemy.hp);
                $("#enemyHp").text("Health Points: " + activeEnemy.hp);
                firstAttack=true;
            }

            else if (firstAttack) {
                $(activeHero.heroId).animate({left:"+=300px"}, "fast");
                $(activeHero.heroId).animate({left:"-=300px"}, "fast");
                audio.play();
                activeHero.ap = activeHero.ap*2
                activeEnemy.hp = activeEnemy.hp - activeHero.ap;
                activeEnemy.hp = Math.max(0,activeEnemy.hp);
                $("#enemyHp").text("Health Points: " + activeEnemy.hp);
            }}
  
            function counter() {
                $(activeEnemy.heroId).delay( 500 ).animate({left:"-=300px"}, "fast");
                $(activeEnemy.heroId).animate({left:"+=300px"}, "fast");
                $("#textbox1").text("You've attacked " + activeEnemy.name + ", dealing " + activeHero.ap + " in damage!");
                audio.play();
                activeHero.hp = activeHero.hp - activeEnemy.cp;
                activeHero.hp = Math.max(0,activeHero.hp);
                setTimeout(function() {
                    $("#textbox1").text("But " + activeEnemy.name + " has countered, dealing " + activeEnemy.cp + " in damage!") 
                }, 1000);
                $("#yourHp").text("Health Points: " + activeHero.hp);
                }}
        )
    })


    ////// things yet to resolve:

    // 1) delay change in text (split #textbox1 for "you've attacked! and but they're countered!")
    // 2) reload function after win/loss
    // 3) qualify how you win or lose (win = defeat 4 enemies, loss is when activeHero.hp <= 0)
    // 4) clear image completely after enemy is defeated - and allow replacement to take its place