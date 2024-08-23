import toast from "react-hot-toast";

const Card = ({ title, subtitle, link }) => {
    const handleClick = (e) => {
        if (title === "Personal Portfolio") {
            e.preventDefault();
            toast("Déjà vu? You're already here!", {
                icon: "🌀",
            });
            return;
        }
        if (!link || link === "#") {
            e.preventDefault();
            toast(
                "Oops! This site has gone to the great internet in the sky. Rest in pixels",
                {
                    icon: "💀",
                },
            );
        }
    };
    return (
        <a
            onClick={handleClick}
            href={link}
            className="m-4 block max-w-sm overflow-hidden rounded-lg"
            aria-label="More about the project"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="relative">
                <div className="flex flex-col justify-between p-4 text-white">
                    <h2 className="mb-2 text-2xl font-bold text-yellow-400">
                        {title}
                    </h2>
                    <p className="mb-4 text-sm font-medium">{subtitle}</p>
                </div>
            </div>
        </a>
    );
};

export default Card;
