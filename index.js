

   function myFunction() {
       let input, filter, ul, li, a, i, txtValue;
       input = document.getElementById("textInput");
       /*we want to grab the value for the list search */
       filter = input.value.toUpperCase();
       ul = document.getElementById("name-ul");
       li = ul.getElementsByTagName("li");


       for(let i = 0; i < li.length; i++){
         a = li[i].getElementsByTagName("a")[0];
         txtValue =  a.textContent || a.innerText;
         if(txtValue.toUpperCase().indexOf(filter) > -1){
             li[i].style.display = "";     
         } else {
             li[i].style.display = "none";
         }
    }



   }

   






