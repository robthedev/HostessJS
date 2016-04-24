# HostessJS
An object oriented mini Javascript library to output a welcome message in either English or Spanish. Works with nicely with jQuery.

Example usage:

Html ->

<html>
    <head>
    </head>

    <body>
        <div id="logindiv">
            <select name="" id="lang">
                <option value="Eng">English</option>
                <option value="Es">Espanol</option>
            </select>
            <input type="button" value="login" id="login" />
        </div>
        <h1 id="greeting"></h1>


        <script src="jquery-1.11.2.js"></script>
        <script src="Hostess.js"></script>
        <script src="app.js"></script>
    </body>
</html>



Javascript -> 
Use H$$ to call the Hostess function, it takes upto 3 parameters, first name, last name and desired language.

<pre lang="javascript">
<code>
var h = H$$('Mike', 'Me');
$('#login').click(function () {
    var lang = $('#lang').val();
    h.setLang(lang).htmlValue('#greeting');
});
</code>
</pre>

