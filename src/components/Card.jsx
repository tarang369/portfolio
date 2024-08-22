const Card = ({ title, subtitle, link }) => {
    return (
        <a
            href={link}
            className="m-4 block max-w-sm overflow-hidden rounded-lg"
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
