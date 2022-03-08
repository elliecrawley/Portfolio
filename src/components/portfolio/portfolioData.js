// Media

// Accessiility Tool

    // images

    import HighlighterMobile from "../../assets/images/highlightMobile.webp";

    // videos

    import fontSizeDesktop from "../../assets/videos/fontSize.mp4";
    import fontSizeMobile from "../../assets/videos/fontsizemobile.mp4";
    import changeContrastDesktop from "../../assets/videos/changeContrast.mp4"; 
    import changeContrastMobile from "../../assets/videos/changeContrastMobile.mp4"; 
    import highlighterDesktop from "../../assets/videos/highlighter.mp4";
    import dyselxiaMobile from "../../assets/videos/dyslexiamobile.mp4";
    import dyslexiaDesktop from "../../assets/videos/Dyslexia.mp4";

// Emily Carter

    // images

    import ECGalleryMobile from "../../assets/images/ECgallerymobile.webp";
    import ECGalleryDesktop from "../../assets/images/ECgallery.webp";

    // videos

    import infiniteScroll from "../../assets/videos/infiniteScroll.mp4";
    import ISmobile from "../../assets/videos/customMobile.mp4";
    import customDesktop from "../../assets/videos/Personalisation.mp4";
    import customMobile from "../../assets/videos/customMobile.mp4";

// KOKO

    // images

    import KOKOabout from "../../assets/images/KOKOabout.webp";
    import KOKOEco from "../../assets/images/KOKOEcoMobile.webp";
    import KOKODandRDesktop from "../../assets/images/KOKODandRDesktop.webp";
    import KOKODandRMobile from "../../assets/images/KOKODandRMobile.webp";
    import KOKOfaqMobile from "../../assets/images/KOKOfaqMobile.webp";
    import KOKOfaqDesktop from "../../assets/images/KOKOfaq.webp";

    // videos

    import KOKODesktop from "../../assets/videos/KOKOdesktop.mp4";
    import KOKOEcoDesktop from "../../assets/videos/KOKOEcoDesktop.mp4";

// Yolly

    import YollyProductMobile from "../../assets/images/YollyProductMobile.webp";
    import YollyProductDesktop from "../../assets/images/YollyProductDesktop.webp";
    import YollyCartMobile from "../../assets/images/YollyCartMobile.webp";
    import YollyCartDesktop from "../../assets/images/YollyCartDesktop.webp";
    import Mailchimp from "../../assets/images/mailchimp.webp";

// Camel Ski School

  
    import CamelProductsMobile from "../../assets/images/CamelProductsMobile.webp";
    import CamelProductsDesktop from "../../assets/images/CamelProductsDesktop.webp";
    import CamelFAQMobile from "../../assets/images/CamelFAQMobile.webp";
    import CamelFAQDesktop from "../../assets/images/CamelFAQDesktop.webp";
    import CamelGalleryMobile from "../../assets/images/CamelGalleryMobile.webp";
    import CamelGalleryDesktop from "../../assets/images/CamelGalleryDesktop.webp";

// Avery Row

    import Klaviyo from "../../assets/images/Klaviyo.webp";
    import GDPR from "../../assets/images/GDPR.webp";

export var project_details
export function projectData() {
        if(window.location.pathname === "/Accessiblity-tool"){
        project_details = [
            {
                Key: 1, 
                Heading: "Change Font Size", 
                imgSrcMobile: "",
                imgSrcDesktop: "", 
                alt:"", 
                videoSrcDesktop: fontSizeDesktop + "#t=0.1", 
                videoSrcMobile: fontSizeMobile + "#t=0.1",
                type:"video/mp4", 
                media:"video", 
                Description: "Changing the size of text can improve readability but not everyone will be aware of how to do this in their computer settings. This tool demonstrates how the size of text can be easily changed to maximise user comfort."
            },
            {
                Key: 2, 
                Heading: "Change Contrast Levels", 
                imgSrcMobile: "",
                imgSrcDesktop: "", 
                alt:"",
                videoSrcDesktop: changeContrastDesktop +"#t=0.1", 
                videoSrcMobile: changeContrastMobile + "#t=0.1",
                type:"video/mp4", 
                media:"video", 
                Description: "Poor contrast between text and background can seriously impair usability. This tool allows users to adjust the contrast to their preference."
            },
            {
                Key: 3, 
                Heading: "Text Highlighter",  
                imgSrcMobile: HighlighterMobile,
                imgSrcDesktop: "", 
                alt:"", 
                videoSrcDesktop: highlighterDesktop + "#t=0.1", 
                videoSrcMobile: "",
                type:"video/mp4", 
                media:"videoDimageM",
                Description: "Highlighting text can make reading easier by helping users to track their place on the page and to maintain focus when reading long pararaphs. This tool allows users to select the colour and brightness level of the highlight, and to either track the text line by line using the mouse/trackpad or sentence by sentence using the 'd' key to move forwards and the 'w' key to move back. The tool is able to detect sentences that end with question marks, exclamation marks, and full stops, without breaking the sentence when it encounters periods in initials, acronyms, title, and other common uses. This feature is currently only available for desktop."
            }, 
            {
                Key: 4, 
                Heading: "Dyslexia Friendly Styling",  
                imgSrcMobile: "",
                imgSrcDesktop: "", 
                alt:"", 
                videoSrcDesktop:dyslexiaDesktop + "#t=0.1",
                videoSrcMobile: dyselxiaMobile + "#t=0.1", 
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
                imgSrcMobile: "",
                imgSrcDesktop: "", 
                alt:"", 
                videoSrcDesktop: infiniteScroll + "#t=0.1",
                videoSrcMobile: ISmobile + "#t=0.1", 
                type:"video/mp4", 
                media:"video",
                Description: "I developed the code to enable infinite scrolling on the collection pages. This feature can be adjusted from the Shopify customiser and allows the store admin to quickly switch between an infinite scroll which automatically loads more products, one which loads more products when a 'view more' button is clicked, and Shopify's default paginated view. When you click through to a product page it remembers your place on the collections page and quickly restores your position if you navigate back."
            },
            {
                Key: 2, 
                Heading: "Gallery", 
                imgSrcMobile: ECGalleryMobile,
                imgSrcDesktop: ECGalleryDesktop,
                alt:"Gallery Page", 
                videoSrcDesktop:"",
                videoSrcMobile: "", 
                type:"video/mp4", 
                media:"image", 
                Description: "I created two gallery pages to show-case the illustrations and patterns used in the products. The gallery has two layout styles - masonry and grid  - which can be easily switched between from the customiser. The masonry gallery supports as many images as required and the images run horizontally allowing them to be easily paired in the desired way. In order to optomise user experience on this page I resized the images and ran performance tests to ensure minimum loading times whilst maintaining image quality."
            }, 
            {
                Key: 3, 
                Heading: "Product Customisation", 
                imgSrcMobile: "",
                imgSrcDesktop: "", 
                alt:"", 
               videoSrcDesktop:customDesktop + "#t=0.1",
               videoSrcMobile: customMobile + "#t=0.1", 
                type:"video/mp4", 
                media:"video",
                Description: "I added an option to allow customisation of certain product. Selecting this option changes the price of the item and the extra cost is itemised on the cart page along with the customisation details."
            }];
        } else if (window.location.pathname === "/KOKO"){
            project_details = [
                        {
                            Key: 1, 
                            Heading: "About Page", 
                            imgSrcMobile: KOKOabout,
                            imgSrcDesktop: "", 
                            alt:"KOKO about page", 
                            videoSrcDesktop: KOKODesktop + "#t=0.1",
                            videoSrcMobile: "", 
                            type:"video/mp4", 
                            media:"videoDimageM",
                            Description: "I designed and created the page 'What is KOKO, and Why?' by building dynamic content blocks which can be edited or reordered from the customiser. I designed this page with warm greyscale colours and image rich content blocks to follow the client's brand identity."
                        },
                        {
                            Key: 2, 
                            Heading: "KOKO = ECO", 
                            imgSrcMobile: KOKOEco,
                            imgSrcDesktop: "", 
                            alt:"KOKO = ECO page", 
                            videoSrcDesktop: KOKOEcoDesktop + "#t=0.1",
                            videoSrcMobile: "", 
                            type:"video/mp4", 
                            media:"videoDimageM",
                            Description: "I designed and created the 'KOKO = ECO' page to showcase the client's commitment to social and environmental justice in their business model. I contributed to the content of this page by researching the manufacturers of the clothing sold by the client, as well as the requirements for certification with GOTS, OEKO-TEX Standard 100, and PETA. I created this page by building dynamic content blocks which can be edited or reordered from the customiser, and supplementing the client's image assets with appropriate images sourced from stock photo sites."
                        }, 
                        {
                            Key: 3, 
                            Heading: "FAQs Page",  
                            imgSrcMobile: KOKOfaqMobile,
                            imgSrcDesktop: KOKOfaqDesktop,  
                            alt:"KOKO FAQ page", 
                            videoSrcDesktop:"", 
                            type:"video/mp4", 
                            media:"image",
                            Description: "In designing this FAQ page I decided to seperate the text rich content into sections that would allow users to easily find the desired information. I generated the content for this page using information from other pages, as well as research from sources such as the clothing manufacturer's website; the FairWear Foundation; the official websites for GOTS, OEKO-TEX Standard 100, and PETA certification; and the Delivery and Returns section of the 'Print on Demand' company used by the client."
                        }, 
                        {
                            Key: 4, 
                            Heading: "Delivery & Returns Page",  
                            imgSrcMobile: KOKODandRMobile,
                            imgSrcDesktop: KOKODandRDesktop,  
                            alt:"KOKO FAQ page", 
                           videoSrcDesktop:"", 
                            type:"video/mp4", 
                            media:"image",
                            Description: "I generated and styled the 'Refund' and 'Terms of Service' pages, and created a dedicated 'Shipping and Returns' page to present a summary of the key information in a more accessible way. To generate the content for this page I researched the Delivery and Returns policies of the 'Print on Demand' company used by the client."
                        }
                    ]
    // } else if (window.location.pathname === "/ForestWise"){
    //     project_details = [
    //         {
    //             Key: 1, 
    //             Heading: "Bespoke Parallax Image", 
    //             imgSrc: "", 
    //             alt:"", 
    //            videoSrcDesktop:"videos/ForestWiseParallax.mp4#t=0.1",
    //            videoSrcMobile: "videos/ARKIVEmobile.mp4#t=0.1", 
    //             type:"video/mp4", 
    //             media:"video",
    //             Description: "I wanted to use a full screen hero image that animated on scroll to give the home page interest and depth. Using Inkscape I created the image in multiple layers which could then be animated on scroll to create a parallax effect. To animate the layers I used the scroll interactions library 'ScrollMagic' and the JavaScript animations library 'GSAP'."
    //         },
    //         {
    //             Key: 2, 
    //             Heading: "Carosel", 
    //             imgSrc: "", 
    //             alt:"", 
    //            videoSrcDesktop:"videos/ForestWiseCarosel.mp4#t=0.1",
    //            videoSrcMobile: "videos/ARKIVEmobile.mp4#t=0.1", 
    //             type:"video/mp4", 
    //             media:"video",
    //             Description: "I created an overlapping image carosel using javascript to navigate between cards."
    //         }, 
    //         {
    //             Key: 3, 
    //             Heading: "Calender",  
    //             imgSrc: "images/FWCalender.webp", 
    //             alt:"test", 
    //            videoSrcDesktop:"", 
    //             type:"video/mp4#t=0.1", 
    //             media:"image",
    //             Description: "I designed a calender to display the fictional upcoming events. Although the calender is not currently dynamic I have used Javascript to demonstrate how the user interface would change as a user interacted with it."
    //         },
    //         {
    //             Key: 4, 
    //             Heading: "Contact section", 
    //             imgSrc: "images/FWContact.webp", 
    //             alt:"contact form", 
    //            videoSrcDesktop:"", 
    //             type:"", 
    //             media:"image",
    //             Description: "This site features a fully functional inquiries form which uses PHP to validate the form content and output error or success messages as appropriate. Feel free to use it to send me a message! The custom image for this section was also created using InkScape."
    //         }];
    } else if (window.location.pathname === "/Yolly"){
        project_details = [
            {
                Key: 1, 
                Heading: "Editing Products", 
                imgSrcMobile: YollyProductMobile, 
                imgSrcDesktop: YollyProductDesktop,
                alt:"Yolly Homepage", 
                videoSrcDesktop:"",
                videoSrcMobile:"", 
                type:"", 
                media:"image",
                secondaryBtn: false,
                href:"",
                Description: "In preparation for the Christmas period I uploaded new products, created product collections, and helped edit the product descriptions for the client's seasonal collection. This included some photo editing to ensure the images were optimally displayed."
            },
            {
                Key: 2, 
                Heading: "Additional Checkout Information", 
                imgSrcMobile: YollyCartMobile, 
                imgSrcDesktop: YollyCartDesktop,
                alt:"Yolly Cart Page", 
                videoSrcDesktop:"",
                videoSrcMobile:"", 
                type:"", 
                media:"image",
                secondaryBtn: false,
                href:"",
                Description: "I added additional text boxes to the cart page for customers to enter specific delivery requirements as well as a contact telephone number. This information is viewable by the client from their admin panel and also passes through directly to the packing slips generated by the client's order printing app."
            },
            {
                Key: 3, 
                Heading: "Creating email campaigns", 
                imgSrcMobile: Mailchimp, 
                imgSrcDesktop: Mailchimp,
                alt:"Mailchimp logo", 
                videoSrcDesktop:"", 
                videoSrcMobile:"", 
                type:"", 
                media:"image",
                secondaryBtn: false,
                href:"",
                Description: "I helped to create the client's Christmas email campaign by working with the email marketing platform Mailchimp. I edited the client's newsletter template to include their seasonal products and Christmas delivery information, as well as generating and including a seasonal discount code."
            }
        ];
    } else if (window.location.pathname === "/Camel-Ski-School"){
            project_details = [
                {
                    Key: 1, 
                    Heading: "Image Editing",  
                    imgSrcMobile: CamelProductsMobile,
                    imgSrcDesktop: CamelProductsDesktop,  
                    alt:"Camel Ski Products", 
                    videoSrcDesktop:"",
                    videoSrcMobile:"", 
                    type:"", 
                    media:"image",
                    secondaryBtn: false,
                    href:"",
                    Description: "As part of updating their store the client had taken some new photos of their products. I edited these images so that they were the correct size and format to be uploaded, and then uploaded them to the matching product."
                },
                {
                    Key: 2, 
                    Heading: "FAQ Page",  
                    imgSrcMobile: CamelFAQMobile,
                    imgSrcDesktop: CamelFAQDesktop,   
                    alt:"Camel Ski FAQ Page", 
                    videoSrcDesktop:"", 
                    videoSrcMobile:"", 
                    type:"", 
                    media:"image",
                    secondaryBtn: false,
                    href:"",
                    Description: "I created an FAQ page with dynamic accordion blocks which can be edited and rearranged from the Shopify customiser."
                },
                {
                    Key: 3, 
                    Heading: "Gallery Page",  
                    imgSrcMobile: CamelGalleryMobile,
                    imgSrcDesktop: CamelGalleryDesktop,  
                    alt:"", 
                    videoSrcDesktop:"",
                    videoSrcMobile:"", 
                    type:"", 
                    media:"image",
                    secondaryBtn: false,
                    href:"",
                    Description: "I created a simple grid style gallery to showcase the client's amazing lifestyle photos."
                }
            ];
    } else if (window.location.pathname === "/Avery-Row"){
        project_details = [
            {
                Key: 1, 
                Heading: "GDPR Compliance", 
                imgSrcMobile: GDPR, 
                imgSrcDesktop: GDPR, 
                alt:"GDPR logo", 
                videoSrcDesktop:"",
                videoSrcMobile:"", 
                type:"", 
                media:"image",
                Description: "I did a detailed audit of the company's privacy policy to assess it for GDPR compliance. I used the GDPR and ICO websites as well as the Shopify GDPR white paper to bring the privacy policy inline with GDPR best practice as well as making recommendations for ways that the company could improve their data protection policies."
            },
            {
                Key: 2, 
                Heading: "Klaviyo Email Templates", 
                imgSrcMobile: Klaviyo,
                imgSrcDesktop: Klaviyo, 
                alt:"Klaviyo logo", 
                videoSrcDesktop:"",
                videoSrcMobile:"", 
                type:"", 
                media:"image",
                Description: "I used the email marketting platform Klaviyo to edit several email templates in order to properly integrate them with Shopify. This allowed the client to design their templates without needing developer assistence and export the code to Shopify where it dynamically input the data required for accurate order and shipping conformation emails."
             }
        ]
    }
}

export default {projectData, project_details};
