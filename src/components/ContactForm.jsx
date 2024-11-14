import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);
            emailjs
                .send(
                    process.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    formData,
                    process.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                )
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Message sent successfully!");
                    setIsSending(false);
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    toast.error(
                        "Failed to send message. Please try again later.",
                    );
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <section
            className="mx-auto max-w-3xl p-4"
            id="contact"
        >
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Let&apos;s Connect
            </h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onSubmit={handleSubmit}
                viewport={{ once: true }}
            >
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                    />
                    {errors.name && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm text-pink-700"
                            aria-live="polite"
                        >
                            {errors.name}
                        </motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                    />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm text-pink-700"
                            aria-live="polite"
                        >
                            {errors.email}
                        </motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        className="w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                        rows={4}
                    />
                    {errors.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm text-pink-700"
                            aria-live="polite"
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
                        isSending && "cursor-not-allowed opacity-50"
                    }`}
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send"}
                </button>
            </motion.form>
        </section>
    );
};

export default ContactForm;
