        var master_whiteballs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        var master_redball = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

        function getmyNumbers() {
            // Rebuild the arrays.
            var whiteballs = master_whiteballs.slice();
            var redball = master_redball.slice();
            var selected_whiteballs = [];
            // Pick the white balls.
            for (i = 1; i < 6; i++) {
                var ball = whiteballs[Math.floor(Math.random()*whiteballs.length)];
                // Add each ball to the selected_whiteballs array.
                selected_whiteballs.push(ball);
                // Clear out the balls we've alrady picked in this loop.
                var b = whiteballs.indexOf(ball);
                if(b != -1) {
                    whiteballs.splice(b, 1);
                }
            }
            // Sort the white balls so they are displayed in order.
            selected_whiteballs.sort(function(a, b){return a-b});
            // Display the white balls.
            for (i = 0; i < selected_whiteballs.length; i++) { 
                document.getElementById("ball"+i).innerHTML = selected_whiteballs[i];
            }
            // Red Ball
            var redballnumber = redball[Math.floor(Math.random()*redball.length)];
            document.getElementById("redball").innerHTML = redballnumber;
        }