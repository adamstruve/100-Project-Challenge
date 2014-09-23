var master_whiteballs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

function getmyNumbers() {
    var whiteballs = master_whiteballs.slice();
    var selected_whiteballs = [];
    for (i = 1; i < 6; i++) {
        var ball = whiteballs[Math.floor(Math.random()*whiteballs.length)];
        selected_whiteballs.push(ball);
        var b = whiteballs.indexOf(ball);
        if(b != -1) {
            whiteballs.splice(b, 1);
        }
    }
    selected_whiteballs.sort(function(a, b){return a-b});
    for (i = 0; i < selected_whiteballs.length; i++) { 
        document.getElementById("ball"+i).innerHTML = selected_whiteballs[i];
    }
    var redballnumber = Math.floor((Math.random() * 59) + 1);
    document.getElementById("redball").innerHTML = redballnumber;
}