var activeHero;
var activeEnemy;
var selectedHero=true;
var hp;
var ap;
var cp;

var heroes = {
    luke: {
        name: "Luke Skywalker",
        image: "assets/images/Luke_Skywalker_ROTJ.png",
        heroId: "#Luke",
        hp: 200,
        ap: 25,
        cp: 25
    },
    owk: {
        name: "Obi Wan Kenobi",
        image: "assets/images/5c1e46f9f3a8427ed791d882798e35e0d09ba438e1f6ca815811eef154412b9a_4076420.jpg",
        heroId: "#OWK",
        hp: 200,
        ap: 25,
        cp: 25
    },
    rey: {
        name: "Rey",
        image: "assets/images/star_wars_the_last_jedi_rey_jedi_training_sixth_sc_by_werewolfblooddarui-dbr50sz.png",
        heroId: "#Rey",
        hp: 200,
        ap: 25,
        cp: 25
    },
    yoda: {
        name: "Yoda",
        image: "assets/images/yoda.jpg",
        heroId: "#Yoda",
        hp: 200,
        ap: 25,
        cp: 25
    }
}

var villains = {
    vader: {
        name: "Darth Vader",
        image: "assets/images/empire-strikes-back_1920x1080.jpg",
        heroId: "#Vader",
        hp: 200,
        ap: 25,
        cp: 25
    },
    maul: {
        name: "Darth Maul",
        image: "assets/images/darth-maul-star-wars-cardboard-stand-up_13577493.jpg",
        heroId: "#Maul",
        hp: 200,
        ap: 25,
        cp: 25
    },
    kylo: {
        name: "Kylo Ren",
        image: "assets/images/kylo-ren-foto.jpg",
        heroId: "#Kylo",
        hp: 200,
        ap: 25,
        cp: 25
    },
    palpatine: {
        name: "Darth Sidious",
        image: "assets/images/Star-Wars-Darth-Sidious-solo-movie.jpg",
        heroId: "#Palp",
        hp: 200,
        ap: 25,
        cp: 25
    }
}

$("#Luke").on("click", function() {
    activeHero=
    activeHero.animate({ height: "300px", width: "300px" });
})