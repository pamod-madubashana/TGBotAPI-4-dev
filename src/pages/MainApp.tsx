import AppSidebar from "@/components/app/AppSidebar";
import TopBar from "@/components/app/TopBar";
import EmptyState from "@/components/app/EmptyState";
import MethodView from "@/components/app/MethodView";
import TypeView from "@/components/app/TypeView";
import { useApp } from "@/lib/app-context";
import { AnimatePresence, motion } from "framer-motion";

export default function MainApp() {
  const { currentView } = useApp();
  const viewKey =
    currentView.kind === "empty"
      ? "empty"
      : `${currentView.kind}:${currentView.name}`;

  const renderView = () => {
    if (currentView.kind === "empty") {
      return <EmptyState />;
    }

    if (currentView.kind === "method") {
      return <MethodView key={currentView.name} name={currentView.name} />;
    }

    return <TypeView key={currentView.name} name={currentView.name} />;
  };

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <div className="relative flex-1 min-h-0 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={viewKey}
              initial={{ opacity: 0, y: 12, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.995 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex h-full min-h-0 flex-col"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
