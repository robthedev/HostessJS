/**
 * @author robthewebdev
 */

;(function (global, $) {

    //Return new object
    var Hostess = function (firstName, lastName, language) {
        return new Hostess.init(firstName, lastName, language);
    };

    //Private array
    var supportedLanguages = ['Eng', 'Es'];

    //informal
   var greetings = {
        Eng: 'Welcome',
        Es: 'Bienvenida'
    };

    //formal
   var formalGreetings = {
        Eng: 'Salutations',
        Es: 'Saludos'
    };

    var logMessages = {
        Eng: 'Logged in',
        Es: 'In Logged'
    };


    Hostess.prototype = {

        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
           if (supportedLanguages.indexOf(this.language) === -1) {
               throw "Language is invalid";
           }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.';
        },

        welcome: function (formal) {
            var msg;
            //Undefined or null coercion - pass true
            msg = formal ? this.formalGreeting() : this.greeting();

            if (console) {
                console.log(msg);
            }
            //Return the calling object in order to chain methods
            return this;
        },

        log: function () {

            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function (lang) {

            this.language = lang;
            this.validate();

            return this;
        },

        checkJquery: function () {

            if (!$) {
              throw 'jQuery is missing';
          }

        },

        htmlValue: function (selector, formal) {
            var msg;
            this.checkJquery();

            msg = formal ? this.formalGreeting() : this.greeting();

            $(selector).html(msg);

            return this;
        }

    };

    Hostess.init = function (firstName, lastName, language) {

       var self = this;

       self.firstName = firstName || 'Mystery';
       self.lastName = lastName || 'Human';
       self.language = language || 'Eng';

        self.validate();

    };

    Hostess.init.prototype = Hostess.prototype;

    global.Hostess = global.H$$ = Hostess;

}(window, jQuery));