"use client";
import React from "react";
import { useState } from "react";
import { toast } from "sonner";

const initialValues = {
  brandname: "",
  fullname: "",
  email: "",
  employee: "",
  website: "",
  location: "",
  affiliate: "",
  hear: "",
  message: "",
};

const initialErrors = {
  brandname: "",
  fullname: "",
  email: "",
  employee: "",
  website: "",
  location: "",
  affiliate: "",
  hear: "",
  message: "",
};

const PartnerForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!values.brandname.trim()) newErrors.brandname = "Brand name is required.";
    if (!values.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!values.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Invalid email format.";
    if (!values.employee.trim()) newErrors.employee = "Number of Employees is required.";
    if (!values.website.trim()) newErrors.website = "Brand website is required.";
    if (!values.location.trim()) newErrors.location = "Location is required.";
    if (!values.affiliate.trim()) newErrors.affiliate = "Field is required.";
    if (!values.hear.trim()) newErrors.hear = "Field is required.";
    if (!values.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleChange = ({ target }) => {
    setValues((prev) => ({ ...prev, [target.name]: target.value }));

    if (touched[target.name]) {
      setErrors((prev) => ({
        ...prev,
        [target.name]: validate()[target.name] || "",
      }));
    }
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));

    setErrors((prev) => ({
      ...prev,
      [target.name]: validate()[target.name] || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    console.log(values);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      // Simulate API submission
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        // alert("Message sent successfully!");
        toast.success("Message sent successfully!");
        setValues(initialValues); // Reset form
        setTouched({});
      } else {
        // alert("An error occured. Please try again.");
        toast.error("An error occured. Please try again.");
      }
    } catch (error) {
      // alert("An error occured. Please try again.");
      toast.error("An error occured. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-2">
      <form className="w-full text-left" onSubmit={handleSubmit}>
        {/* Brand Name */}
        <div className="mb-6">
          <label className="block text-[#414141] text-sm mb-2">Brand Name</label>
          <input
            type="text"
            name="brandname"
            placeholder="Company/organizational name"
            value={values.brandname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded ${
              errors.brandname ? "border-red-500" : "border-[#E5E5E5]"
            } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.brandname && (
            <p className="text-red-500 text-xs mt-1">{errors.brandname}</p>
          )}
        </div>

        {/* Name and Email Address */}
        <div className="flex gap-4 mb-6 w-full">
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">Your Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.fullname ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
            />
            {errors.fullname && (
              <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@user.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Employees and Website */}
        <div className="flex gap-4 mb-6 w-full">
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">Number of Employees</label>
            <input
              type="number"
              name="employee"
              placeholder="Employees"
              value={values.employee}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.employee ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
            />
            {errors.employee && (
              <p className="text-red-500 text-xs mt-1">{errors.employee}</p>
            )}
          </div>

          {/* Website */}
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">
              Brand Website
            </label>
            <input
              type="text"
              name="website"
              placeholder="example@user.com"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.website ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400`}
            />
            {errors.website && (
              <p className="text-red-500 text-xs mt-1">{errors.website}</p>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-[#414141] text-sm mb-2">
            Location 
          </label>
          <input
            type="text"
            name="location"
            placeholder="example,state,country"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded ${
              errors.location ? "border-red-500" : "border-[#E5E5E5]"
            } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400`}
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>

        {/* Foundation */}
        <div className="flex gap-4 mb-6 w-full">
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">Are you a foundation affiliated with one?</label>
            <input
              type="text"
              name="affiliate"
              placeholder="affiliate"
              value={values.affiliate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.affiliate ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
            />
            {errors.affiliate && (
              <p className="text-red-500 text-xs mt-1">{errors.affiliate}</p>
            )}
          </div>

          {/* Hear About Us */}
          <div className="flex-1">
            <label className="block text-[#414141] text-sm mb-2">
              How did you hear about Everyone Matters Foundation?
            </label>
            <input
              type="text"
              name="hear"
              placeholder="LinkedIn,Instagram"
              value={values.hear}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded ${
                errors.hear ? "border-red-500" : "border-[#E5E5E5]"
              } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400`}
            />
            {errors.hear && (
              <p className="text-red-500 text-xs mt-1">{errors.hear}</p>
            )}
          </div>
        </div>


        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm text-[#414141] mb-2">
            Anything else you would like to share?
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Share any additional question or details here."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded ${
              errors.message ? "border-red-500" : "border-[#E5E5E5]"
            } text-sm placeholder:text-xs placeholder:text-[#C6C6C6] focus:outline-none focus:ring-1 focus:ring-blue-400`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            isLoading ||
            Object.values(errors).some((error) => error) ||
            Object.values(values).some((value) => !value.trim())
          }
          className={`bg-[#2E2878] mt-8 px-4 py-3 text-white cursor-pointer mx-auto block ${
            isLoading ||
            Object.values(errors).some((error) => error) ||
            Object.values(values).some((value) => !value.trim())
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isLoading ? "Sending..." : "Partner with Us"}
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
