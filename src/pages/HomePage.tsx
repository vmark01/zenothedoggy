import "../components/ProfileCard"
import GalleryCarousel from '../components/Gallery/GalleryCarousel';
import '../components/HomePage.css';
import ProfileCard from "../components/ProfileCard";
import Divider from "../components/Divider";
import MapView from "../components/MapView";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const scrollToRolam = () => {
        const section = document.getElementById("rolam");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    const { t } = useTranslation();

    return (
        <div className="container mt-5">

            <section className="text-center mb-5">
                <h1>{t("hello")}</h1>
                <p className="lead">
                    {t("welcome")}
                </p>

                <p>
                    <span
                        onClick={scrollToRolam}
                        className="scroll-link"
                    >
                        {t("findOut")}
                    </span>
                </p>
            </section>

            <GalleryCarousel />
            <Divider text={t("aboutMe")}/>
            <div id="rolam">
                <ProfileCard />
            </div>
            <Divider text={t("favoritePlaces")} />
            <MapView />

        </div>
    );
}