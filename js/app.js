/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var secNum = document.querySelectorAll('.sec');       // to get all section in the page due to create the same number of links. 
var ulList = document.querySelector("#navbar__list"); // unorderd list that we add the items to it.
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
secNum.forEach( section => {                            // loop on the sections and make links with same naumber of sections and give each section the data nav value
    var secName = section.getAttribute('data-nav');     // get the section names "the data nav"
    var itemsList = document.createElement('li');       // create item list
    var menu_link = document.createElement('a');        // create link for the list
    menu_link.setAttribute("class","menu__link");       // add class menu link to show the style of tha nav bar 
    var textNode = document.createTextNode(secName);    // add the data nav to text Node
    menu_link.addEventListener('click' , ()=>{          //function When clicking an item from the nav bar, the link should scroll to its section
        section.scrollIntoView({behavior: "smooth"});
    })
    menu_link.appendChild(textNode);   //append the textnode "Section name" to the links of the list
    itemsList.appendChild(menu_link);  // append the links to the nav bar list
    ulList.appendChild(itemsList);     // append the item list to craete the unorderd list "bulid the nav"
   
});

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
function activeSection() {                                  // determine the active class and the active link through scrolling 
        secNum.forEach( section=>{                          //loop on the sections to specifiy which section on the viewport then add the active class to the active section
            var Rect = section.getBoundingClientRect();     // determine the section position in the viewport
            if (Rect.top>=-100 && Rect.top <= 500){
                secNum.forEach( (del)=>{                   // loop on the other sections that dont have the active class to remove the class from it 
                    if ( del.classList.contains('your-active-class')){
                        del.classList.remove('your-active-class');
                    }
                })
                section.setAttribute('class','your-active-class');  // if the section in the determined position in the view port then add the active class on it 
        

                const myLinks = document.querySelectorAll('a'); // get all links in the list to loop on it 
                myLinks.forEach( a=>{                           //loop on all links to specifiy the active link 
                    if ( section.getAttribute('data-nav') == a.textContent){ // if the active section "section name" matches the active link "link name"   
                        myLinks.forEach( (del)=>{                              //loop to delete all the links that don`t have the active link to delete tha class from it
                            if ( del.classList.contains('your-active-link')){
                                del.classList.remove('your-active-link');
                                del.classList.add('st');                   //style for the links 
                            }
                        })
                        a.setAttribute('class','your-active-link')   //add the class active link when scrolling on its active section
                    }
                });
            }
        })
}

//Hide fixed navigation bar while not scrolling (still be present on page load).
function hideNavbar() {
var timer = null;    
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);  // to clear the timer that set by the setTimeout function
        document.getElementById("navbar").style.top = "0"; // return the nav to its real position        
    }
    timer = setTimeout(function() {    //  after 5000ms on stop scorlling the navebar will be hided
        document.getElementById("navbar").style.top = "-300px";
    }, 5000);
});
}







/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active