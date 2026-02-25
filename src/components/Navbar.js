import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div
        className="mx-auto flex items-center"
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "60px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/*Logo*/}
        <Link href="/" className="flex items-center">
          <img src="/newiaaclogo.svg" alt="IAAC Logo" style={{ height: "35px" }} />
        </Link>

        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center" style={{ gap: "40px" }}>
            {[
              { href: "/", label: "HOME" },
              { href: "/join", label: "JOIN" },
              { href: "/about", label: "ABOUT" },
              { href: "/projects", label: "PROJECTS" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 flex items-center justify-center"
                style={{
                  width: "160px",
                  height: "35px",
                  fontSize: "16px",
                  letterSpacing: "0px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}