import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-2 bg-lime-200">Header</header>
        {/* children props를 통해 app/page.js 컴포넌트가 전달됨 */}
        {children}
        <footer className="p-1 bg-orange-200">Footer</footer>
      </body>
    </html>
  );
}
