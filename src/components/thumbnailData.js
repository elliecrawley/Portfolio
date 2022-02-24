import ECthumbnail from "../assets/images/ECthumbnail.webp"
import ECthumbnailLQ from "../assets/images/ECthumbnailLQ.webp"
import ECHero from "../assets/images/ECHero.webp"
import ECHeroLQ from "../assets/images/ECHeroLQ.webp"

import KOKOthumbnail from "../assets/images/KOKOThumbnail.webp"
import KOKOthumbnailLQ from "../assets/images/KOKOThumbnailLQ.webp"
import KOKOHero from "../assets/images/KOKOHero.webp"
import KOKOHeroLQ from "../assets/images/KOKOHeroLQ.webp"

import Yollythumbnail from "../assets/images/YollyThumbnail.webp"
import YollythumbnailLQ from "../assets/images/YollyThumbnailLQ.webp"
import YollyHero from "../assets/images/YollyHero.webp"
import YollyHeroLQ from "../assets/images/YollyHeroLQ.webp"

import AveryRowHero from "../assets/images/AveryRowHero.webp"
import AveryRowHeroLQ from "../assets/images/AveryRowHeroLQ.webp"
import AveryRowThumbnail from "../assets/images/AveryRowThumbnail.webp"
import AveryRowThumbnailLQ from "../assets/images/AveryRowThumbnailLQ.webp"

import Camelthumbnail from "../assets/images/CamelSkiThumbnail.webp"
import CamelthumbnailLQ from "../assets/images/CamelSkiThumbnailLQ.webp"
import CamelHero from "../assets/images/camelHero.webp"
import CamelHeroLQ from "../assets/images/camelHeroLQ.webp"

import Accessibilitythumbnail from "../assets/images/accessibleThumbnail.webp"
import AccessibilitythumbnailLQ from "../assets/images/accessibleThumbnailLQ.webp"
import AccessibilityHero from "../assets/images/accessibleHero.webp"
import AccessibilityHeroLQ from "../assets/images/accessibleHeroLQ.webp"

export var thumbnail_details
export function thumbnailData() {
        thumbnail_details = [
                
                {       
                        id: 1, 
                        path:"/Emily-Carter", 
                        Project:"Emily Carter", 
                        mobileSrc: ECthumbnail,
                        LQMobileSrc: ECthumbnailLQ,
                        desktopSrc: ECHero,
                        LQDesktopSrc: ECHeroLQ, 
                        alt:"Emily Carter Homepage"
                },
                {
                        id: 2, 
                        path:"/KOKO", 
                        Project:"KOKO", 
                        LQMobileSrc: KOKOthumbnailLQ,
                        mobileSrc: KOKOthumbnail, 
                        desktopSrc: KOKOHero,
                        LQDesktopSrc: KOKOHeroLQ,
                        alt:"KOKO thumbnail"
                },
                {       
                        id: 3, 
                        path:"/Yolly", 
                        Project:"Yolly", 
                        mobileSrc: Yollythumbnail,
                        LQMobileSrc: YollythumbnailLQ,
                        desktopSrc: YollyHero,
                        LQDesktopSrc: YollyHeroLQ,
                        alt:"Yolly thumbnail", 
                },
                {
                        id: 4, 
                        path:"/Avery-Row", 
                        Project:"Avery Row", 
                        mobileSrc: AveryRowThumbnail, 
                        LQMobileSrc: AveryRowThumbnailLQ, 
                        desktopSrc: AveryRowHero,
                        LQDesktopSrc: AveryRowHeroLQ,
                        alt:"Avery Row thumbnail"
                },
                {
                        id: 5, 
                        path:"/Camel-Ski-School", 
                        Project:"Camel Ski School", 
                        mobileSrc: Camelthumbnail, 
                        LQMobileSrc: CamelthumbnailLQ, 
                        desktopSrc: CamelHero,
                        LQDesktopSrc: CamelHeroLQ,
                        alt:"Camel Ski School thumbnail"
                },
                {
                        id: 6, 
                        path:"/Accessiblity-tool", 
                        Project:"Accessibility Tool", 
                        mobileSrc: Accessibilitythumbnail, 
                        LQMobileSrc: AccessibilitythumbnailLQ, 
                        desktopSrc: AccessibilityHero,
                        LQDesktopSrc: AccessibilityHeroLQ,
                        alt:"Accessibility Tools Homepage", 
                }
        ]
}

export default {thumbnailData, thumbnail_details};
