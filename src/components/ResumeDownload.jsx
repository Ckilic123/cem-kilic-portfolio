import React from 'react';
import { Download } from 'lucide-react';

/**
 * ResumeDownload
 * Provides a button linking to the PDF CV.
 */
const ResumeDownload = () => {
  return (
    <div className="text-center py-12">
      <a
        href="/cem_kilic_cv.pdf"
        download
        className="group border border-white/20 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2 mx-auto"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
