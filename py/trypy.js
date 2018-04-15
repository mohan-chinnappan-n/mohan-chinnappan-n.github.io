/**
 * Try Python!
 * ===========
 *
 * Client library.
 */

KEYCODES = {
    8:      'backspace',
    9:      'tab',
    13:     'enter',
    27:     'esc',
    33:     'page up',
    34:     'page down',
    35:     'end',
    36:     'home',
    37:     'left',
    38:     'up',
    39:     'right',
    40:     'down',
    45:     'insert',
    46:     'delete',
    112:    'f1',
    113:    'f2',
    114:    'f3',
    115:    'f4', 
    116:    'f5',
    117:    'f6',
    118:    'f7',
    119:    'f8', 
    120:    'f9',
    121:    'f10',
    122:    'f11',
    123:    'f12'
};
AJAX_ACTIVEX = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];

/**
 * syntax highlighting
 */
var comment_re = "#.*?($|\\n)";
var integer_re = "-?(0[xX][a-fA-F0-9]*|0[0-7]+|[1-9]\\d*|0)[lL]?";
var float_re = "-?((\\d+\\.\\d*|\\.\\d+)([eE][+-]?\\d*)?|\\d+[eE][+-]?\\d*)";
var number_re = '(' + float_re + '|' + integer_re + ')[jJ]?';
var keyword_re = ("(and|assert|as|break|class|continue|def|del|" +
                  "elif|else|except|exec|finally|for|from|global|" +
                  "if|import|in|is|lambda|not|or|pass|print|raise|" +
                  "return|try|while|with|yield)");
var ident_re = "[a-zA-Z_][a-zA-Z_0-9]*";
var string_re = (
    "(" + "[uU]?[rR]?'''([^\\\\]|\\\\(.|\\n))*?'''" +
    "|" + '[uU]?[rR]?"""([^\\\\]|\\\\(.|\\n))*?"""' +
    "|" + "[uU]?[rR]?'([^\\\\\\n]|\\\\(.|\\n))*?'" +
    "|" + '[uU]?[rR]?"([^\\\\\\n]|\\\\(.|\\n))*?"' +
    ")" );
var PYTOKENIZER = eval('/\\s+|' + comment_re + '|' + number_re + '|' + string_re + '|' + ident_re + '|\\S/g');

/**
 * checks
 */
IS_NUMERIC = eval('/^' + number_re + '$/');
IS_STRING = eval('/^' + string_re + '$/');
IS_KEYWORD = eval('/^' + keyword_re + '$/');
IS_IDENT = eval('/^' + ident_re + '$/');
IS_COMMENT = eval('/^' + comment_re + '$/');
IS_NOT_EMPTY = /^.+$/;
IS_BOOL = /^(True|False)$/;

/**
 * Pages
 */
PAGES = {
    index: {
        title: 'Go and try Python!',
        text: [
            'Welcome to the Try Python! demo.',
            'Use the console above to try out Python directly from your webbrowser.',
            [
                '`help` show the interactive help',
                '`tutorial` start the 10 minute tutorial',
                '`about` get information about the "Try Python!" project'
            ]
        ]
    },
    about: {
        title: 'About Try Python!',
        text: [
            'Try Python! is a port of the original Try Ruby! to Python.',
            'Since Python is just cool too we wanted to make such a cool ' +
            'application available for Python users and maybe future ' +
            'Python users too.',
            'It was written by Armin Ronacher, with alterations and ' +
            'conversion for Google App Engine by Tom Lynn.',
            'If you have any suggestions write a mail to',
            [
                'tom-trypython\x40fish.cx'  // armin.ronacher\x40active-4.com
            ],
            'Type `back` to return to the index.'
        ]
    },
    tutorial: {
        title: 'Welcome to the 10 Minute Tutorial',
        text: [
            'This is a ten minute tutorial showing the very basics of Python.\
            You can stop the tutorial any time by typing `back`.',
            'Python is considered an interpreted language because Python programs\
            are executed by an interpreter. There are two ways to use the interpreter:\
            command-line mode and script mode. In command-line mode, you type Python\
            programs and the interpreter prints the result.',
            'Type in a small calculation like `2 + 9`.'
        ],
        condition: {
            error: false,
            output: IS_NUMERIC
        },
        next: 'complex_math'
    },
    complex_math: {
        title: 'Hello Spam',
        text: [
            'As expected python has solved the calculation and has printed the\
            result to the command line. In the command line interpreter mode\
            Python will auomatically print the result, in your own programs you\
            have to use `print 2 + 9` to see the result.',
            'The next thing we try is to print out a string like `"Hello Spam"`.'
        ],
        condition: {
            error: false,
            output: IS_STRING
        },
        next: 'types'
    },
    types: {
        title: 'Types',
        text: [
            'And again we see an result. If you would have typed `print "Hello Spam"`\
            you would have seen a slightly different output. Try it out yourself.',
            'This is because the command line interpreter tries to tell you what the\
            type of an object is. So. What are types?',
            'Try it out yourself: `type(42)` and `type("Spam")`'
        ],
        condition: {
            error: false,
            output: /^<type 'str'>$/
        },
        next: 'more_types'
    },
    more_types: {
        title: 'More about Types',
        text: [
            'Not surprisingly, strings belong to the type str and integers belong to\
            the type int. Less obviously, numbers with a decimal point belong to a type\
            called float, because these numbers are represented in a format called\
            floating-point (`type(3.344)`).',
            'What about values like "17" and "3.2"? They look like numbers, but they\
            are in quotation marks like strings?',
            'Let\'s check that: `type("17")`',
            'Hint: They are strings :-)'
        ],
        condition: {
            error: false,
            output: /^<type 'str'>$/
        },
        next: 'variables'
    },
    variables: {
        title: 'Variables',
        text: [
            'One of the most powerful features of a programming language is the ability to\
            manipulate variables. A variable is a name that refers to a value.',
            'The assignment statement creates new variables and gives them values:',
            '`message = "What\'s up doc?"`',
            'This would assign the string "What\'s up doc?" to the variable "message".',
            'Try to output that using print: `print message`'
        ],
        condition: {
            error: false,
            output: IS_NOT_EMPTY
        },
        next: 'lists'
    },
    lists: {
        title: 'Lists',
        text: [
            'The next thing we try are lists.',
            'An empty lists looks like `[]`.',
            'Try to assign a list with 4 or more integers to a variable called mylist:\
            `mylist = [14, 25, 7, 42]`.',
            'And then look whats inside of it: `mylist`'
        ],
        condition: {
            error: false,
            output: /^\[\d+, \d+, \d+(, \d+)+\]$/
        },
        next: 'in_list'
    },
    in_list: {
        title: 'Check if Something is in the List',
        text: [
            'So. We have a list called `mylist` with some integers in.',
            'Let\'s check if the value 42 is in the list:',
            '`42 in mylist`',
            'If you have the integer 42 in the list you will see True as result, otherwise\
            you will see False.',
            'Hm. But what if we want to get the index of the variable? Just type\
            `mylist.index(42)` to get the index. (We always start counting from zero in Python.)',
            'If you have 42 in your list you will get the index, otherwise you will see\
            a so called traceback showing up an ValueError',
            'What can you do with an index? You can access items. Try `mylist[0]` to show\
            the first result and then `mylist[-40]` to access a non existent item.'
        ],
        condition: {
            error: true,
            output: /(IndexError|KeyError|ValueError)/
        },
        next: 'exception_handling'
    },
    exception_handling: {
        title: 'Exception Handling',
        text: [
            'Argh. Something went wrong. But what went wrong? You have accessed an item\
            which doesn\'t exist.',
            'If you do something which won\'t work Python raises an exception. You can\
            catch exceptions to keep your application working using try/except blocks.',
            'Notice: Python looks for correct indention. Just use tab to insert 4 spaces.',
            '`try:\n    print mylist[-40]\nexcept:\n    print "item 40 does not exist"\n`'
        ],
        condition: {
            error: false,
            output: IS_NOT_EMPTY
        },
        next: 'conditions'
    },
    conditions: {
        title: 'Conditions',
        text: [
            'Fine. Python has printed a better error message to the console.',
            'Now we use our `mylist` variable to check for the length:',
            '`'
          + 'if len(mylist) == 1:\n'
          + '    print "my list is one item long"\n'
          + 'elif len(mylist) == 2:\n'
          + '    print "my list contains of two items."\n'
          + 'else:\n'
          + '    print "my list is more than two items long."\n'
          + '`'
        ],
        condition: {
            error: false,
            output: IS_NOT_EMPTY
        },
        next: 'about_dir'
    },
    about_dir: {
        title: 'About dir()',
        text: [
            'So. First we should still have our variable `message`. If you\
            don\'t have one, create a new one :-)',
            'We can now use dir() to show the methods and attributes of any\
            Python object.',
            'for example of our message: `dir(message)`'
        ],
        condition: {
            error: false,
            output: /^\[\'.*?\'(, \'.*?\')+\]$/
        },
        next: 'using_help'
    },
    using_help: {
        title: 'Using help()',
        text: [
            'Aha. `dir(message)` has returned an list of methods and attributes\
            of the message object. Since we know it\'s a string we can show\
            up the help too:',
            '`help(str)`'
        ],
        condition: {
            error: false,
            output: /Help on class str in module __builtin__/
        },
        next: 'end_of_tutorial'
    },
    end_of_tutorial: {
        title: 'End of Tutorial',
        text: [
            'This is the end of the tutorial. Type `tutorial` to restart it\
            or start trying out Python yourself.',
            'You will automatically return to the index page the next input\
            or when typing `back`.'
        ],
        condition: {
            error: false
        },
        next: 'index'
    }
}

var console = null;
var infobox = null;

/**
 * initialize the application
 */
function init() {
    var handler = new Console();
    document.onkeydown = handler.keydown(handler);
    document.onkeypress = handler.keypress(handler);
    new InfoBox();
}

/**
 * Send some keys to the console.
 *
 * The first parameter can be either a string or an array of keys.
 * If noenter is set to true it won't send a final send signal
 */
function cmd(s, noenter) {
    for (var i = 0; i < s.length; i++) {
        var key = s[i];
        if (key == '\n') {
            console.sendKey('enter');
        }
        else if (key == '\r') {
            // do nothing.
        } else {
            console.sendKey(key);
        }
    }
    if (!noenter) {
        console.sendKey('enter');
    }
    return false;
}

/**
 * log an error. currently it just alerts it
 */
function log(obj) {
    alert(json.toJSON(obj));
}

/**
 * syntax highlighting.
 */
function highlight(before, text) {
    var highlighted = [];
    var counter = 0;
    var fulltext = before + text + ' """' + " '''";
    var textstart = before.length;
    var textend = textstart + text.length;
    function spanBuilder(token) {
        if (counter + token.length <= textstart || counter >= textend) {
            counter += token.length;
            return '';
        }
        var tokstart = counter;
        var toklen = token.length;
        if (tokstart < textstart) {
            toklen -= (textstart - tokstart);
            tokstart = textstart;
        }
        if (toklen > textend - tokstart)
            toklen = textend - tokstart;
        var printable = fulltext.substr(tokstart, toklen);
        counter += token.length;
        var style;
        if (token.match(/^\s/))
            style = null;
        else if (token.match(IS_NUMERIC))
            style = 'num';
        else if (token.match(IS_KEYWORD))
            style = 'kw';
        else if (token.match(IS_IDENT))
            style = 'ident';
        else if (token.match(IS_COMMENT))
            style = 'comment';
        else if (token[token.length-1].match(/['"]/))
            style = 'str';
        else
            style = 'punc';
        var span = document.createElement('SPAN');
        span.className = style;
        span.appendChild(document.createTextNode(printable));
        highlighted.push(span);
        return '';
    }
    fulltext.replace(PYTOKENIZER, spanBuilder);
    return highlighted;
}

/**
 * The AJAX Connection System
 */
ajax = {
    UNINITIALIZED : 0,
    LOADING : 1,
    LOADED : 2,
    INTERACTIVE : 3,
    COMPLETE : 4,

    /**
     * return a new ajax connection or null if not available.
     */
    connect : function() {
        var con = null;
        try {
            con = new XMLHttpRequest();
        }
        catch (e) {
            if (typeof AJAX_ACTIVEX == 'string') {
                con = new ActiveXObject(AJAX_ACTIVEX);
            }
            else {
                for (var i=0; i < AJAX_ACTIVEX.length; i++) {
                    var axid = AJAX_ACTIVEX[i];
                    try {
                        con = new ActiveXObject(axid);
                    }
                    catch (e) {}
                    if (con) {
                        AJAX_ACTIVEX = axid;
                        break;
                    }
                }
            }
        }
        return con;
    },
    /**
     * checks if ajax is available
     */
    check : function() {
        return (this.connect() != null);
    },
    /**
     * sends an request to the server which calls
     * the given callback method on each statechange
     */
    request : function(url, callback, method, post) {
        if (typeof post == 'undefined') {
            post = null;
        }
        if (typeof method == 'undefined') {
            method = 'GET';
        }
        var con = this.connect();
        con.onreadystatechange = function() {
            callback(con);
        };
        con.open(method, url);
        con.send(post);
    },
    /**
     * send a request to the server and block the
     * browser until the server has sent ajax.COMPLETE.
     * returns the connection object.
     */
    call : function(url, method, post) {
        if (typeof post == 'undefined') {
            post = null;
        }
        if (typeof method == 'undefined') {
            method = 'GET';
        }
        var con = this.connect();
        con.open(method, url, false);
        con.send(post);
        return con;
    }
}

/**
 * JSON Lib
 */
json = {
    /**
     * evals a json string
     */
    fromJSON : function(s) {
        return eval('(' + s + ')');
    },
    /**
     * creates a json string out of a javascript structure.
     */
    toJSON : function(o, keypos) {
        keypos = (typeof keypos != 'undefined') ? keypos : false;
        var objtype = typeof o;
        if (o == null) {
            if (keypos) {
                return '"null"';
            }
            return 'null';
        }
        if (objtype == 'number' || objtype == 'boolean') {
            if (keypos) {
                return '"' + o + '"';
            }
            return o + '';
        }
        if (objtype == 'string') {
            return '"' + o
                    .replace(/[\\]/g, '\\\\')
                    .replace(/["]/g, '\\"')
                    .replace(/[\f]/g, '\\f')
                    .replace(/[\b]/g, '\\b')
                    .replace(/[\n]/g, '\\n')
                    .replace(/[\t]/g, '\\t')
                    .replace(/[\r]/g, '\\r')
                    + '"';
        }
        if (o instanceof Array) {
            var tmp = [];
            for (var i = 0; i < o.length; i++) {
                tmp.push(this.toJSON(o[i]));
            }
            return '[' + tmp.join(', ') + ']';
        }
        var tmp = [];
        for (var key in o) {
            var val = this.toJSON(o[key]);
            var key = this.toJSON(key, true);
            tmp.push(key + ': ' + val);
        }
        var result = '{' + tmp.join(', ') + '}';
        return result;
    },
    /**
     * RPC
     */
    RPC : (function() {
        function rpc(url) {
            this.url = url;
        }
        rpc.prototype.createRequest = function(methodName, parameters) {
            return json.toJSON({
                method: methodName,
                params: parameters,
                id: null
            });
        }
        rpc.prototype.call = function(method) {
            var params = new Array();
            for (var i = 1; i < arguments.length; i++) {
                params.push(arguments[i]);
            }
            var request = this.createRequest(method, params);
            con = ajax.call(this.url, 'POST', request);
            var response = json.fromJSON(con.responseText);
            if (response.error == null) {
                return response.result;
            }
            else {
                log(response.error);
            }
        }
        rpc.prototype.callback = function(callback, method) {
            var params = new Array();
            for (var i = 2; i < arguments.length; i++) {
                params.push(arguments[i]);
            }
            var request = this.createRequest(method, params);
            ajax.request(this.url, function(con) {
                if (con.readyState == ajax.COMPLETE) {
                    var response = json.fromJSON(con.responseText);
                    if (response.error == null) {
                        callback(response.result);
                    }
                    else {
                        log(response.error);
                    }
                }
            }, 'POST', request);
        }
        return rpc;
    })()
};

/**
 * Info box
 */
function InfoBox() {
    infobox = this;
    this.title = document.getElementById('title');
    this.box = document.getElementById('text');
    this.showPage('index');
}

/**
 * show page
 */
InfoBox.prototype.showPage = function(pageName) {
    var page = PAGES[pageName];
    if (!page) {
        return;
    }
    this.currentPage = page;
    this.reset(page.title);
    for (var i = 0; i < page.text.length; i++) {
        //XXX: refactor that
        var element = page.text[i];
        if (element instanceof Array) {
            var list = this.addList();
            for (var j = 0; j < element.length; j++) {
                var item = this.addListItem(list);
                var tmp = '';
                var incmd = false;
                var text = element[j] + '`';
                for (var k = 0; k < text.length; k++) {
                    var c = text[k];
                    if (c == '`') {
                        if (incmd) {
                            this.addCmd(item, tmp);
                        }
                        else {
                            this.addText(item, tmp);
                        }
                        tmp = '';
                        incmd = (!incmd);
                    }
                    else {
                        tmp += c;
                    }
                }
            }
        }
        else {
            var p = this.addParagraph();
            var incmd = false;
            var tmp = '';
            var text = element + '`';
            for (var j = 0; j < text.length; j++) {
                var c = text[j];
                if (c == '`') {
                    if (incmd) {
                        this.addCmd(p, tmp);
                    }
                    else {
                        this.addText(p, tmp);
                    }
                    tmp = '';
                    incmd = (!incmd);
                }
                else {
                    tmp += c;
                }
            }
        }
    }
}

/**
 * set the headline and clear box
 */
InfoBox.prototype.reset = function(text) {
    var child = this.title.firstChild;
    if (!child) {
        this.title.appendChild(document.createTextNode(text));
    }
    else {
        child.nodeValue = text;
    }
    this.box.innerHTML = '';
}

/**
 * add a paragraph
 */
InfoBox.prototype.addParagraph = function(text) {
    var p = document.createElement('P');
    if (text) {
        p.appendChild(document.createTextNode(text));
    }
    this.box.appendChild(p);
    return p;
}

/**
 * add list
 */
InfoBox.prototype.addList = function() {
    var l = document.createElement('UL');
    this.box.appendChild(l);
    return l;
}

/**
 * add list item
 */
InfoBox.prototype.addListItem = function(list, el) {
    var item = document.createElement('LI');
    if (el) {
        if (typeof el == 'string') {
            var el = document.createTextNode(el);
        }
        item.appendChild(el);
    }
    list.appendChild(item);
    return item;
}

/**
 * add Text to an element
 */
InfoBox.prototype.addText = function(el, text) {
    el.appendChild(document.createTextNode(text));
}

/**
 * add a marked word to an element
 */
InfoBox.prototype.addCmd = function(el, c) {
    var link = document.createElement((c.indexOf('\n') == -1) ? 'TT' : 'PRE');
    link.onclick = function() {
        return cmd(c);
    }
    link.className = 'quicklink';
    link.appendChild(document.createTextNode(c));
    el.appendChild(link);
    return link;
}

/**
 * The Browser Console
 */
function Console() {
    console = this;
    this.window = document.getElementById('console');
    this.cursor = document.getElementById('cursor');
    this.lastkey = null;
    this.connection = new json.RPC('/json');
    this.sid = this.connection.call('start_session');
    
    this._buffer = '';
    this._currentline = '';
    this._historyPosition = -1;
    this.history = [];

    this.prompt1 = document.createElement('SPAN');
    this.prompt1.appendChild(document.createTextNode('>>> '));
    this.prompt1.className = 'prompt1';
    
    this.prompt2 = document.createElement('SPAN');
    this.prompt2.appendChild(document.createTextNode('... '));
    this.prompt2.className = 'prompt2';

    this._writePrompt();
}

Console.prototype.keydown = function(self) {
    return function(e) {
        var e = (e) ? e : window.event;
        var code = (e.keyCode) ? e.keyCode : e.which;
        var mod = self._getMod(e);
        var key = null;
        key = KEYCODES[code];
        if (key != undefined) {
            self.lastkey = key;
            self.sendKey(key, mod);
            self._stopKeyEvent(e);
            return false;
        }
    }
}

Console.prototype.keypress = function(self) {
    return function(e) {
        var e = (e) ? e : window.event;
        var code = (e.keyCode) ? e.keyCode : e.which;
        var mod = self._getMod(e);  // modifier keys
        var key = null;
        if (e.charCode != null && e.charCode != 0) {
            // Firefox on Windows, normal keys
            key = String.fromCharCode(e.charCode);
        }
        else if (e.charCode == null) {
            // Opera on Windows
            if (code >= 32) {
                key = String.fromCharCode(code);
                if (key=='.' || key=='#' || key=="'" || key=='-')
                    ;
                else if (self.lastkey!=null && self.lastkey==KEYCODES[code]) {
                    key = self.lastkey = null; // special keypress
                    return false;
                }
            } else if (code==8) {
                self._stopKeyEvent(e);
                return false;
            }
        }
        else {
            // Firefox on Windows, backspace
            key = KEYCODES[code];
            if (key == undefined || self.lastkey == key) {
                self.lastkey = null;
                self._stopKeyEvent(e);
                return false;
            }
        }
        self.sendKey(key, mod);
        self._stopKeyEvent(e);
        return false;
    }
}

/**
 * send a key to the handler
 */
Console.prototype.sendKey = function(key, mod) {
    if (key == null || key == undefined)
        return;
    var text;
    var result;
    // backspace
    if (key == 'backspace') {
        // backspace
        var lastToken = this.linebox.lastChild;
        if (lastToken != undefined && lastToken != null) {
            var tok = lastToken.firstChild.nodeValue;
            this.linebox.removeChild(lastToken);
            this._currentline = this._currentline.substr(0, this._currentline.length - tok.length);
            for (var i=0; i<tok.length-1; ++i)
                console.sendKey(tok[i]);
        }
    }
    // enter
    else if (key == 'enter') {
        text = this._currentline + '\n';
        
        // push line into history
        this._pushHistory(text);

        // New linebox
        this.window.removeChild(this.linebox);
        this.linebox = document.createElement('SPAN');
        this.window.insertBefore(this.linebox, this.cursor);

        // freeze line
        var formatted = text.replace(/\t/g, '    ');
        var lineSpans = highlight(this._buffer, formatted);
        for (var i=0; i < lineSpans.length; ++i)
            this.window.insertBefore(lineSpans[i], this.cursor);
        
        // Check for Multiline statements
        text = this._buffer + text;
        
        if (this._isMultiline(text)) {
            this._buffer = text;
            this._currentline = '';
            this._continuePrompt();
        }
        // Send it!
        else {
            // Start / Stop Tutorial
            if (text == 'tutorial\n') {
                infobox.showPage('tutorial');
            }
            else if (text == 'back\n') {
                infobox.showPage('index');
            }
            // Show About Informations
            else if (text == 'about\n') {
                infobox.showPage('about');
            }
            // Commit Data (unless it's a blank line or comment)
            else if (text.replace(/#.*?\n|\s+/g, '') != '') {
                result = this.connection.call('exec', this.sid, text);
                if (result.text) {
                    var lines = [];
                    var tlines = result.text.split('\n');
                    for (var i = 0; i < tlines.length; i++) {
                        var src = tlines[i];
                        while (src) {
                            lines.push(src.substr(0, 80));
                            src = src.substr(80);
                        }
                    }
                    for (var i = 0; i < lines.length; i++) {
                        var line = document.createElement('DIV');
                        line.className = (result.error) ? 'traceback' : 'output';
                        var formatted = lines[i].replace(/\t/g, '    ');
                        line.appendChild(document.createTextNode(formatted));
                        this.window.insertBefore(line, this.cursor);
                    }
                }
            }
            this._writePrompt();
            this._historyPosition = -1;
            this._buffer = '';
            this._currentline = '';
            // Check for tutorial slide change
            if (result && infobox.currentPage.condition && infobox.currentPage.next) {
                if (this._checkTutorialCondition(infobox.currentPage.condition, result)) {
                    infobox.showPage(infobox.currentPage.next);
                }
            }
            // New linebox
            this.window.removeChild(this.linebox);
            this.linebox = document.createElement('SPAN');
            this.window.insertBefore(this.linebox, this.cursor);
        }
    }
    // History
    else if (key == 'up' || key == 'down') {
        if (key == 'up') {
            if (this._historyPosition >= this.history.length - 1)
                return;

            this._historyPosition++;
        }
        if (key == 'down') {
            if (this._historyPosition < 0)
                return;

            this._historyPosition--;
        }
        if (this._historyPosition == -1) {
            var line = '';
        }
        else {
            var line = this.history[this._historyPosition];
        }
        // New linebox
        this.window.removeChild(this.linebox);
        this.linebox = document.createElement('SPAN');
        this.window.insertBefore(this.linebox, this.cursor);

        this._currentline = '';
        for (var i = 0; i < line.length; i++) {
            console.sendKey(line[i]);
        }
    }
    // Other keys
    else {
        if (key.length == 1 || key == 'tab') {
            if (key == 'tab') {
                key = '    ';
            }

            /* Rollback to the token/line start */
            var lastToken = this.linebox.lastChild;
            while (lastToken != undefined && lastToken != null) {
                var tok = lastToken.firstChild.nodeValue;
                if (tok.match(/^\s/)) {
                    break;
                }
                this.linebox.removeChild(lastToken);
                key = tok + key;
                this._currentline = this._currentline.substr(0, this._currentline.length - tok.length);
                lastToken = this.linebox.lastChild;
            }

            var formatted = key.replace(/\t/g, '    ');
            var lineSpans = highlight(this._buffer + this._currentline, formatted);
            for (var i=0; i < lineSpans.length; ++i) {
                this.linebox.insertBefore(lineSpans[i], null);
            }
            this._currentline += key;
        }
    }
    this.window.scrollTop = this.window.scrollHeight;
}

Console.prototype._getMod = function(e) {
    var mod = [];
    if (e.ctrlKey) {
        mod.push('ctrl');
    }
    if (e.altKey || e.metaKey) {
        mod.push('alt');
    }
    if (e.shiftKey && e.charCode == 0) {
        mod.push('shift');
    }
    return mod;
}

Console.prototype._stopKeyEvent = function(e) {
    e.cancelBuble = true;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}

Console.prototype._writePrompt = function() {
    this.window.insertBefore(this.prompt1.cloneNode(true), this.cursor);

    this.linebox = document.createElement('SPAN');
    this.window.insertBefore(this.linebox, this.cursor);
}

Console.prototype._continuePrompt = function() {
    this.window.insertBefore(this.prompt2.cloneNode(true), this.cursor);

    this.linebox = document.createElement('SPAN');
    this.window.insertBefore(this.linebox, this.cursor);
}

Console.prototype._pushHistory = function(line) {
    if (line.charAt(line.length - 1) == '\n') {
        line = line.substr(0, line.length - 1);
    }
    if (this.history.length > 20) {
        this.history.shift();
    }
    this.history.unshift(line);
}

Console.prototype._isMultiline = function(text) {
    function strCount(s, c) {
        var result = 0;
        var pos = -1;
        while (true) {
            var pos = s.indexOf(c, pos + 1);
            if (pos > -1) {
                result++;
            }
            else {
                return result;
            }
        }
    }
    // Remove strings
    text = text.replace(/'''([^\\]|\\(.|\n))*?'''/g, '')
    text = text.replace(/"""([^\\]|\\(.|\n))*?"""/g, '')
    if (strCount(text, '"""') > 0 ||
        strCount(text, "'''") > 0) {
        return true;
    }
    text = text.replace(/'([^\\]|\\(.|\n))*?'/g, '')
    text = text.replace(/"([^\\]|\\(.|\n))*?"/g, '')
    function endsWith(s, sub) {
        return s.substr(s.length-sub.length, sub.length)==sub;
    }
    // Remove comments
    text = text.replace(/#.*?\n/g, '\n')
    if (text == '\n' || endsWith(text, '\n\n')) {
        return false;
    }
    // Any line ends with a colon or text ends with a line-continuation?
    if (text.search(/:\s*\n/) >= 0 ||
        endsWith(text, '\\\n')) {
        return true;
    }
    if ((strCount(text, '(') > strCount(text, ')')) ||
        (strCount(text, '[') > strCount(text, ']')) ||
        (strCount(text, '{') > strCount(text, '}'))) {
        return true;
    }
    return false;
}

Console.prototype._checkTutorialCondition = function(cond, transport) {
    var trimmed_result = transport.text.replace(/^\s+|\s+$/g, '');
    // error type
    if (typeof cond.error != 'undefined' && 
        cond.error != transport.error) {
        return false;
    }
    // regex
    if (typeof cond.output != 'undefined' &&
        !cond.output.test(trimmed_result)) {
        return false;
    }
    return true
}
