import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, CreditCard, Smartphone, Monitor, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORM_ADESAO = "https://docs.google.com/forms/d/e/1FAIpQLSeLbIIAsCJgrfCjGZ7u5YgRBLlENhksEa4w9Zmgkz1Fg4rnWg/viewform";
const CAPPTA_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/logo-cappta-silhueta_44f8aafd.png";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Primeiro Acesso",
    dropdown: [
      {
        label: "Conta",
        href: "/primeiro-acesso/conta",
        icon: <Smartphone className="w-4 h-4" />,
        description: "Ative sua conta digital Cappta",
      },
      {
        label: "Portal",
        href: "/primeiro-acesso/portal",
        icon: <Monitor className="w-4 h-4" />,
        description: "Acesse o portal de gestão pela primeira vez",
      },
      {
        label: "Maquininha",
        href: "/primeiro-acesso/maquininha",
        icon: <CreditCard className="w-4 h-4" />,
        description: "Configure e ative sua maquininha",
      },
    ],
  },
  {
    label: "Link de Pagamento",
    href: "/link-pagamento",
  },
  {
    label: "Simular Taxas",
    href: "/simular-taxas",
  },
  {
    label: "Tutoriais",
    dropdown: [
      {
        label: "Plataforma Solar",
        href: "/tutoriais/plataforma-solar",
        icon: <Monitor className="w-4 h-4" />,
        description: "Como funciona o processo na Plataforma Solar",
      },
      {
        label: "Venda na Maquininha",
        href: "/tutoriais/maquininha",
        icon: <CreditCard className="w-4 h-4" />,
        description: "Passo a passo para vender com a maquininha",
      },
      {
        label: "Venda com Link",
        href: "/tutoriais/link-pagamento",
        icon: <Link2 className="w-4 h-4" />,
        description: "Como gerar e enviar links de pagamento",
      },
    ],
  },
  {
    label: "Suporte Técnico",
    href: "/suporte",
  },
];

function DropdownMenu({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-border overflow-hidden transition-all duration-200 z-50 ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="p-2">
        {items.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer group transition-colors">
              {item.icon && (
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,208,132,0.10)" }}>
                  <span style={{ color: "#00A335" }}>{item.icon}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href?: string) => {
    if (!href) return false;
    return location === href || location.startsWith(href + "/");
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo: Cappta logo + Tá na Conta + parceria */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              {/* Logo Cappta com filtro verde para visibilidade */}
              <img
                src={CAPPTA_LOGO}
                alt="Cappta"
                className="h-8 w-auto object-contain"
                style={{
                  maxWidth: "90px",
                  filter: "invert(48%) sepia(97%) saturate(400%) hue-rotate(100deg) brightness(90%)"
                }}
              />
              <div className="hidden sm:block border-l border-border pl-3">
                <p className="font-bold text-base leading-tight" style={{ fontFamily: "Roboto, sans-serif", color: "#00A335" }}>
                  Tá na Conta
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">Uma parceria Intelbras e Cappta</p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      openDropdown === item.label
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link href={item.href!}>
                    <span
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        isActive(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
                {item.dropdown && (
                  <DropdownMenu items={item.dropdown} isOpen={openDropdown === item.label} />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={FORM_ADESAO}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="font-semibold"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Solicitar Maquininha
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t border-border bg-white transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-1">
                      {item.dropdown.map((sub, idx) => (
                        <Link key={idx} href={sub.href}>
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors cursor-pointer">
                            {sub.icon}
                            {sub.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={item.href!}>
                  <div
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-border">
            <a
              href={FORM_ADESAO}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full font-semibold"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Solicitar Maquininha
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
