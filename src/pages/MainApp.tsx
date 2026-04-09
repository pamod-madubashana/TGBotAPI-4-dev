import { useEffect, useMemo, useRef } from "react";
import AppSidebar from "@/components/app/AppSidebar";
import TopBar from "@/components/app/TopBar";
import EmptyState from "@/components/app/EmptyState";
import MethodView from "@/components/app/MethodView";
import TypeView from "@/components/app/TypeView";
import { useApp } from "@/lib/app-context";
import { sidebarGroups } from "@/lib/sidebar-data";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const viewVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction === 0 ? 0 : direction > 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut" as const,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction === 0 ? 0 : direction > 0 ? -18 : 18,
    transition: {
      duration: 0.16,
      ease: "easeIn" as const,
    },
  }),
};

export default function MainApp() {
  const { currentView } = useApp();
  const orderedViews = useMemo(
    () =>
      sidebarGroups.sections.flatMap((section) =>
        section.items.map((item) => `${item.kind}:${item.name}`),
      ),
    [],
  );
  const viewKey =
    currentView.kind === "empty"
      ? "empty"
      : `${currentView.kind}:${currentView.name}`;
  const currentIndex =
    currentView.kind === "empty" ? -1 : orderedViews.indexOf(viewKey);
  const previousIndexRef = useRef(currentIndex);
  const direction = useMemo(() => {
    if (
      currentIndex === -1 ||
      previousIndexRef.current === -1 ||
      currentIndex === previousIndexRef.current
    ) {
      return 0;
    }

    return currentIndex > previousIndexRef.current ? 1 : -1;
  }, [currentIndex]);

  useEffect(() => {
    previousIndexRef.current = currentIndex;
  }, [currentIndex]);

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
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={viewKey}
              custom={direction}
              variants={viewVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex min-h-0 flex-col"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
