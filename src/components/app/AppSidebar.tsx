import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Bot,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { useApp } from "@/lib/app-context";
import { sidebarGroups } from "@/lib/sidebar-data";
import { motion, AnimatePresence } from "framer-motion";

function SidebarSection({
  label,
  items,
  selectedItem,
  onSelect,
  collapsed,
  open,
  onToggle,
}: {
  label: string;
  items: { name: string; kind: "method" | "type" }[];
  selectedItem: string | null;
  onSelect: (name: string, kind: "method" | "type") => void;
  collapsed: boolean;
  open: boolean;
  onToggle: (label: string) => void;
}) {
  const hasSelected = items.some((i) => i.name === selectedItem);

  if (collapsed) {
    return (
      <div className="px-2 py-0.5">
        <button
          onClick={() => onToggle(label)}
          className={`w-full h-8 flex items-center justify-center rounded-md transition ${hasSelected ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
          title={label}
        >
          <span className="text-[10px] font-bold">{label.charAt(0)}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="py-0.5">
      <button
        onClick={() => onToggle(label)}
        className={`sticky top-0 z-10 w-full flex items-center gap-1.5 border-b border-sidebar-border/60 bg-sidebar/95 px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition hover:bg-accent/50 ${hasSelected ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
      >
        {open ? (
          <ChevronDown className="w-3 h-3 shrink-0" />
        ) : (
          <ChevronRight className="w-3 h-3 shrink-0" />
        )}
        <span className="truncate">{label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="pl-7 pr-2 py-0.5 space-y-px">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onSelect(item.name, item.kind)}
                  className={`w-full text-left px-2 py-1 rounded-md text-xs transition truncate ${
                    selectedItem === item.name
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-sidebar-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[11px]">{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppSidebar() {
  const {
    sidebarCollapsed,
    toggleSidebar,
    currentView,
    setCurrentView,
    token,
    botProfile,
    logout,
  } = useApp();
  const [search, setSearch] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const selectedItem = currentView.kind !== "empty" ? currentView.name : null;

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const selectedSection = sidebarGroups.sections.find((section) =>
      section.items.some((item) => item.name === selectedItem),
    );

    if (selectedSection) {
      setOpenSection(selectedSection.label);
    }
  }, [selectedItem]);

  const filteredSections = useMemo(() => {
    if (!search) return sidebarGroups.sections;
    return sidebarGroups.sections
      .map((s) => ({
        ...s,
        items: s.items.filter((i) =>
          i.name.toLowerCase().includes(search.toLowerCase()),
        ),
      }))
      .filter((s) => s.items.length > 0);
  }, [search]);

  const onSelect = (name: string, kind: "method" | "type") => {
    setCurrentView({ kind, name });
  };

  const onToggleSection = (label: string) => {
    setOpenSection((current) => (current === label ? null : label));
  };

  const maskedToken = token ? token.slice(0, 8) + "***" : "";
  const botName =
    typeof botProfile?.username === "string"
      ? `@${botProfile.username}`
      : typeof botProfile?.first_name === "string"
        ? String(botProfile.first_name)
        : "Connected Bot";

  return (
    <>
      <div
        className={`h-screen flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-200 shrink-0 ${sidebarCollapsed ? "w-14" : "w-72"}`}
      >
        {/* Header */}
        <div
          className={`flex items-center gap-2 p-3 border-b border-sidebar-border shrink-0 ${sidebarCollapsed ? "justify-center" : ""}`}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-primary" />
          </div>
          {!sidebarCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">
                TG API Tester
              </p>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-muted-foreground hover:text-foreground transition shrink-0"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <PanelLeft className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Search */}
        {!sidebarCollapsed && (
          <div className="p-2 border-b border-sidebar-border shrink-0">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search methods or types..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-8 pl-8 pr-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto scrollbar-thin py-1">
          {filteredSections.map((section) => (
            <SidebarSection
              key={section.label}
              label={section.label}
              items={section.items}
              selectedItem={selectedItem}
              onSelect={onSelect}
              collapsed={sidebarCollapsed}
              open={openSection === section.label}
              onToggle={onToggleSection}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          className={`border-t border-sidebar-border p-3 shrink-0 ${sidebarCollapsed ? "flex flex-col items-center gap-2" : "space-y-2"}`}
        >
          {!sidebarCollapsed && (
            <div className="flex items-center gap-2 px-1">
              <div className="w-2 h-2 rounded-full bg-success shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-muted-foreground">
                  Connected Bot
                </p>
                <p className="text-xs text-foreground truncate">{botName}</p>
                <p className="text-[10px] font-mono text-muted-foreground truncate">
                  {maskedToken}
                </p>
              </div>
            </div>
          )}
          <div className={`flex ${sidebarCollapsed ? "flex-col" : ""} gap-1`}>
            <button
              className="flex-1 h-7 flex items-center justify-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition"
              title="Settings"
            >
              <Settings className="w-3.5 h-3.5" />
              {!sidebarCollapsed && <span>Settings</span>}
            </button>
            <button
              onClick={() => setShowLogout(true)}
              className="flex-1 h-7 flex items-center justify-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Logout confirmation */}
      {showLogout && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowLogout(false)}
        >
          <div
            className="bg-card border border-border rounded-xl p-6 w-full max-w-sm shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Confirm Logout
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Are you sure you want to disconnect your bot and return to the
              login screen?
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowLogout(false)}
                className="h-8 px-4 rounded-md text-xs bg-secondary text-secondary-foreground hover:bg-accent transition"
              >
                Cancel
              </button>
              <button
                onClick={() => void logout()}
                className="h-8 px-4 rounded-md text-xs bg-destructive text-destructive-foreground hover:bg-destructive/90 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
