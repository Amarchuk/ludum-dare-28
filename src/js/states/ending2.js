var intro1;
var intro2;
var intro3;
var nextButton;
var introScreens = [];

MouseGame.Ending2 = {
    create: function () {
        "use strict";

        var title = this.game.add.sprite(0, 0, 'ending');
        title.inputEnabled = true;
        title.events.onInputDown.add(this.nextSlide, this);

        introScreens = [title];

        playMusic(true);
    },

    update: function() {
        "use strict";

        if (game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
            this.showMenu();
        }
    },

    nextSlide: function() {
        "use strict";

        if (introScreens.length > 1) {
            var nextScene = introScreens.shift();

            game.add.tween(nextScene)
                .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None)
                .start();
        } else {
            this.showMenu();
        }

    },

    showMenu: function () {
        "use strict";

        this.game.state.start('mainmenu');
    },
};

