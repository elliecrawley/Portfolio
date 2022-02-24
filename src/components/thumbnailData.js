import ECthumbnail from "../assets/images/ECthumbnail.webp"
import ECHero from "../assets/images/ECHero.webp"

import KOKOthumbnail from "../assets/images/KOKOThumbnail.webp"
import KOKOHero from "../assets/images/KOKOHero.webp"

import Yollythumbnail from "../assets/images/YollyThumbnail.webp"
import YollyHero from "../assets/images/YollyHero.webp"

import AveryRowHero from "../assets/images/AveryRowHero.webp"
import AveryRowThumbnail from "../assets/images/AveryRowThumbnail.webp"

import Camelthumbnail from "../assets/images/CamelSkiThumbnail.webp"
import CamelHero from "../assets/images/camelHero.webp"

import Accessibilitythumbnail from "../assets/images/accessibleThumbnail.webp"
import AccessibilityHero from "../assets/images/accessibleHero.webp"

export var thumbnail_details
export function thumbnailData() {
        thumbnail_details = [
                
                {       
                        id: 1, 
                        path:"/Emily-Carter", 
                        Project:"Emily Carter", 
                        mobileSrc: ECthumbnail,
                        desktopSrc: ECHero,
                        alt:"Emily Carter Homepage"
                },
                {
                        id: 2, 
                        path:"/KOKO", 
                        Project:"KOKO", 
                        mobileSrc: KOKOthumbnail, 
                        desktopSrc: KOKOHero,
                        alt:"KOKO thumbnail"
                },
                {       
                        id: 3, 
                        path:"/Yolly", 
                        Project:"Yolly", 
                        mobileSrc: Yollythumbnail,
                        desktopSrc: YollyHero,
                        alt:"Yolly thumbnail", 
                },
                {
                        id: 4, 
                        path:"/Avery-Row", 
                        Project:"Avery Row", 
                        mobileSrc: AveryRowThumbnail,  
                        desktopSrc: AveryRowHero,
                        alt:"Avery Row thumbnail"
                },
                {
                        id: 5, 
                        path:"/Camel-Ski-School", 
                        Project:"Camel Ski School", 
                        mobileSrc: Camelthumbnail, 
                        desktopSrc: CamelHero,
                        alt:"Camel Ski School thumbnail"
                },
                {
                        id: 6, 
                        path:"/Accessiblity-tool", 
                        Project:"Accessibility Tool", 
                        mobileSrc: Accessibilitythumbnail,  
                        desktopSrc: AccessibilityHero,
                        alt:"Accessibility Tools Homepage", 
                }
        ]
}

export default {thumbnailData, thumbnail_details};
