export var project_details
export function projectData() {
        if(window.location.pathname === "/Accessiblity-tool"){
        project_details = [
            {
                Key: 1, 
                Heading: "Change Font Size", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/fontSize.mp4", 
                type:"video/mp4", 
                media:"video", 
                Description: "Changing the size of text can improve readability but not everyone will be aware of how to do this in their computer settings. This tool demonstrates how the size of text can be easily changed to maximise user comfort."
            },
            {
                Key: 2, 
                Heading: "Change Contrast Levels", 
                imgSrc: "", 
                alt:"",
                videoSrc:"videos/changeContrast.mp4", 
                type:"video/mp4", 
                media:"video", 
                Description: "Poor contrast between text and background can seriously impair usability. This tool allows users to adjust the contrast to their preference."
            },
            {
                Key: 3, 
                Heading: "Text Highlighter",  
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/highlighter.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "Highlighting text can make reading easier by helping users to track their place on the page and to maintain focus when reading long pararaphs. This tool allows users to select the colour and brightness level of the highlight, and to either track the text line by line using the mouse/trackpad or sentence by sentence using the 'd' key to move forwards and the 'w' key to move back. The tool is able to detect sentences that end with question marks, exclamation marks, and full stops, without breaking the sentence when it encounters periods in initials, acronyms, title, and other common uses."
            }, 
            {
                Key: 4, 
                Heading: "Dyslexia Friendly Styling",  
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/Dyslexia.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "The 'Dyslexia Friendly Style Guide' by the British Dyslexia Association suggests several elements to consider in Dyslexia friendly web styling, including the readability of fonts, headings and structure, and colour. This tool changes the styling of written content to make it more Dyslexia friendly by changing the font family and size; increasing character, word, and line spacing; replacing underlined and italisied content with bold styling and uppercase/small caps text with lower case text; increasing the difference in size between headings and body text; changing the alignment of text; emphasising hyperlinks; and adjusting colour and contrast levels."
            }
        ];
    } else if (window.location.pathname === "/Emily-Carter"){
        project_details = [
            {
                Key: 1, 
                Heading: "Infinite Scroll", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/infiniteScroll.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "I developed the code to enable infinite scrolling on the collection pages. This feature can be adjusted from the Shopify customiser and allows the store admin to quickly switch between an infinite scroll which automatically loads more products, one which loads more products when a 'view more' button is clicked, and Shopify's default paginated view. When you click through to a product page it remembers your place on the collections page and quickly restores your position if you navigate back."
            },
            {
                Key: 2, 
                Heading: "Gallery", 
                imgSrc: "",
                alt:"", 
                videoSrc:"videos/Gallery.mp4", 
                type:"video/mp4", 
                media:"video", 
                Description: "I created two gallery pages to show-case the illustrations and patterns used in the products. The gallery has two layout styles - masonry and grid  - which can be easily switched between from the customiser. The masonry gallery supports as many images as required and the images run horizonatlly allowing them to be easily paired in the desired way."
            }, 
            {
                Key: 3, 
                Heading: "Product Customisation", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/Personalisation.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "I added an option to allow customisation of certain product. Selecting this option changes the price of the item and the extra cost is itemised on the cart page along with the customisation details."
            }];
    } else if (window.location.pathname === "/WineSpark"){
        project_details = [
            {
                Key: 1, 
                Heading: "Membership Page", 
                imgSrc: "images/signupWineSpark.png",
                alt:"WineSpark Signup Page", 
                videoSrc:"", 
                type:"", 
                media:"image", 
                Description: "I designed and created the membership page, integrating the form fields generated by the BOLD membership app within a grid layout."
            },
            {
                Key: 2, 
                Heading: "Membership specific content", 
                imgSrc: "images/membership.png",
                alt:"WineSpark Membership Prices", 
                videoSrc:"", 
                type:"", 
                media:"image",
                Description: "I installed and set up the BOLD memberships app allowing different content to be displayed based on whether a user has signed up or not. This included displaying different product prices to members vs non members. I worked alongside the lead designer and developer to implement two different homepage views depending on whether the user was logged in as a member. I also created the code which allowed for specific conditions to be met before products could be added to the basket, in this case a minimum number of bottles had to be ordered and thereafter bottles needed to be added in multiples of 6. This code needed to be implemented in a way that distinguished between single bottles and cases of wine."
            }, 
            {
                Key: 3, 
                Heading: "Responsive grid layouts",  
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ResponsiveGrids.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "The branding guidelines required content to be styled using grid layouts. I created responsive reusable blocks which could be easily adapted with different content depending on whether the user was a member."
            }];
    } else if (window.location.pathname === "/Cultured-Biomecare"){
        project_details = [
            {
                Key: 1, 
                Heading: "Content Pages", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/CulturedWholePage.mp4", 
                type:"video/mp4", 
                media: "video",
                Description: "I worked alongside the lead developer to implement many of the key content pages in the About and Philosophy dropdown menus. These were all created as dynamic sections which can be easily added, removed, edited, or rearranged from the customiser to give the client maximum creative control and reduce the need for ongoing developer support in maintaining the site."
            },
            {
                Key: 2, 
                Heading: "Product Pages", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/CulturedProduct.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "I edited the product pages to add dynamic and fully customisable blocks, and ensured responsiveness across screen sizes."
            }];
    } else if (window.location.pathname === "/ForestWise"){
        project_details = [
            {
                Key: 1, 
                Heading: "Bespoke Parallax Image", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ForestWiseParallax.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "I wanted to use a full screen hero image that animated on scroll to give the home page interest and depth. Using Inkscape I created the image in multiple layers which could then be animated on scroll to create a parallax effect. To animate the layers I used the scroll interactions library 'ScrollMagic' and the JavaScript animations library 'GSAP'."
            },
            {
                Key: 2, 
                Heading: "Carosel", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ForestWiseCarosel.mp4", 
                type:"video/mp4", 
                media:"video",
                Description: "I created an overlapping image carosel using javascript to navigate between cards."
            }, 
            {
                Key: 3, 
                Heading: "Calender",  
                imgSrc: "images/FWCalender.png", 
                alt:"test", 
                videoSrc:"", 
                type:"video/mp4", 
                media:"image",
                Description: "I designed a calender to display the fictional upcoming events. Although the calender is not currently dynamic I have used Javascript to demonstrate how the user interface would change as a user interacted with it."
            },
            {
                Key: 4, 
                Heading: "Contact section", 
                imgSrc: "images/FWContact.png", 
                alt:"contact form", 
                videoSrc:"", 
                type:"", 
                media:"image",
                Description: "This site features a fully functional inquiries form which uses PHP to validate the form content and output error or success messages as appropriate. Feel free to use it to send me a message! The custom image for this section was also created using InkScape."
            }];
    } else if (window.location.pathname === "/Smaller-Projects"){
        project_details = [
            {
                Key: 1, 
                Heading: "Yolly", 
                imgSrc: "images/YollyThumbnail.png", 
                alt:"Yolly Homepage", 
                videoSrc:"", 
                type:"", 
                media:"image",
                secondaryBtn: true,
                href:"https://yolly.co.uk",
                Description: "An independent florist based in London. I helped to upload new products and create product collections, edit product descriptions, update delivery information, and create newsletters using MailChimp. This store was built using the 'Debut' theme."
            },
            {
                Key: 2, 
                Heading: "ARKIVE Headcare",  
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ARKIVE.mp4", 
                type:"video/mp4", 
                media:"video",
                secondaryBtn: true,
                href:"https://arkiveheadcare.com",
                Description: "ARKIVE Headcare is a high-end hair products retailer founded by award winning hairdresser Adam Reed. I created a mega menu which can be easily edited from the Shopify customiser. Menu items can be added and rearranged and the menu supports multiple images which can be repositioned between the different columns. The menu is fully responsive for mobile and tablet. This store was built using the 'Dawn' theme."
            },
            {
                Key: 3, 
                Heading: "Camel Ski School",  
                imgSrc: "images/CamelSki.png", 
                alt:"", 
                videoSrc:"", 
                type:"", 
                media:"image",
                secondaryBtn: true,
                href:"https://camelskischool.myshopify.com",
                Description: "Camel Ski School is the UK’s largest waterski centre. Their Shopify store allows them to sell branded merchandise in addition to their main booking site. I uploaded new products, created product filters, and edited images to make them the correct size and file format to upload. I created an FAQ page with dynamic accordion blocks which can be edited and rearranged from the Shopify customiser, as well as a grid style image gallery. This store was built using the 'Dawn' theme."
            }
        ];
    } else if (window.location.pathname === "/Avery-Row"){
        project_details = [
            {
                Key: 1, 
                Heading: "GDPR Compliance", 
                imgSrc: "images/GDPR.png", 
                alt:"GDPR logo", 
                videoSrc:"", 
                type:"", 
                media:"image",
                Description: "I did a detailed audit of the company's privacy policy to assess it for GDPR compliance. I used the GDPR and ICO websites as well as the Shopify GDPR white paper to bring the privacy policy inline with GDPR best practice as well as making recommendations for ways that the company could improve their data protection policies."
            },
            {
                Key: 2, 
                Heading: "Klaviyo Email Templates", 
                imgSrc: "images/Klaviyo.jpg", 
                alt:"Klaviyo logo", 
                videoSrc:"", 
                type:"", 
                media:"image",
                Description: "I used the email marketting platform Klaviyo to edit several email templates in order to properly integrate them with Shopify. This allowed the client to design their templates without needing developer assistence and export the code to Shopify where it dynamically input the data required for accurate order and shipping conformation emails."
            },
            {
                Key: 3, 
                Heading: "App installation",  
                imgSrc: "images/ARApps.png", 
                alt:"Gift wrapping option", 
                videoSrc:"", 
                type:"video/mp4", 
                media:"image",
                Description: "I installed and configured a selection of apps to add custom gift wrapping options to the cart page and improve GDPR compliance."
            }
        ];
    }
}

export default {projectData, project_details};
