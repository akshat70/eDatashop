import amazonEbookProduction from "@/lib/images/amazon-ebook-production.png";
import xmlMarkupStructuredContent from "@/lib/images/xml-markup-structured-content.png";
import aeroboticsOrchardMapping from "@/lib/images/aerobotics-orchard-mapping.png";
import pollSurveyResearchProcessing from "@/lib/images/poll-survey-research-processing.png";
import facialImpressionSurvey from "@/lib/images/facial-impression-survey.png";
import patientCareFeedbackDigitization from "@/lib/images/patient-care-feedback-digitization.png";
import firstPersonPovDataCapture from "@/lib/images/first-person-pov-data-capture.png";
import lidar3dPointCloudAnnotation from "@/lib/images/lidar-3d-point-cloud-annotation.png";

export type CaseStudy = {
  slug: string;
  title: string;
  subheading: string;
  subtitle: string;
  category: string;
  client: string;
  image: string;
  overview: string[];
  challenge: string[];
  solution: string[];
  impact: string[];
  capabilities: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-ebook-production",
    title: "Amazon eBook Production, FLHT, FLTP & Arabic Books",
    subheading: "From complex layouts and multilingual content to accessible, reflowable eBooks",
    subtitle: "Engineering complex fixed-layout content for an enhanced digital reading experience.",
    category: "Digital Publishing",
    client: "Amazon eBook production ecosystem",
    image: amazonEbookProduction,
    overview: ["CyberData India supported specialized conversion and digital publishing for complex fixed-layout titles, including Fixed Layout Hidden Text, Fixed Layout Text Popups, and Arabic fixed-layout eBooks.", "The engagement required visually complex source books to become high-quality digital editions while preserving the appearance, structure, reading sequence, and experience of the original publication."],
    challenge: ["Maintaining the original visual identity while adding a machine-readable text layer", "Positioning interactive popup regions precisely across complex illustrated layouts", "Preserving Arabic Unicode, right-to-left reading order, character shaping, and mixed-language content", "Validating the package visually and functionally across reading devices"],
    solution: ["Text extraction, proofreading, hidden-text mapping, and reading-order validation", "Fixed-layout page engineering with interactive text regions and popup linking", "XML/HTML markup, Unicode processing, RTL sequencing, and multilingual layout handling", "Device-level testing, visual quality assurance, and final package validation"],
    impact: ["Complex illustrated and Arabic-language print titles became structured, interactive, digitally accessible eBooks.", "The work combined content engineering, multilingual processing, XML/HTML expertise, and rigorous device-level QA without compromising the source design."],
    capabilities: ["FLHT", "FLTP", "Fixed-layout eBooks", "Arabic / RTL", "XML / HTML", "Interactive eBooks", "Unicode processing", "eBook QA"]
  },
  {
    slug: "xml-markup-structured-content",
    title: "XML Markup & Structured Content Transformation",
    subheading: "Transforming unstructured content into XML-based, structured, and reusable data",
    subtitle: "Transforming unstructured documents into intelligent, reusable digital content.",
    category: "Content Transformation",
    client: "Publishers, archives, and knowledge platforms",
    image: xmlMarkupStructuredContent,
    overview: ["CyberData India converts books, journals, publications, archival documents, and other content into structured XML-based digital assets.", "The purpose is not simply to digitize text, but to identify semantic structure so content can be searched, reused, republished, exchanged, and processed programmatically."],
    challenge: ["Interpreting hierarchy and semantic meaning inside unstructured or semi-structured files", "Preserving tables, figures, captions, footnotes, references, and cross-links", "Handling special characters, metadata, and client-specific publishing rules", "Producing consistently valid XML against required schemas or DTDs"],
    solution: ["Source analysis, OCR, text extraction, cleansing, and structural identification", "XML tagging, metadata creation, and hierarchical content structuring", "Markup of tables, figures, notes, references, and cross-reference links", "DTD/schema validation, automated checks, and multi-level human QA"],
    impact: ["Static documents became structured knowledge assets suitable for publishing platforms, digital libraries, content systems, archives, search, and downstream AI.", "Reusable markup reduced the gap between legacy content and modern digital distribution."],
    capabilities: ["XML", "Structured content", "OCR", "Metadata", "Schema validation", "Digital publishing", "Document conversion", "Quality assurance"]
  },
  {
    slug: "aerobotics-orchard-mapping",
    title: "Aerobotics, Orchard Mapping Using Drone Imagery",
    subtitle: "Transforming aerial agricultural imagery into AI-ready orchard intelligence.",
    subheading: "Accurate data extraction and mapping from drone imagery to drive precision agriculture.",
    category: "Computer Vision",
    client: "Aerobotics / agricultural AI initiative",
    image: aeroboticsOrchardMapping,
    overview: ["CyberData India participated in an agricultural AI/ML initiative involving high-resolution drone imagery of orchards.", "Aerial images were processed to identify and map individual plants and trees, creating structured datasets for orchard mapping and plant-health analysis."],
    challenge: ["Overlapping trees and dense vegetation", "Changing lighting, shadows, species, seasons, health, and growth stages", "Reliable identification of individual plants across large high-resolution images", "Preparing consistent labels for downstream machine-learning workflows"],
    solution: ["Processed and organized high-resolution drone imagery", "Identified and mapped individual orchard plants and trees", "Performed image-level analysis, classification, and visual indicator review", "Prepared structured training datasets with quality validation"],
    impact: ["The project demonstrated a path from manual orchard monitoring toward scalable, data-driven agricultural intelligence.", "Human-validated visual data can help teams understand plant distribution, orchard condition, and areas that require inspection."],
    capabilities: ["Drone imagery", "Computer vision", "Agricultural AI", "Image annotation", "Orchard mapping", "Dataset preparation", "ML support", "QA"]
  },
  {
    slug: "poll-survey-research-processing",
    title: "Poll Survey Analysis & Research Data Processing",
    subheading: "Turning complex survey data into accurate insights for informed decision making.",
    subtitle: "Turning complex survey material into structured research intelligence.",
    category: "Research Data",
    client: "Renowned university, USA",
    image: pollSurveyResearchProcessing,
    overview: ["CyberData India processes complex polling and public-opinion survey documents for a renowned university in the United States.", "Questionnaires, response distributions, demographic conditions, and research notes are transformed into standardized, searchable, analysis-ready datasets."],
    challenge: ["Different survey structures and layouts across a large collection", "Counts, percentages, multiple-response questions, and subpopulation conditions", "Missing or excluded responses and complex response-code mappings", "Preserving statistical meaning, contextual notes, and consistency"],
    solution: ["Questionnaire interpretation, question extraction, and response processing", "Frequency, percentage, count, multiple-response, and code-map validation", "Subpopulation identification and contextual note capture", "Structured JSON preparation, automated validation, and multi-level human QA"],
    impact: ["Complex survey documents became searchable, structured, and analysis-ready research data.", "The controlled workflow preserved statistical integrity and enabled researchers to discover and analyze valuable polling information more efficiently."],
    capabilities: ["Survey processing", "Poll analysis", "Academic research", "JSON", "Data validation", "Response analysis", "Statistical QA", "Human in the loop"]
  },
  {
    slug: "facial-impression-survey",
    title: "Facial Impression Survey",
    subheading: "Capturing first impressions and analysing facial responses for research insights.",
    subtitle: "Capturing first impressions and analysing facial responses for research insights.",
    category: "Human Preference Data",
    client: "Behavioural research engagement",
    image: facialImpressionSurvey,
    overview: ["CyberData India executed a specialized facial-impression survey designed to capture how participants perceive and respond to facial characteristics presented through visual stimuli.", "The resulting information represents subjective human judgment and therefore required controlled presentation, participant coordination, and consistent collection methods."],
    challenge: ["Presentation order and visual context could influence participant judgment", "Question interpretation had to remain consistent", "Subjective responses required a disciplined and unbiased collection process", "The final dataset needed validation, cleaning, and analytical structure"],
    solution: ["Participant coordination and controlled presentation of facial stimuli", "Survey administration and independent human-response collection", "Response validation, consistency checks, and data cleaning", "Structured dataset preparation, quality control, and final delivery"],
    impact: ["The dataset supports research into human perception, behavioural science, computer vision, human-preference modeling, and AI evaluation.", "It created analytically useful records of how people interpret trustworthiness, confidence, emotion, and overall impression."],
    capabilities: ["Human perception data", "Survey operations", "Participant management", "Preference data", "Behavioural research", "Validation", "Research support"]
  },
  {
    slug: "patient-care-feedback-digitization",
    title: "Digitization of Patient Care Feedback Forms",
    subheading: "Converting paper feedback into structured, actionable data.",
    subtitle: "Converting paper feedback into structured, actionable healthcare data.",
    category: "Healthcare Digitization",
    client: "UK-based healthcare services firm",
    image: patientCareFeedbackDigitization,
    overview: ["CyberData India supports the digitization and structured processing of patient-care feedback forms for a UK-based firm.", "Printed, scanned, handwritten, checkbox, rating, and free-text feedback is converted into searchable, analysis-ready data while preserving the original patient response."],
    challenge: ["Mixed printed and handwritten information", "Checkboxes, ratings, free text, and partially completed fields", "Inconsistent handwriting and different form layouts", "Ambiguous information requiring human interpretation and exception handling"],
    solution: ["Document and image preparation with OCR-assisted extraction", "Handwritten information, checkbox, rating, and free-text capture", "Manual verification, normalization, and structured database preparation", "Exception handling and quality assurance for unclear content"],
    impact: ["Large volumes of paper feedback became information that could be searched, managed, and analyzed efficiently.", "Structured feedback supports patient-satisfaction, service-quality, recurring-concern, department-trend, and improvement analysis."],
    capabilities: ["Healthcare digitization", "Patient feedback", "Handwritten capture", "Document AI", "OCR", "Forms processing", "Validation", "Structured data"]
  },
  {
    slug: "first-person-pov-data-capture",
    title: "First-Person POV Data Capture for Robotics & Embodied AI",
    subheading: "Capturing real-world human perspective data to train and validate next-generational AI models.",
    subtitle: "Capturing the physical world from a human perspective to train the next generation of AI.",
    category: "Embodied AI",
    client: "Robotics and physical-AI programs",
    image: firstPersonPovDataCapture,
    overview: ["CyberData India has developed operational capabilities for collecting first-person or egocentric video for robotics, computer vision, and embodied-AI applications.", "Participants perform real-world activities while wearable or head-mounted devices capture what they see, reach for, interact with, and do next."],
    challenge: ["Recruiting and coordinating participants across representative environments", "Maintaining consistent device setup, task execution, and recording quality", "Capturing natural interactions while preserving detailed activity metadata", "Managing exceptions, recollection, and scalable production quality"],
    solution: ["Participant recruitment, environment validation, device setup, and task assignment", "First-person video and synchronized audio capture in real-world scenarios", "Task, temporal, object-interaction, action, and environmental metadata", "Upload review, exception/recollection management, QA, and dataset delivery"],
    impact: ["First-person datasets provide training material for robotics, embodied AI, VLA models, autonomous agents, and human-object interaction systems.", "The capability supports the transition from AI that understands digital information to systems that perceive and act in the physical world."],
    capabilities: ["Egocentric video", "First-person vision", "Robotics data", "Embodied AI", "Participant recruitment", "Real-world collection", "Computer vision", "HITL AI"]
  },
  {
    slug: "lidar-3d-point-cloud-annotation",
    title: "LiDAR & 3D Point Cloud Annotation",
    subheading: "High-precision 3D annotation for autonomous systems, mapping and simulation.",
    subtitle: "Building spatial intelligence for autonomous vehicles, robotics, and physical AI.",
    category: "3D Annotation",
    client: "Autonomous and robotic perception programs",
    image: lidar3dPointCloudAnnotation,
    overview: ["CyberData India supports LiDAR and 3D point-cloud annotation workflows that transform raw spatial sensor data into structured training datasets for AI perception models.", "The work helps models understand what an object is, where it is, its dimensions and orientation, and how it relates to and moves through a three-dimensional environment."],
    challenge: ["Point clouds represent complex three-dimensional spaces rather than flat imagery", "Object dimensions, orientation, occlusion, and classification require precision", "Tracking must remain consistent across consecutive frames", "Sensor-fusion projects require alignment between LiDAR and camera data"],
    solution: ["3D cuboids, point-cloud labels, object detection, and classification", "Semantic and instance segmentation", "Multi-frame tracking, trajectory, orientation, and continuity validation", "LiDAR-camera sensor fusion, QA validation, and dataset export"],
    impact: ["Accurately annotated LiDAR datasets give AI models the spatial intelligence required to understand, navigate, and interact with 3D environments.", "The workflows support autonomous vehicles, ADAS, robotics, smart cities, inspection, geospatial mapping, and physical AI."],
    capabilities: ["LiDAR", "Point clouds", "3D cuboids", "Semantic segmentation", "Instance segmentation", "Object tracking", "Sensor fusion", "Autonomous systems"]
  }
];

export function getCaseStudy(slug: string) { return caseStudies.find((study) => study.slug === slug); }
