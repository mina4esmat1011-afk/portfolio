
import {
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/your-username",
      link: "https://www.linkedin.com/in/mina-esmat-7a16371a7/",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      value: "+20 101 667 8163",
      link: "https://wa.me/201016678163",
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      label: "Telegram",
      value: "@MinaEsmat",
      link: "https://t.me/@MinaEsmat",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "mina4esmat1011@gmail.com",
      link: "mina4esmat1011@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+20 101 667 8163 / +20 121 118 0242",
    },
  ];

  return (
    <section className="px-8 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-10">
        Contact Me
      </h1>

      <div className="space-y-5">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-red-50 hover:border-red-300 transition"
          >
            <span className="text-red-600">{item.icon}</span>

            <div>
              <p className="font-semibold">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
