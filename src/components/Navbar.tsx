import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import ButtonComp from "./Button"

const Navbar = () => {
  const dropdownDocumentConversionItem: { convert: string }[] = [
    { convert: "WORD to PDF" },
    { convert: "TXT to PDF" },
    { convert: "PDF to DOCS" },
    { convert: "CSV to XLSX" },
    { convert: "XLSX to CSV" },
  ]

  const dropdownImageConverionItem: { convert: string }[] = [
    { convert: "IMG to TXT" },
    { convert: "JPG to PNG" },
    { convert: "PNG to JPG" },
    { convert: "Background Removal" },
    { convert: "JPG to WEBP" },
    { convert: "WEBP to JPG" },
    { convert: "PNG to WEBP" },
    { convert: "WEBP to PNG" },
  ]

  return (
    <div className="navbar-container border-b bg-white shadow-sm">
      <div className="inner-content flex justify-between items-center px-4 py-3">
        
        {/* 📱 Mobile Hamburger (hidden on desktop) */}
        <div className="flex justify-between md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Menu">
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <nav className="flex flex-col gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                
                {/* ✅ Convert Dropdown in Mobile Menu */}
                <div>
                  <p className="font-semibold mb-2">Convert</p>
                  <div>
                    <p className="font-medium">📄 Document Conversion</p>
                    <ul className="ml-2 mt-1 flex flex-col gap-1">
                      {dropdownDocumentConversionItem.map((item, index) => (
                        <Link key={index} to={item.convert}>
                          {item.convert}
                        </Link>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <p className="font-medium">🖼️ Image Conversion</p>
                    <ul className="ml-2 mt-1 flex flex-col gap-1">
                      {dropdownImageConverionItem.map((item, index) => (
                        <Link key={index} to={item.convert}>
                          {item.convert}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/faq">FAQ</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* 🪪 Logo — Centered on mobile, left on desktop */}
        <div className="logo-wrapper flex flex-1 text-center md:text-left">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            FormaGo
          </Link>
        </div>

        {/* 🖥️ Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 items-center">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* ✅ Convert Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Convert</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                    <div>
                      <h3 className="font-semibold mb-2">📄 Document Conversion</h3>
                      {dropdownDocumentConversionItem.map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <Link to={item.convert}>{item.convert}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">🖼️ Image Conversion</h3>
                      {dropdownImageConverionItem.map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <Link to={item.convert}>{item.convert}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/faq">FAQ</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 🔘 Sign Up Button (Always right) */}
        <div className="flex-1 flex justify-end">
          <ButtonComp title="SignUp" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
