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
        <Link href="/" className="flex items-center">
          <img src="/newiaaclogo.svg" alt="IAAC Logo" style={{ height: "35px" }} />
        </Link>

        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center" style={{ gap: "40px" }}>
            {[
              { href: "/", label: "HOME" },
              { href: "/join", label: "JOIN" },
              { href: "/about", label: "ABOUT" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 flex items-center justify-center"
                style={{ width: "160px", height: "35px", fontSize: "16px" }}
              >
                {item.label}
              </Link>
            ))}

            {/* PROJECTS dropdown */}
            <div
              className="relative group flex items-center justify-center"
              style={{ width: "160px", height: "35px" }}
            >
              <button
                type="button"
                className="text-white hover:text-gray-300 flex items-center justify-center w-full h-full"
                style={{ fontSize: "16px" }}
              >
                PROJECTS
              </button>

              <div className="absolute left-0 right-0 top-full h-4" />
              
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                <div
                  className="bg-[#2F3438]/90 backdrop-blur-md overflow-hidden"
                  style={{
                    width: "181px",
                    borderRadius: "2px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <Link
                    href="/projects/rocketry"
                    className="block text-center text-white hover:bg-white/10"
                    style={{
                      paddingTop: "22px",
                      paddingBottom: "22px",
                      fontSize: "18px",
                      letterSpacing: "1px",
                    }}
                  >
                    ROCKETRY
                  </Link>

                  <div className="h-px bg-white/10" />

                  <Link
                    href="/projects/drones"
                    className="block text-center text-white hover:bg-white/10"
                    style={{
                      paddingTop: "22px",
                      paddingBottom: "22px",
                      fontSize: "18px",
                      letterSpacing: "1px",
                    }}
                  >
                    DRONES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}