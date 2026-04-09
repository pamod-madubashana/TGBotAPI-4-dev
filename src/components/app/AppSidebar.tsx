import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Bot,
  Plus,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import { useApp } from "@/lib/app-context";
import { sidebarGroups } from "@/lib/sidebar-data";
import { motion, AnimatePresence } from "framer-motion";

const ADD_BOT_ACTION = "__add-bot__";
const getSwitchAction = (token: string) => `switch:${token}`;
const getRemoveAction = (token: string) => `remove:${token}`;

function getBotName(profile: Record<string, unknown> | null) {
  if (typeof profile?.username === "string") {
    return `@${profile.username}`;
  }

  if (typeof profile?.first_name === "string") {
    return String(profile.first_name);
  }

  return "Connected Bot";
}

function getBotPhotoUrl(profile: Record<string, unknown> | null) {
  return typeof profile?.photoUrl === "string" ? profile.photoUrl : null;
}

function maskBotToken(token: string) {
  return token ? `${token.slice(0, 8)}***` : "";
}

function BotAvatar({
  name,
  photoUrl,
  className,
}: {
  name: string;
  photoUrl: string | null;
  className: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [photoUrl]);

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-primary/10 ${className}`}
    >
      {photoUrl && !imageFailed ? (
        <img
          src={photoUrl}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <Bot className="h-4 w-4 text-primary" />
      )}
    </div>
  );
}

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
  if (collapsed) {
    return (
      <div className="px-2 py-0.5">
        <button
          onClick={() => onToggle(label)}
          className={`w-full h-8 flex items-center justify-center rounded-md transition ${open ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
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
        className={`sticky top-0 z-10 w-full flex items-center gap-1.5 border-b border-sidebar-border/60 bg-sidebar/95 px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition hover:bg-accent/50 ${open ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
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
    currentView,
    setCurrentView,
    token,
    botProfile,
    savedBots,
    addBot,
    removeBot,
    switchBot,
  } = useApp();
  const sidebarCollapsed = false;
  const [search, setSearch] = useState("");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [botMenuOpen, setBotMenuOpen] = useState(false);
  const [showAddBotForm, setShowAddBotForm] = useState(false);
  const [newBotToken, setNewBotToken] = useState("");
  const [botActionError, setBotActionError] = useState("");
  const [activeBotAction, setActiveBotAction] = useState<string | null>(null);

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

  const botName = getBotName(botProfile);
  const botPhotoUrl = getBotPhotoUrl(botProfile);
  const maskedToken = maskBotToken(token);
  const availableBots = useMemo(() => {
    const bots =
      savedBots.length > 0
        ? savedBots
        : token && botProfile
          ? [{ token, profile: botProfile }]
          : [];

    return bots
      .filter(
        (bot, index, allBots) =>
          allBots.findIndex((candidate) => candidate.token === bot.token) ===
          index,
      )
      .sort((left, right) => {
        if (left.token === token) {
          return -1;
        }

        if (right.token === token) {
          return 1;
        }

        return 0;
      });
  }, [botProfile, savedBots, token]);

  const handleBotMenuToggle = () => {
    setBotMenuOpen((current) => !current);
    setBotActionError("");
  };

  const handleAddBot = async () => {
    const normalizedToken = newBotToken.trim();

    if (!normalizedToken) {
      return;
    }

    setBotActionError("");
    setActiveBotAction(ADD_BOT_ACTION);

    try {
      await addBot(normalizedToken);
      setNewBotToken("");
      setShowAddBotForm(false);
      setBotMenuOpen(false);
    } catch (error) {
      setBotActionError(
        error instanceof Error ? error.message : "Unable to add this bot.",
      );
    } finally {
      setActiveBotAction(null);
    }
  };

  const handleSwitchBot = async (targetToken: string) => {
    if (targetToken === token) {
      return;
    }

    setBotActionError("");
    setActiveBotAction(getSwitchAction(targetToken));

    try {
      await switchBot(targetToken);
      setShowAddBotForm(false);
      setBotMenuOpen(false);
    } catch (error) {
      setBotActionError(
        error instanceof Error ? error.message : "Unable to switch bots.",
      );
    } finally {
      setActiveBotAction(null);
    }
  };

  const handleRemoveBot = async (targetToken: string) => {
    setBotActionError("");
    setActiveBotAction(getRemoveAction(targetToken));

    try {
      await removeBot(targetToken);
      setShowAddBotForm(false);
      setNewBotToken("");
    } catch (error) {
      setBotActionError(
        error instanceof Error ? error.message : "Unable to remove this bot.",
      );
    } finally {
      setActiveBotAction(null);
    }
  };

  return (
    <>
      <div
        className={`h-screen flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-200 shrink-0 ${sidebarCollapsed ? "w-14" : "w-64"}`}
      >
        {/* Header */}
        <div className="border-b border-sidebar-border shrink-0">
          <div className="flex items-center gap-3 px-3 py-2.5">
            <BotAvatar
              name={botName}
              photoUrl={botPhotoUrl}
              className="h-10 w-10 rounded-xl"
            />
            <div className="min-w-0 flex-1 space-y-0.5">
              <p className="text-[10px] text-muted-foreground">Connected Bot</p>
              <p className="truncate text-xs font-semibold text-foreground">
                {botName}
              </p>
              <p className="truncate font-mono text-[10px] text-muted-foreground">
                {maskedToken}
              </p>
            </div>
          </div>
          <button
            onClick={handleBotMenuToggle}
            className="flex h-8 w-full items-center justify-between border-t border-sidebar-border/60 px-3 text-[11px] font-medium text-muted-foreground transition hover:bg-accent/40 hover:text-foreground"
          >
            <span>
              {availableBots.length > 1
                ? "Switch or add bot"
                : "Add another bot"}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${botMenuOpen ? "rotate-180 text-primary" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {botMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="overflow-hidden border-t border-sidebar-border/60"
              >
                <div className="space-y-3 p-2.5">
                  <div className="space-y-1">
                    {availableBots.map((savedBot) => {
                      const savedBotName = getBotName(savedBot.profile);
                      const savedBotPhoto = getBotPhotoUrl(savedBot.profile);
                      const isActiveBot = savedBot.token === token;
                      const isSwitching =
                        activeBotAction === getSwitchAction(savedBot.token);
                      const isRemoving =
                        activeBotAction === getRemoveAction(savedBot.token);

                      return (
                        <div
                          key={savedBot.token}
                          className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition ${
                            isActiveBot
                              ? "border-primary/30 bg-primary/10"
                              : "border-border bg-card"
                          } ${Boolean(activeBotAction) && !isRemoving ? "opacity-70" : ""}`}
                        >
                          <button
                            onClick={() => void handleSwitchBot(savedBot.token)}
                            disabled={Boolean(activeBotAction) || isActiveBot}
                            className="flex min-w-0 flex-1 items-center gap-2 text-left"
                          >
                            <BotAvatar
                              name={savedBotName}
                              photoUrl={savedBotPhoto}
                              className="h-8 w-8 rounded-lg"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-medium text-foreground">
                                {savedBotName}
                              </p>
                              <p className="truncate font-mono text-[10px] text-muted-foreground">
                                {maskBotToken(savedBot.token)}
                              </p>
                            </div>
                            <span
                              className={`flex items-center gap-1 text-[10px] font-medium ${
                                isActiveBot
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {isSwitching ? (
                                <Loader2 className="h-3 w-3 animate-spin" />
                              ) : isActiveBot ? (
                                "Active"
                              ) : null}
                            </span>
                          </button>
                          <button
                            onClick={() => void handleRemoveBot(savedBot.token)}
                            disabled={Boolean(activeBotAction)}
                            title={`Remove ${savedBotName}`}
                            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isRemoving ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Trash2 className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => {
                      setShowAddBotForm((current) => !current);
                      setBotActionError("");
                    }}
                    disabled={Boolean(activeBotAction)}
                    className="flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border text-xs font-medium text-muted-foreground transition hover:border-primary/30 hover:bg-accent/40 hover:text-foreground"
                  >
                    {showAddBotForm ? (
                      <X className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                    {showAddBotForm ? "Cancel" : "Add another bot"}
                  </button>

                  <AnimatePresence initial={false}>
                    {showAddBotForm && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.16 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 rounded-lg border border-border bg-card/60 p-2.5">
                          <input
                            type="text"
                            placeholder="123456789:AAExampleBotTokenHere"
                            value={newBotToken}
                            onChange={(event) => {
                              setNewBotToken(event.target.value);
                              setBotActionError("");
                            }}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                void handleAddBot();
                              }
                            }}
                            className="h-9 w-full rounded-md border border-border bg-input px-3 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
                          />
                          <button
                            onClick={() => void handleAddBot()}
                            disabled={
                              !newBotToken.trim() ||
                              activeBotAction === ADD_BOT_ACTION
                            }
                            className="flex h-8 w-full items-center justify-center gap-1.5 rounded-md bg-primary text-xs font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {activeBotAction === ADD_BOT_ACTION ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Plus className="h-3.5 w-3.5" />
                            )}
                            Save and switch
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {botActionError && (
                    <p className="text-[11px] text-destructive">
                      {botActionError}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
        <div className="flex-1 overflow-y-auto scrollbar-thin py-0.5">
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
      </div>
    </>
  );
}
