var red = prompt("Remember Order of color Matter\nwrite a color name of road trafic signal color NO : 1");

var yellow = prompt("write a color name of road trafic signal ccolor NO : 2");

var green = prompt("write a color name of road trafic signal color NO : 3");

if (red === "red" && green === 'green' && yellow === 'yellow') {
    alert(`
    Signal Color            Message
    ${red}                      Must stop
    ${yellow}                   Ready to move
    ${green}                    Move Now

    `)
}