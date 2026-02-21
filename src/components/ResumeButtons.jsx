import aimlPdf from "./aiml.pdf";
import sdePdf from "./sde.pdf";

export default function ResumeButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      <a href={aimlPdf} download="AFZAL-AHAMED-A-AIML-Resume.pdf" className="glass px-6 py-3 rounded-xl hover-lift neon-border">
        AI / ML Resume
      </a>
      <a href={sdePdf} download="AFZAL-AHAMED-A-SDE-Resume.pdf" className="glass px-6 py-3 rounded-xl hover-lift neon-border">
        SDE Resume
      </a>
    </div>
  );
}