import "./ProfileCard.css";
import { useTranslation } from "react-i18next";

export default function ProfileCard() {
  const { t } = useTranslation();

  return (
    <section id="rolam" className="profile-section">
      <div className="profile-container">
        {/* Bal oszlop */}
        <div className="profile-column">
          <div className="profile-card-box">
            <ul className="profile-list">
              <li className="profile-item">
                <span className="profile-label">{t("name")}</span>
                <span className="profile-value">{t("nameValue")}</span>
              </li>
              <li className="profile-item">
                <span className="profile-label">{t("breed")}</span>
                <span className="profile-value">{t("breedValue")}</span>
              </li>
              <li className="profile-item">
                <span className="profile-label">{t("age")}</span>
                <span className="profile-value">{t("ageValue")}</span>
              </li>
              <li className="profile-item">
                <span className="profile-label">{t("color")}</span>
                <span className="profile-value">{t("colorValue")}</span>
              </li>
              <li className="profile-item profile-item-last">
                <span className="profile-label">{t("birthday")}</span>
                <span className="profile-value">{t("birthdayValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Jobb oszlop */}
        <div className="profile-column">
          <div className="profile-card-box">
            <ul className="profile-list">
              <li className="profile-item">
                <span className="profile-label">{t("hobby")}</span>
                <span className="profile-value">{t("hobbyValue")}</span>
              </li>
              <li className="profile-item">
                <span className="profile-label">{t("favoriteFood")}</span>
                <span className="profile-value">{t("favoriteFoodValue")}</span>
              </li>
              <li className="profile-item">
                <span className="profile-label">{t("residence")}</span>
                <span className="profile-value">{t("residenceValue")}</span>
              </li>
              <li className="profile-item profile-item-last">
                <span className="profile-label">{t("favoriteActivity")}</span>
                <span className="profile-value">{t("favoriteActivityValue")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}