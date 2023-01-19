import "./styles.css"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Atom, FileCode, FileJs, FileTs } from "phosphor-react"

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}

export function Carousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide-gray">
                        <FileTs size={32} />
                        <p>TypeScript</p>
                    </div>
                    <div className="carousel__cell number-slide-orange">
                        <FileCode size={32} />
                        <p>HTML and CSS</p>
                    </div>
                    <div className="carousel__cell number-slide-gray">
                        <FileJs size={32} />
                        <p>JavaScript</p>
                    </div>
                    <div className="carousel__cell number-slide-orange">
                        <Atom size={32} />
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
