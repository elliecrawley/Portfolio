import ECthumbnail from "../assets/images/ECthumbnail.png"
import ECHero from "../assets/images/emilyCarter.png"
import KOKOthumbnail from "../assets/images/KOKOheroMobile.png"
import KOKOHero from "../assets/images/KOKOheroDesktop.png"
import Yollythumbnail from "../assets/images/YollyThumbnail.png"
import YollyHero from "../assets/images/YollyHero.png"
import AveryRowDesktop from "../assets/images/AveryRow.png"
import AveryRowMobile from "../assets/images/AveryRowThumbnail.png"
import Camelthumbnail from "../assets/images/CamelSki.png"
import CamelHero from "../assets/images/camelHero.png"
import Accessibilitythumbnail from "../assets/images/accessiblethumbnail.png"
import AccessibilityHero from "../assets/images/accessible-hero.png"

export var thumbnail_details
export function thumbnailData() {
        thumbnail_details = [
                
                {       
                        id: 1, 
                        path:"/Emily-Carter", 
                        Project:"Emily Carter", 
                        src: ECthumbnail,
                        desktopSrc: ECHero, 
                        alt:"Emily Carter Homepage"
                },
                {
                        id: 2, 
                        path:"/KOKO", 
                        Project:"KOKO", 
                        src: KOKOthumbnail, 
                        desktopSrc: KOKOHero,
                        alt:"KOKO thumbnail"
                },
                {       
                        id: 3, 
                        path:"/Yolly", 
                        Project:"Yolly", 
                        src: Yollythumbnail,
                        desktopSrc: YollyHero,
                        alt:"Yolly thumbnail", 
                },
                {
                        id: 4, 
                        path:"/Avery-Row", 
                        Project:"Avery Row", 
                        src: AveryRowMobile, 
                        desktopSrc: AveryRowDesktop,
                        alt:"Avery Row thumbnail"
                },
                {
                        id: 5, 
                        path:"/Camel-Ski-School", 
                        Project:"Camel Ski School", 
                        src: Camelthumbnail, 
                        desktopSrc: CamelHero,
                        alt:"Camel Ski School thumbnail"
                },
                {
                        id: 6, 
                        path:"/Accessiblity-tool", 
                        Project:"Accessibility Tool", 
                        src: Accessibilitythumbnail, 
                        desktopSrc: AccessibilityHero,
                        alt:"Accessibility Tools Homepage", 
                }
        ]
}

export default {thumbnailData, thumbnail_details};
