export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/site.webmanifest"
                />
                <title>Tarang Jain | Portfolio</title>
                <meta
                    name="description"
                    content="A skilled front end developer with a passion for creating innovative and user-friendly websites. Specializing in JavaScript, React, and Next."
                />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
            {/* <script
                type="module"
                src="/src/main.jsx"
            /> */}
        </html>
    );
}
