import Navbar from "@components/Navbar";
import "@styles/globals.css";
import Provider from "@utils/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Build your own prompt-based writing community",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
