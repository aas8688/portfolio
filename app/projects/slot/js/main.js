var symbolBlueA = {
    img: "svg/dogeBlue1.svg",
    color: "blue",
    type: "a"
};

var symbolBlueB = {
    img: "svg/dogeBlue2.svg",
    color: "blue",
    type: "b"
};

var symbolBlueC = {
    img: "svg/dogeBlue3.svg",
    color: "blue",
    type: "c"
};

var symbolRedA = {
    img: "svg/dogeRed1.svg",
    color: "red",
    type: "a"
};

var symbolRedB = {
    img: "svg/dogeRed2.svg",
    color: "red",
    type: "b"
};

var symbolRedC = {
    img: "svg/dogeRed3.svg",
    color: "red",
    type: "c"
};

var symbolYellowA = {
    img: "svg/dogeYellow1.svg",
    color: "yellow",
    type: "a"
};

var symbolYellowB = {
    img: "svg/dogeYellow2.svg",
    color: "yellow",
    type: "b"
};

var symbolYellowC = {
    img: "svg/dogeYellow3.svg",
    color: "yellow",
    type: "c"
};
var symbolSpecial = {
    img: "svg/dogeSpecial.svg",
    type: "d",
    color: "white"
};


var slotShapes = [
    symbolBlueA, symbolBlueB, symbolBlueC,
    symbolBlueA, symbolBlueB, symbolBlueC,
    symbolRedA, symbolBlueB, symbolBlueC,
    symbolRedA, symbolBlueB, symbolBlueC,
    symbolYellowA, symbolYellowB, symbolYellowC,
    symbolYellowA, symbolYellowB, symbolYellowC,
    symbolSpecial
];
// 3 variables for random numbers

var NUM_SLOT = 3;

var PAYOUT_COLOR = 2; //payout amount for a win if the colors match
var PAYOUT_TYPE = 2; //payout amount for a win if the TYPEs match
var PAYOUT_COLOR_TYPE = 10; //payout amount for a win if the colors and Types match
var PAYOUT_SPECIAL_ONE = 1; //payout amount for a win if one SPECIAL is shown
var PAYOUT_SPECIAL_TWO = 25; //payout amount for a win if two SPECIALs are shown
var PAYOUT_SPECIAL_THREE = 500; //payout amount for a win if three pigs are shown




var slotImg1 = $("#img1");
var slotImg2 = $("#img2");
var slotImg3 = $("#img3");
var slotImgs = [slotImg1, slotImg2, slotImg3];
var currentSlots = [];

var score = 0;

function updateImage() {

    // slotImg1.attr("src", symbolBlueA);

    for (var i = 0; i <= 2; i++) {
        var randomNum = Math.ceil(18 * Math.random());
        currentSlots[i] = slotShapes[randomNum];

        for (var j = 0; j <= 18; j++) {
            // var randomNum = Math.ceil(19 * Math.random());
            slotImgs[i].attr("src", slotShapes[randomNum].img);
        }
    }
}

var win = false;



function checkForWin() {
    var sameColor = false;
    var sameType = false;
    var numSpecial = 0;

    var betAmount = parseInt($('input[name=bet]:checked').val());

    if (currentSlots[0].type === currentSlots[1].type && currentSlots[0].type === currentSlots[2].type && currentSlots[0].color != "white") {
        sameType = true;
    }

    if (currentSlots[0].color === currentSlots[1].color && currentSlots[0].color === currentSlots[2].color && currentSlots[0].color != "white") {
        sameColor = true;
    }

    if (sameColor && sameType) {
        message.textContent = "same color same type! you got " + PAYOUT_COLOR_TYPE * betAmount + " points";

        score += (PAYOUT_COLOR_TYPE * betAmount);
        win = true;
        $("#credit").val(score);
    } else if (sameColor) {
        message.textContent = "same color! you got " + PAYOUT_COLOR * betAmount + " points";

        score += (PAYOUT_COLOR * betAmount);
        win = true;

        $("#credit").val(score);

    } else if (sameType) {
        message.textContent = "same type! you got " + PAYOUT_TYPE * betAmount + " points";
        score += (PAYOUT_TYPE * betAmount);
        $("#credit").val(score);
        win = true;

    } else {
        message.textContent = "Oops lose " + betAmount + " point";
        win = false;
        score = score - betAmount;
        $("#credit").val(score);
    }



    numSpecial = countSpecial();

    if (numSpecial === 1) {
        message.textContent = "You got one special smile " + PAYOUT_SPECIAL_ONE * betAmount + " points!";
        score = score + (PAYOUT_SPECIAL_ONE * betAmount) +1;
        $("#credit").val(score);
        win = true;
    } else if (numSpecial === 2) {
        message.textContent = "You got two special smiles " + PAYOUT_SPECIAL_TWO * betAmount + " points!";
        score = score + (PAYOUT_SPECIAL_TWO * betAmount) + 1;
        win = true
        $("#credit").val(score);
    } else if (numSpecial === 3) {
        message.textContent = "You got three special smiles " + PAYOUT_SPECIAL_THREE * betAmount + " points!";
        score =  score + (PAYOUT_SPECIAL_THREE * betAmount) + 1;
        $("#credit").val(score);
        win = true;
    }


    if (win) {
        PlaySoundWin()
    } else {
        PlaySoundLose()
    }

    if (score <= 0) {
        var playBtn = $("#play");

        $('#dropdown').val(0);
        $("#dropdown").prop("disabled", false);
        playBtn.prop("disabled", true);
        playBtn.addClass("disable");
        message.textContent="Select deposit and start over!"

    } else {
        $("#credit").val(score);

    }


}

function countSpecial() {
    var count = 0;

    //for loop for counting the number of pigs
    for (i = 0; i <= 2; i++) {
        if (currentSlots[i].color === "white") {
            count++;
        }
    }
    return count;
}



function PlaySoundWin() {
    var soundWin = document.getElementById("audio-win");
    soundWin.play();
}

function PlaySoundLose() {
    var soundLose = document.getElementById("audio-false");
    soundLose.play();
}

function PlaySoundBye() {
    var soundBye = document.getElementById("audio-lose");
    soundBye.play();
}



$(document).ready(function() {


    // PlaySoundBg();
    var playBtn = $("#play");

    var credit = document.getElementById("credit");
    $('#dropdown').val(0);
    playBtn.addClass("disable");
    $("#dropdown").prop("disabled", false);
    playBtn.prop("disabled", false);

    $("#skip").click(function() {
        skipIntro();
        $(this).css("visibility", "hidden")
    });

    playBtn.prop("disabled", true);
    playBtn.addClass("disable");

    $("#dropdown").change(function() {
        deposit = $(this).val();
        score = parseInt($(this).val());

        $("#credit").val(deposit);
        playBtn.prop("disabled", false);
        playBtn.removeClass("disable");
        $("#dropdown").prop("disabled", true);
    });


    // set interval for updating images
    playBtn.click(function(stopImage) {
        stopImage = setInterval(function() {
            updateImage()
        }, 200);
        setTimeout(function() {
            clearInterval(stopImage),
                checkForWin();
        }, 3000);


    });

    $('#cashOut').click(function() {
        //$("#sound").play();
        $('#dropdown').val(0);
        playBtn.addClass("disable");
        $("#dropdown").prop("disabled", false);
        playBtn.prop("disabled", false);

    });

    // saveInformation();
});
