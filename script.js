console.log('myscript');



//add script on dom loaded

document.addEventListener("DOMContentLoaded", () => {
    let landingpagediv = document.querySelector(".landingpage");
    //reset the scroll position on page reload
    window.scrollTo(0, 0);

    //event listener to make title div disappear

    document.addEventListener("scroll", (e) => {
        landingpagediv.classList.add("hidden");
        


    })


    //add a click to our down arrow
    let downarrow = document.querySelector(".downarrow");

    downarrow.addEventListener('click', (e) => {
        landingpagediv.classList.add("hidden");



        
        


    })

   
    if (landingpagediv.classList.contains("landingpage"))
        {
            console.log('to');
            
    
            fetch("about.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                return response.text(); 
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching the HTML file:', error);
            });
        }

    let maindiv = document.querySelector(".mainpagediv");

    let content = document.querySelector(".content");


    //listeners for the links 

    let links = document.querySelectorAll("li")

    links.forEach((e) => {

        e.addEventListener('click', (e) => {
            console.log(e.target.textContent);

            content.innerHTML = "";

            console.log(maindiv.childNodes)
            //once one is clicked, we want to hide any divs on the main page div that are visible

            //and then we want to set the html to the about me page





            let text = e.target.textContent;

           
               
                            // fetch the file
                            fetch(text.toLowerCase()+".html")
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response error');
                                }
                                return response.text(); 
                            })
                            .then(html => {
                                content.innerHTML = html;
                            })
                            .catch(error => {
                                console.error('Error fetching the HTML file:', error);
                            });

                            


        })
    })



    //project down arrow logic






});