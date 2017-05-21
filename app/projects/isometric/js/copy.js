$(document).ready(
	function () {

		var s = Snap("#mainSVG");

		Snap.load("./svg/stage.svg",
            function (data) {

                stage = data.select("#stage");
				s.append(stage);

                // PIECES
                // reference to individual pieces
                chairs = stage.select("#chairs");
                apron = stage.select("#apron");
                stairsLeft = stage.select("#stairsLeft");
                stairsRight = stage.select("#stairsRight");
                floorSpeakers = stage.select("#floorSpeakers");
                frame = stage.select("#frame");
                mic = stage.select("#mic");
                amp = stage.select("#amp");
                lights = stage.select("#lights");
                exitDoor = stage.select("#exitDoor");
                exitDetails = stage.select("#exitDetails");
                curtainRight = stage.select("#curtainRight");
                curtainLeft = stage.select("#curtainLeft");
                curtainSwitch = stage.select("#curtainSwitch");

                // COLOURED PIECES
                // reference to individual coloured pieces
                chairsColor = stage.select("#chairsColor");
                apronColor = stage.select("#apronColor");
                stairsLeftColor = stage.select("#stairsLeftColor");
                stairsRightColor = stage.select("#stairsRightColor");
                floorSpeakersColor = stage.select("#floorSpeakersColor");
                frameColor = stage.select("#frameColor");
                micColor = stage.select("#micColor");
                ampColor = stage.select("#ampColor");
                lightsColor = stage.select("#lightsColor");
                exitDoorColor = stage.select("#exitDoorColor");
                curtainRightColor = stage.select("#curtainRightColor");
                curtainLeftColor = stage.select("#curtainLeftColor");
                switchColor = stage.select("#switchColor");

                // call click functions
                chairs.click(clickChairs);
                apron.click(clickApron);
                stairsLeft.click(clickStairs);
                stairsRight.click(clickStairs);
                floorSpeakers.click(clickFloorSpeakers);
                frame.click(clickFrame);
                mic.click(clickMic);
                amp.click(clickAmp);
                lights.click(clickLights);
                exitDoor.click(clickExitDoor);
                exitDetails.click(clickExitDoor);
                curtainRight.click(clickCurtain);
                curtainLeft.click(clickCurtain);
                curtainSwitch.click(clickCurtainSwitch);

			}
		);

        // show all white cover pieces to hide colour
        function showCoverPieces() {

            chairs.animate({'opacity': 1.0}, 250);
            apron.animate({'opacity': 1.0}, 250);
            stairsLeft.animate({'opacity': 1.0}, 250);
            stairsRight.animate({'opacity': 1.0}, 250);
            floorSpeakers.animate({'opacity': 1.0}, 250);
            frame.animate({'opacity': 1.0}, 250);
            mic.animate({'opacity': 1.0}, 250);
            amp.animate({'opacity': 1.0}, 250);
            lights.animate({'opacity': 1.0}, 250);
            exitDoor.animate({'opacity': 1.0}, 250);
            curtainRight.animate({'opacity': 1.0}, 250);
            curtainLeft.animate({'opacity': 1.0}, 250);
            curtainSwitch.animate({'opacity': 1.0}, 250);
        }

        // remove all classes that change title text colour
        function removeTextColor() {

            $("#title").removeClass("greenText");
            $("#title").removeClass("blueText");
            $("#title").removeClass("purpleText");
            $("#title").removeClass("redText");
            $("#title").removeClass("orangeText");
            $("#title").removeClass("yellowText");
        }

        // click function for chairs
		var clickChairs = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            chairs.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Seating");
            $("#description").html("All theatres provide space for an audience, which is often separated from the performers by the proscenium arch or apron.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("orangeText");
        }

        // click function for apron
        var clickApron = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            apron.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Apron");
            $("#description").html("The apron is any part of the stage that extends past the proscenium arch and into the audience or seating area. ");

            // change title text colour
            removeTextColor();
            $("#title").addClass("blueText");
        }

        // click function for stairs
        var clickStairs = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            stairsRight.animate({'opacity': 0.0}, 250);
            stairsLeft.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Stairs");
            $("#description").html("There are three main components that make up theatre stage stairs - the tread, the riser, and the carriage.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("purpleText");
        }

        // click function for floor speakers
        var clickFloorSpeakers = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            floorSpeakers.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Floor Lighting");
            $("#description").html("The lighting found on the floor of the apron often provides a large wash of light, but cannot be focused.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("yellowText");
        }

        // click function for frame
        var clickFrame = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            frame.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Proscenium Arch");
            $("#description").html("Proscenium means in front of the scenery. The arch acts like a picture frame through which the performance can be viewed.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("greenText");
        }

        // click function for mic
        var clickMic = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            mic.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Microphone");
            $("#description").html("A microphone is an acoustic-to-electric transducer or sensor that converts sound into an electrical signal. ");

            // change title text colour
            removeTextColor();
            $("#title").addClass("orangeText");
        }

        // click function for amp
        var clickAmp = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            amp.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Amplifier");
            $("#description").html("An amplifier, also known as an amp, is an electronic device that increases the voltage, current, or power of a signal.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("greenText");
        }

        // click function for lights
        var clickLights = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            lights.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Lighting");
            $("#description").html("Spotlights are focused and allow for greater control and shaping the edges of the beam of light by using shutters.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("yellowText");
        }

        // click function for exit door
        var clickExitDoor = function () {

            // show all white cover pieces and hide selected white cover piece to display colour
            showCoverPieces();
            exitDoor.animate({'opacity': 0.0}, 250);

            // add appropriate call out title and description to aside
            $("#title").html("Exit Door");
            $("#description").html("The on-stage exit door is mainly and routinely used by a show's performers, but also for emergency purposes.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("blueText");
        }

        // click function for curtain remove
        var clickCurtain = function () {

            // show all white cover pieces
            showCoverPieces();

            // translate left and right curtain pieces
            curtainRight.animate({transform: 'translate(101.5,58.4)'}, 2500, mina.easeinout);
            curtainLeft.animate({transform: 'translate(-101.5,-58.4)'}, 2500, mina.easeinout);

            // hide selected white cover piece to display colour
            curtainRight.animate({'opacity': 0.0}, 250);
            curtainLeft.animate({'opacity': 0.0}, 250);

            // translate left and right coloured curtain pieces
            curtainRightColor.animate({transform: 'translate(101.5,58.4)'}, 2500, mina.easeinout);
            curtainLeftColor.animate({transform: 'translate(-101.5,-58.4)'}, 2500, mina.easeinout);

            // add appropriate call out title and description to aside
            $("#title").html("Open Curtain");
            $("#description").html("View what is on the stage behind the curtain. To close the curtain, click the switch on the left side of the exit door.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("redText");
        }

        // click function for curtain show
        var clickCurtainSwitch = function () {

            // show all white cover pieces
            showCoverPieces();

            // translate left and right curtain pieces
            curtainRight.animate({transform: 'translate(-0,-0)'}, 2500, mina.easeinout);
            curtainLeft.animate({transform: 'translate(0,0)'}, 2500, mina.easeinout);

            // hide selected white cover piece to display colour
            curtainRight.animate({'opacity': 0.0}, 250);
            curtainLeft.animate({'opacity': 0.0}, 250);
            curtainSwitch.animate({'opacity': 0.0}, 250);

            // translate left and right coloured curtain pieces
            curtainRightColor.animate({transform: 'translate(-0,-0)'}, 2500, mina.easeinout);
            curtainLeftColor.animate({transform: 'translate(0,0)'}, 2500, mina.easeinout);

            // add appropriate call out title and description to aside
            $("#title").html("Closed Curtain");
            $("#description").html("View what is in front of the curtain on the stage. To see what is behind the curtain on the stage, click on the curtain.");

            // change title text colour
            removeTextColor();
            $("#title").addClass("redText");
        }
	}
);
