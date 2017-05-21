$(document).ready(
    function() {

        var s = Snap("#mainSVG");
        var s2 = Snap("#secondSVG");

        Snap.load("./svg/desktop.svg",
            function(data) {

                deskContainer = data.select("#deskContainer");
                s.append(deskContainer);

                // PIECES
                // reference to individual pieces

                desktop = deskContainer.select("#desktop");
                memo = deskContainer.select("#memo");
                phone = deskContainer.select("#phone");
                notebook = deskContainer.select("#notebook");
                keyboard = deskContainer.select("#keyboard");
                mouse = deskContainer.select("#mouse");
                laptop = deskContainer.select("#laptop");
                desk = deskContainer.select("#desk");

                desktopColor = deskContainer.select("#desktopColor");
                memoColor = deskContainer.select("#memoColor");
                phoneColor = deskContainer.select("#phoneColor");
                notebookColor = deskContainer.select("#notebookColor");
                keyboardColor = deskContainer.select("#keyboardColor");
                mouseColor = deskContainer.select("#mouseColor");
                laptopColor = deskContainer.select("#laptopColor");
                deskColor = deskContainer.select("#deskColor");

                // call click functions


                desktop.click(clickDesktop);
                laptop.click(clickLaptop);
                memo.click(clickMemo);
                phone.click(clickPhone);
                notebook.click(clickNotebook);
                keyboard.click(clickKeyboard);
                desk.click(clickDesk);
                mouse.click(clickMouse);

            }
        );

        var hoverOpacity = function() {
            deskContainer.animate({
                opacity: 0.8
            }, 250);
        };

        var hoverOutOpacity = function() {
            deskContainer.animate({
                opacity: 1.0
            }, 250);
        };

        var hideAll = function() {
            desktop.animate({
                opacity: 1
            }, 250);
            mouse.animate({
                opacity: 1
            }, 250);
            memo.animate({
                opacity: 1
            }, 250);
            keyboard.animate({
                opacity: 1
            }, 250);
            desk.animate({
                opacity: 1
            }, 250);
            phone.animate({
                opacity: 1
            }, 250);
            notebook.animate({
                opacity: 1
            }, 250);
            laptop.animate({
                opacity: 1
            }, 250);
        };



        var clickDesktop = function() {
            hideAll();
            desktop.animate({
                opacity: 0
            }, 250);
            $("#title").html("21.5‑inch iMac");
            $("#description").html("External monitor for MacBook Pro and this will help improve my efficiency. ");
        };
        var clickMemo = function() {
            hideAll();

            memo.animate({
                opacity: 0
            }, 250);
            $("#title").html("Memo");
            $("#description").html("It helps me keep organized and keep focus on what I need to do. It is also my to-do list.");
        };
        var clickKeyboard = function() {
            hideAll();

            keyboard.animate({
                opacity: 0
            }, 250);
            $("#title").html("Keyboard");
            $("#description").html("A wireless keyboard.");
        };
        var clickMouse = function() {
            hideAll();


            mouse.animate({
                opacity: 0
            }, 250);
            $("#title").html("Mouse");
            $("#description").html("A wireless mouse.");
        };
        var clickPhone = function() {
            hideAll();

            phone.animate({
                opacity: 0
            }, 250);
            $("#title").html("iPhone 6");
            $("#description").html("My phone. I use it to make calls, take photos, send messages.‹›");
        };
        var clickNotebook = function() {
            hideAll();

            notebook.animate({
                opacity: 0
            }, 250);
            $("#title").html("NoteBook");
            $("#description").html("A Notebook. I normally write down my plans, ideas and inspiration.");
        };
        var clickDesk = function() {
            hideAll();

            desk.animate({
                opacity: 0
            }, 250);
            $("#title").html("Desk");
            $("#title").css('color', 'ADADAD');

            $("#description").html("This is a desk where I put my stuffs.");
        };
        var clickLaptop = function() {
            hideAll();

            laptop.animate({
                opacity: 0
            }, 250);
            $("#title").html("Macbook Pro");
            $("#description").html("A laptop. For a very long period of time, I think I am relying on this laptop to earn my living.");
        };

    });
