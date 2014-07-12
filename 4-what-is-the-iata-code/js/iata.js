        // Game Menu
        $(".start").click(function() {
            iatas =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            questions = 10;
            iatas.sort(function() { return 0.5 - Math.random() });
            current = 0;
            score = 0;
            results = [];
            $("#menu,#results").hide();
            $("#results").empty();
            start_game($(this).attr('rel'));
        });

        // Start The Game
        function start_game(level) {
            $.getJSON("js/"+level+".json", function( result ){
                current_iata = result;
                $("#game,#question,#form").show();
                $("#question").text("Question "+(current+1)+" of "+questions);
                $("#name").text(current_iata[iatas[current]].name);
            });
        }

        // Next Level
        function next_level() {
            if (current < 10) {
                $("#question").text("Question "+(current+1)+" of "+questions);
                $("#name").text(current_iata[iatas[current]].name);
            } else {
                end_game();
            }
        }

        function end_game() {
            $("#question, #form").hide();
            $("#name").text("GAME OVER - SCORE: "+score+"/"+questions);
            $("#menu").show();
            show_results();
        }

        function show_results() {
            $("#results").show();
            jQuery.each( results, function( i, val ) {
                $("#results").append(val);
            });
        }


        // Check For A Match
        function check_match(iata_input) {
            if (iata_input == current_iata[iatas[current]].iata) {
                results.push("<p class=\"correct\">"+current_iata[iatas[current]].name+": CORRECT!</p>");
                score++;
            } else {
                results.push("<p class=\"wrong\">"+current_iata[iatas[current]].name+": WRONG! You entered "+iata_input+", but it's "+current_iata[iatas[current]].iata+"!</p>");
            }
            $("#iata").val('');
            current++;
            next_level();
        }

        // User Input
        $("#iata").keyup(function(e) {
            if (!(e.keyCode == 16 || e.keyCode == 9)) { 
                var iata_input = $("#iata").val().toUpperCase();
                if (iata_input.length > 2) {
                    check_match(iata_input);
                }
            }
        });