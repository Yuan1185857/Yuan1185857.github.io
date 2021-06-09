        
/*function 1*/        
    var navlink = document.getElementById("navlink");

        function function1() {

            if(navlink.style.maxHeight == "0px")
                {
                    navlink.style.maxHeight = "200px";
                }

            else
                {
                    navlink.style.maxHeight = "0px";
                }
        }

/*function 2*/
    function function2() {
        var x = document.getElementById("genre-diff");
        if (x.style.display == "none") 
            {
                 x.style.display ="block";
            }
        else 
            {
                x.style.display = "none";
            }
    }

/*function 3*/
    var search = document.getElementById("input");

        function function3() {

            if(search.style.display == "none")
                {
                    search.style.display = "block";
                }

            else
                {
                    search.style.display = "none";
                }
        }
/*back function*/
function backfunction() {
    window.history.back();
}

function function4() {
    alert("Added to Cart!");
}
