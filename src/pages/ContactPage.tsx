import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
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

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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
