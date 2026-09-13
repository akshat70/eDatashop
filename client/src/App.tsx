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
import GenerativeAI from "./pages/GenerativeAI";
import SocialImpact from "./pages/SocialImpact";
import AIModelEvaluation from "./pages/AIModelEvaluation";
import AISafetyRedTeaming from "./pages/AISafetyRedTeaming";
import CustomMLTailoredSoftware from "./pages/CustomMLTailoredSoftware";
import LLMData from "./pages/LLMData";
import RLHFAlignment from "./pages/RLHFAlignment";
import OverView from "./pages/OverView";
import EngagementModels from "./pages/EngagementModels";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import EgocentricData from "./pages/EgocentricData";
import EnterpriseDocumentDigitizationOCR from "./pages/EnterpriseDocumentDigitizationOCR";
import DataConversionContentTransformation from "./pages/DataConversionContentTransformation";
import MetadataEnrichmentDataCleansing from "./pages/MetadataEnrichmentDataCleansing";
import DataEngineeringETL from "./pages/DataEngineeringETL";
import DataMigrationWarehousing from "./pages/DataMigrationWarehousing";
import KnowledgeGraphsTaxonomyDevelopment from "./pages/KnowledgeGraphsTaxonomyDevelopment";
import RetrievalAugmentedGenerationSupport from "./pages/RetrievalAugmentedGenerationSupport";
import IntelligentDataProcessingRecordsManagement from "./pages/IntelligentDataProcessingRecordsManagement";
import DigitisationAnthropologicalArchives from "./pages/DigitisationAnthropologicalArchives";
import AIForCulturalHeritage from "./pages/AIForCulturalHeritage";
import AIAnnotation from "./pages/AIAnnotation";
import DocumentAI from "./pages/DocumentAI";
import ComputerVision from "./pages/ComputerVision";
import MultilingualAI from "./pages/MultilingualAI";
import SyntheticDataGeneration from "./pages/SyntheticDataGeneration";
import SpeechLanguageAI from "./pages/SpeechLanguageAI";
import AgenticAI from "./pages/AgenticAI";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Policies from "./pages/Policies";
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
      <Route path={"/policies"} component={Policies} />
      <Route path={"/services/ai-data-annotation"} component={AIDataServices} />
      <Route path={"/services/generative-ai-llm-model"} component={GenerativeAIServices} />
      <Route path={"/services/enterprise-data-document-digitization"} component={EnterpriseDataServices} />
      <Route path={"/services/academic-research-cultural-heritage"} component={AcademicHeritageServices} />
      <Route path={"/overview"} component={OverView} />
      <Route path={"/engagement-models"} component={EngagementModels} />
      <Route path={"/blogs"} component={Blogs} />
      <Route path={"/blogs/:slug"} component={BlogPost} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/social-impact"} component={SocialImpact} />
      <Route path={"/service/egocentric-data"} component={EgocentricData} />
      <Route path={"/service/enterprise-document-digitization-ocr"} component={EnterpriseDocumentDigitizationOCR} />
      <Route path={"/service/data-conversion-content-transformation"} component={DataConversionContentTransformation} />
      <Route path={"/service/metadata-enrichment-data-cleansing"} component={MetadataEnrichmentDataCleansing} />
      <Route path={"/service/data-engineering-etl"} component={DataEngineeringETL} />
      <Route path={"/service/data-migration-warehousing"} component={DataMigrationWarehousing} />
      <Route path={"/service/knowledge-graphs-taxonomy-development"} component={KnowledgeGraphsTaxonomyDevelopment} />
      <Route path={"/service/rag-support"} component={RetrievalAugmentedGenerationSupport} />
      <Route path={"/service/intelligent-data-processing-records-management"} component={IntelligentDataProcessingRecordsManagement} />
      <Route path={"/service/digitisation-anthropological-archives"} component={DigitisationAnthropologicalArchives} />
      <Route path={"/service/ai-for-cultural-heritage"} component={AIForCulturalHeritage} />
      <Route path={"/service/document-ai-idp"} component={DocumentAI} />
      <Route path={"/service/ai-annotation"} component={AIAnnotation} />
      <Route path={"/service/computer-vision"} component={ComputerVision} />
      <Route path={"/service/multilingual-ai-datasets-localization"} component={MultilingualAI} />
      <Route path={"/service/synthetic-data-generation"} component={SyntheticDataGeneration} />
      <Route path={"/service/generative-ai"} component={GenerativeAI} />
      <Route path={"/service/ai-model-evaluation"} component={AIModelEvaluation} />
      <Route path={"/service/ai-safety-red-teaming-content-moderation"} component={AISafetyRedTeaming} />
      <Route path={"/service/custom-ml-tailored-software-development"} component={CustomMLTailoredSoftware} />
      <Route path={"/service/llm-data"} component={LLMData} />
      <Route path={"/service/rlhf-ai-alignment"} component={RLHFAlignment} />
      <Route path={"/service/speech-language-ai"} component={SpeechLanguageAI} />
      <Route path={"/service/agentic-ai"} component={AgenticAI} />
      {/* <Route path={"/service/:slug"} component={ServiceDetail} /> */}
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/case-studies/:slug"} component={CaseStudyDetail} />
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
