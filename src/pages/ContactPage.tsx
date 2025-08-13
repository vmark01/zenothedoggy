import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setWasValidated(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xanbwavz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // A checkbox értéket is elküldjük
          termsAccepted: formData.acceptTerms
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "", acceptTerms: false });
        setIsSubmitted(true);
        setWasValidated(false);
      } else {
        console.error("Hiba történt az űrlap beküldésekor.");
      }
    } catch (error) {
      console.error("Hiba:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{t("title")}</h2>
      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        className={`mx-auto needs-validation ${wasValidated ? "was-validated" : ""}`}
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">{t("name")}</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{t("nameRequired")}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t("email")}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{t("emailRequired")}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">{t("message")}</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{t("messageRequired")}</div>
        </div>

        {/* Checkbox a felhasználási feltételek elfogadásához */}
        <div className="mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              required
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="acceptTerms">
              {t("acceptTermsLabel")}{" "}
              <Link to="/info#privacy" className="text-decoration-none">
                {t("termsLink")}
              </Link>
            </label>
            <div className="invalid-feedback">{t("termsRequired")}</div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          {isSubmitting ? t("sending") : t("submit")}
        </button>

        {isSubmitted && (
          <div className="alert alert-success mt-3" role="alert">
            {t("thankYou")}
          </div>
        )}
      </form>
    </div>
  );
}