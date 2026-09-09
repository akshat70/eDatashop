import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AIDataServices from "./pages/AIDataServices";
import GenerativeAIServices from "./pages/GenerativeAIServices";
import EnterpriseDataServices from "./pages/EnterpriseDataServices";
import AcademicHeritageServices from "./pages/AcademicHeritageServices";
import AboutUs from "./pages/AboutUs";
import EngagementModels from "./pages/EngagementModels";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FAQ from "./pages/FAQ";


function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/ai-data-annotation"} component={AIDataServices} />
      <Route path={"/services/generative-ai-llm-model"} component={GenerativeAIServices} />
      <Route path={"/services/enterprise-data-document-digitization"} component={EnterpriseDataServices} />
      <Route path={"/services/academic-research-cultural-heritage"} component={AcademicHeritageServices} />
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"/engagement-models"} component={EngagementModels} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/service/:slug"} component={ServiceDetail} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/case-studies/:slug"} component={CaseStudyDetail} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-and-conditions"} component={TermsConditions} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
