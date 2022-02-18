export var project_details
export function projectData() {
        if(window.location.pathname === "/Accessiblity-tool"){
        project_details = [
            {
                Key: 1, 
                Heading: "Change Font Size", 
                imgSrc: "images/fontsizethumb.png", 
                alt:"Font Size Video Thumbnail", 
                videoSrc:"videos/fontSize.mp4#t=0.1", 
                mobileVideo: "videos/fontsizemobile.mp4#t=0.1",
                type:"video/mp4", 
                media:"video", 
                Description: "Changing the size of text can improve readability but not everyone will be aware of how to do this in their computer settings. This tool demonstrates how the size of text can be easily changed to maximise user comfort."
            },
            {
                Key: 2, 
                Heading: "Change Contrast Levels", 
                imgSrc: "images/contrastthumb.png",
                alt:"Contrast Video Thumbnail",
                videoSrc:"videos/changeContrast.mp4#t=0.1", 
                mobileVideo: "videos/changeContrastMobile.mp4#t=0.1",
                type:"video/mp4", 
                media:"video", 
                Description: "Poor contrast between text and background can seriously impair usability. This tool allows users to adjust the contrast to their preference."
            },
            {
                Key: 3, 
                Heading: "Text Highlighter",  
                imgSrc: "images/highlightMobile.png", 
                alt:"Text Highlighter Thumbnail", 
                videoSrc:"videos/highlighter.mp4#t=0.1", 
                mobileVideo: "",
                type:"video/mp4", 
                media:"videoDimageM",
                Description: "Highlighting text can make reading easier by helping users to track their place on the page and to maintain focus when reading long pararaphs. This tool allows users to select the colour and brightness level of the highlight, and to either track the text line by line using the mouse/trackpad or sentence by sentence using the 'd' key to move forwards and the 'w' key to move back. The tool is able to detect sentences that end with question marks, exclamation marks, and full stops, without breaking the sentence when it encounters periods in initials, acronyms, title, and other common uses. This feature is currently only available for desktop."
            }, 
            {
                Key: 4, 
                Heading: "Dyslexia Friendly Styling",  
                imgSrc: "images/dyslexiathumb.png", 
                alt:"Dyslexia friendly video thumbnail", 
                videoSrc:"videos/Dyslexia.mp4#t=0.1",
                mobileVideo: "videos/dyslexiamobile.mp4#t=0.1", 
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
                imgSrc: "images/ISthumb.png", 
                alt:"Infinite scroll video thumbnail", 
                videoSrc:"videos/infiniteScroll.mp4#t=0.1",
                mobileVideo: "videos/ISmobile.mp4#t=0.1", 
                type:"video/mp4", 
                media:"video",
                Description: "I developed the code to enable infinite scrolling on the collection pages. This feature can be adjusted from the Shopify customiser and allows the store admin to quickly switch between an infinite scroll which automatically loads more products, one which loads more products when a 'view more' button is clicked, and Shopify's default paginated view. When you click through to a product page it remembers your place on the collections page and quickly restores your position if you navigate back."
            },
            {
                Key: 2, 
                Heading: "Gallery", 
                imgSrc: "images/gallerythumb.png",
                alt:"Gallery Video Thumbnail", 
                videoSrc:"videos/Gallery.mp4#t=0.1",
                mobileVideo: "videos/galleryMobile.mp4#t=0.1", 
                type:"video/mp4", 
                media:"video", 
                Description: "I created two gallery pages to show-case the illustrations and patterns used in the products. The gallery has two layout styles - masonry and grid  - which can be easily switched between from the customiser. The masonry gallery supports as many images as required and the images run horizontally allowing them to be easily paired in the desired way."
            }, 
            {
                Key: 3, 
                Heading: "Product Customisation", 
                imgSrc: "images/customthumb.png", 
                alt:"Product Customisation video thumbnail", 
                videoSrc:"videos/Personalisation.mp4#t=0.1",
                mobileVideo: "videos/customMobile.mp4#t=0.1", 
                type:"video/mp4", 
                media:"video",
                Description: "I added an option to allow customisation of certain product. Selecting this option changes the price of the item and the extra cost is itemised on the cart page along with the customisation details."
            }];
    } else if (window.location.pathname === "/ForestWise"){
        project_details = [
            {
                Key: 1, 
                Heading: "Bespoke Parallax Image", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ForestWiseParallax.mp4#t=0.1",
                mobileVideo: "videos/ARKIVEmobile.mp4#t=0.1", 
                type:"video/mp4", 
                media:"video",
                Description: "I wanted to use a full screen hero image that animated on scroll to give the home page interest and depth. Using Inkscape I created the image in multiple layers which could then be animated on scroll to create a parallax effect. To animate the layers I used the scroll interactions library 'ScrollMagic' and the JavaScript animations library 'GSAP'."
            },
            {
                Key: 2, 
                Heading: "Carosel", 
                imgSrc: "", 
                alt:"", 
                videoSrc:"videos/ForestWiseCarosel.mp4#t=0.1",
                mobileVideo: "videos/ARKIVEmobile.mp4#t=0.1", 
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
                type:"video/mp4#t=0.1", 
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
    // } else if (window.location.pathname === "/Avery-Row"){
    //     project_details = [
    //         {
    //             Key: 1, 
    //             Heading: "GDPR Compliance", 
    //             imgSrc: "images/GDPR.png", 
    //             alt:"GDPR logo", 
    //             videoSrc:"", 
    //             type:"", 
    //             media:"image",
    //             Description: "I did a detailed audit of the company's privacy policy to assess it for GDPR compliance. I used the GDPR and ICO websites as well as the Shopify GDPR white paper to bring the privacy policy inline with GDPR best practice as well as making recommendations for ways that the company could improve their data protection policies."
    //         },
    //         {
    //             Key: 2, 
    //             Heading: "Klaviyo Email Templates", 
    //             imgSrc: "images/Klaviyo.jpg", 
    //             alt:"Klaviyo logo", 
    //             videoSrc:"", 
    //             type:"", 
    //             media:"image",
    //             Description: "I used the email marketting platform Klaviyo to edit several email templates in order to properly integrate them with Shopify. This allowed the client to design their templates without needing developer assistence and export the code to Shopify where it dynamically input the data required for accurate order and shipping conformation emails."
    //          }
    }
}

export default {projectData, project_details};
