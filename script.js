<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js">
        
        
        
        //toggle button 
        $("#openbrowser").click(function(){
            $("#browser").toggle();            
        });
        
        
       
        //load youtube video
        $("#search_enter").click(function(){

            $(".responsive").css("visibility","visible");
            $("#startpage").css("visibility","hidden");

        });
        
        //get src of video 
        var fullVid = document.getElementById("vidSource").src;
        
        var slicedVid = fullVid.substr(fullVid.length -11);
        
        //pressing submit button changes slicedVid & shows screen
        
        var inputVal;
        function getInputValue(){
            // Selecting the input element and get its value 
            inputVal = document.getElementById("myInput").value;

            // Displaying the value
            //https://www.youtube.com/embed/tgbNymZ7vqY
            
            
            var replacedStr = fullVid.replace("tgb", inputVal.substr(inputVal.length - 11));
            
            var ab = fullVid.replace(fullVid.substr(fullVid.length - 11),inputVal.substr(inputVal.length - 11));
            alert(ab);
            
            document.getElementById('vidSource').src = ab;
        }
      
        
        
        //SETTING UP CAMERA
            var video = document.querySelector("#videoElement");

            if (navigator.mediaDevices.getUserMedia) {
              navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                  video.srcObject = stream;
                })
                .catch(function (err0r) {
                  console.log("Something went wrong!");
                });
            }
        
            $("#enableCamera").click(function(){
               alert('hi');
            });
    
        
        
        
        /*window.onload = function(){
        */
</script>
    