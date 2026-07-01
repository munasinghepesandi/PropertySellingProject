import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { API_BASE_URL } from "../utils/auth";

const initialForm = {
  title: "",
  description: "",
  location: "",
  type: "house",
  price: "",
  bedrooms: "",
  bathrooms: "",
  area: "",
  images: [],
};

const typeLabels = {
  house: "House",
  apartment: "Apartment",
  villa: "Villa",
  land: "Land",
  commercial: "Commercial",
};

function toPositiveNumber(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric) || numeric <= 0) return null;
  return numeric;
}

function buildPayload(form) {
  const payload = new FormData();

  payload.append("title", form.title.trim());
  payload.append("description", form.description.trim());
  payload.append("location", form.location.trim());
  payload.append("type", form.type);
  payload.append("price", String(toPositiveNumber(form.price)));
  payload.append("area", String(toPositiveNumber(form.area)));

  const bedrooms = toPositiveNumber(form.bedrooms);
  const bathrooms = toPositiveNumber(form.bathrooms);

  if (form.type !== "land") {
    payload.append("bedrooms", bedrooms ? String(bedrooms) : "");
    payload.append("bathrooms", bathrooms ? String(bathrooms) : "");
  }

  form.images.forEach((file) => payload.append("images", file));

  return payload;
}

function validateForm(form) {
  const errors = {};

  if (!form.title.trim()) errors.title = "Property title is required.";
  if (!form.location.trim()) errors.location = "Location is required.";
  if (!toPositiveNumber(form.price))
    errors.price = "Price must be a valid number greater than 0.";
  if (!toPositiveNumber(form.area))
    errors.area = "Area must be a valid number greater than 0.";
  if (!form.images.length) errors.images = "Please upload at least one image.";
  if (form.images.length > 10) errors.images = "You can upload up to 10 images.";

  if (form.type !== "land") {
    if (!toPositiveNumber(form.bedrooms))
      errors.bedrooms = "Bedrooms must be a valid number greater than 0.";
    if (!toPositiveNumber(form.bathrooms))
      errors.bathrooms = "Bathrooms must be a valid number greater than 0.";
  }

  return errors;
}

export function PostAd() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const hideBedAndBath = useMemo(() => form.type === "land", [form.type]);

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitError("");
  };

  const updateFiles = (files) => {
    setForm((prev) => ({ ...prev, images: files }));
    setErrors((prev) => ({ ...prev, images: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSubmitError("");
    setSuccessMessage("");

    try {
      const payload = buildPayload(form);
      const url = `${API_BASE_URL}/properties/public`;
      console.log("Posting ad to:", url);
      const response = await fetch(url, {
        method: "POST",
        body: payload,
      });

      let data = null;
      try {
        data = await response.json();
      } catch (parseErr) {
        console.warn("Failed to parse JSON response", parseErr);
      }

      if (!response.ok) {
        const serverMessage =
          data?.message || data?.error || response.statusText;
        throw new Error(serverMessage || "Failed to post advertisement.");
      }

      setSuccessMessage(
        "Your property ad has been posted successfully. Redirecting to homepage...",
      );
      setForm(initialForm);

      setTimeout(() => {
        navigate("/?posted=1");
      }, 1000);
    } catch (error) {
      // Detect network-level failures (fetch throws TypeError on network errors)
      if (
        error instanceof TypeError ||
        (error &&
          error.message &&
          error.message.toLowerCase().includes("failed to fetch"))
      ) {
        setSubmitError(
          `Network error: could not contact backend at ${API_BASE_URL}/properties. Is the backend running? (${error.message})`,
        );
        console.error("Network error during POST:", error);
      } else {
        setSubmitError(error.message || "Failed to post advertisement.");
        console.error("Server error during POST:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  text-slate-900">
      <Navbar />

      <section className="relative min-h-85 overflow-hidden text-white sm:min-h-105">
        <div className="absolute inset-0 bg-black/60 " />
        <img
          src="https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg"
          alt="Kandy banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            Property Advertisement Portal
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Post Your Property Ad
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-lg">
            Submit your listing in minutes with all key details buyers need.
            Your ad will be published to the homepage once posted.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-14">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-[#08306B] sm:text-2xl">
                Listing Details
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Fill in complete details to attract serious buyers.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Property Title
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="e.g. Modern Family House in Colombo"
                value={form.title}
                onChange={(event) => updateField("title", event.target.value)}
              />
              {errors.title && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Property Type
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                value={form.type}
                onChange={(event) => updateField("type", event.target.value)}
              >
                {Object.entries(typeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Location
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="e.g. Kandy, Colombo 05"
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
              />
              {errors.location && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.location}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Price (LKR)
              </label>
              <input
                type="number"
                min="1"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="e.g. 25000000"
                value={form.price}
                onChange={(event) => updateField("price", event.target.value)}
              />
              {errors.price && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.price}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Area (sqft / perches)
              </label>
              <input
                type="number"
                min="1"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="e.g. 1800"
                value={form.area}
                onChange={(event) => updateField("area", event.target.value)}
              />
              {errors.area && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.area}
                </p>
              )}
            </div>

            {!hideBedAndBath && (
              <>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                    placeholder="e.g. 3"
                    value={form.bedrooms}
                    onChange={(event) =>
                      updateField("bedrooms", event.target.value)
                    }
                  />
                  {errors.bedrooms && (
                    <p className="mt-1 text-xs font-semibold text-red-600">
                      {errors.bedrooms}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                    placeholder="e.g. 2"
                    value={form.bathrooms}
                    onChange={(event) =>
                      updateField("bathrooms", event.target.value)
                    }
                  />
                  {errors.bathrooms && (
                    <p className="mt-1 text-xs font-semibold text-red-600">
                      {errors.bathrooms}
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Images
              </label>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                multiple
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                onChange={(event) =>
                  updateFiles(Array.from(event.target.files || []))
                }
              />
              <p className="mt-2 text-xs text-slate-500">
                Upload 1 to 10 images. Supported formats: JPG, JPEG, PNG, WEBP.
              </p>
              {form.images.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.images.map((file) => (
                    <span
                      key={file.name + file.lastModified}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {file.name}
                    </span>
                  ))}
                </div>
              )}
              {errors.images && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.images}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Description
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="Highlight key features, nearby places, and special details."
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
              />
            </div>
          </div>

          {submitError && (
            <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {submitError}
            </p>
          )}

          {successMessage && (
            <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              {successMessage}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#2171B5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#08306B] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {loading ? "Posting Advertisement..." : "Post Advertisement"}
            </button>
            <button
              type="button"
              onClick={() => setForm(initialForm)}
              className="w-full rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
            >
              Reset Form
            </button>
          </div>
        </form>

        <aside className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-black text-[#08306B]">
            Tips for a Better Ad
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-xl bg-slate-50 px-4 py-3">
              Use a clear title that includes property type and location.
            </li>
            <li className="rounded-xl bg-slate-50 px-4 py-3">
              Set a realistic price to receive more genuine inquiries.
            </li>
            <li className="rounded-xl bg-slate-50 px-4 py-3">
              Upload clear images so buyers can trust the listing faster.
            </li>
            <li className="rounded-xl bg-slate-50 px-4 py-3">
              Include key selling points in the description.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl bg-linear-to-r from-[#08306B] to-[#2171B5] p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Publishing Flow
            </p>
            <p className="mt-2 text-sm">
              Once you click "Post Advertisement", our system will validate your
              input and attempt to publish your ad. If successful, it will be
              visible on the homepage within a few seconds. You can edit or
              delete your ad later from your profile page.
            </p>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}
