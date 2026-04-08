import AppSidebar from "@/components/app/AppSidebar";
import TopBar from "@/components/app/TopBar";
import EmptyState from "@/components/app/EmptyState";
import MethodView from "@/components/app/MethodView";
import TypeView from "@/components/app/TypeView";
import { useApp } from "@/lib/app-context";

export default function MainApp() {
  const { currentView } = useApp();

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        {currentView.kind === "empty" && <EmptyState />}
        {currentView.kind === "method" && (
          <MethodView key={currentView.name} name={currentView.name} />
        )}
        {currentView.kind === "type" && (
          <TypeView key={currentView.name} name={currentView.name} />
        )}
      </div>
    </div>
  );
}
