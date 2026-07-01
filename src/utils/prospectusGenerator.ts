/**
 * Utility to dynamically generate and trigger download of the Wells International Schools
 * official Prospectus & Physical Admission Form with a gorgeous school letterhead.
 */

export const downloadProspectusDocument = (): void => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wells International Schools - Prospectus & Admission Form</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
    }

    /* Print styling rules */
    @media print {
      body {
        background-color: #fff;
        padding: 0;
        margin: 0;
      }
      .no-print {
        display: none !important;
      }
      .page-break {
        page-break-before: always;
      }
      .card {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
      }
    }

    .container {
      max-width: 800px;
      margin: 30px auto;
      background: #ffffff;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }

    .no-print-bar {
      background: #003366;
      color: white;
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Space Grotesk', sans-serif;
    }

    .print-btn {
      background: #0099FF;
      color: white;
      border: none;
      padding: 8px 18px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }

    .print-btn:hover {
      background: #0080dd;
    }

    /* Elegant Letterhead Header */
    .letterhead {
      border-bottom: 3px double #003366;
      padding: 40px 40px 20px 40px;
      background-color: #fafbfc;
    }

    .header-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-side {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .crest-svg {
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title-area h1 {
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #003366;
      letter-spacing: -0.01em;
      text-transform: uppercase;
    }

    .title-area p {
      margin: 4px 0 0 0;
      font-size: 10px;
      letter-spacing: 0.2em;
      color: #64748b;
      font-weight: 700;
      text-transform: uppercase;
    }

    .contact-side {
      text-align: right;
      font-size: 11px;
      color: #475569;
      line-height: 1.4;
    }

    .contact-side strong {
      color: #003366;
    }

    /* Content Styling */
    .content {
      padding: 40px;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      color: #003366;
      border-left: 4px solid #0099FF;
      padding-left: 12px;
      margin-top: 30px;
      margin-bottom: 16px;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p.intro-text {
      color: #475569;
      font-size: 14px;
      line-height: 1.6;
    }

    /* Curriculum Matrix Table */
    .matrix-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
      font-size: 13px;
    }

    .matrix-table th {
      background-color: #003366;
      color: white;
      text-align: left;
      padding: 10px 12px;
      font-weight: 600;
    }

    .matrix-table td {
      border-bottom: 1px solid #e2e8f0;
      padding: 12px;
      vertical-align: top;
    }

    .matrix-table tr:nth-child(even) {
      background-color: #f8fafc;
    }

    .badge {
      background-color: #e0f2fe;
      color: #0369a1;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
    }

    /* Physical Form Field Formatting */
    .form-box {
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 24px;
      margin-top: 20px;
      background-color: #fafbfc;
    }

    .form-box h3 {
      font-family: 'Space Grotesk', sans-serif;
      margin-top: 0;
      color: #003366;
      font-size: 15px;
      text-align: center;
      border-bottom: 1px dashed #cbd5e1;
      padding-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .form-row {
      display: flex;
      gap: 20px;
      margin-bottom: 18px;
    }

    .field-group {
      flex: 1;
    }

    .field-label {
      font-size: 10px;
      font-weight: 700;
      color: #475569;
      text-transform: uppercase;
      margin-bottom: 6px;
      display: block;
    }

    .fill-line {
      border-bottom: 1px solid #94a3b8;
      height: 24px;
      margin-top: 4px;
    }

    .checkbox-row {
      display: flex;
      gap: 15px;
      margin-top: 8px;
      font-size: 11px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .checkbox-box {
      width: 14px;
      height: 14px;
      border: 1px solid #94a3b8;
      border-radius: 2px;
    }

    /* Footer styling */
    .doc-footer {
      border-top: 1px solid #e2e8f0;
      padding: 20px 40px;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
      background-color: #fafbfc;
    }

    .passport-box {
      width: 100px;
      height: 120px;
      border: 2px dashed #94a3b8;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      color: #94a3b8;
      text-align: center;
      float: right;
      margin-left: 20px;
    }

    .checklist {
      list-style-type: none;
      padding: 0;
      font-size: 11px;
      color: #475569;
    }

    .checklist li {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sign-row {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      gap: 40px;
    }
  </style>
</head>
<body>

  <!-- Printable Container -->
  <div class="container card">
    
    <!-- Floating Instruction Alert bar (not printed) -->
    <div class="no-print-bar no-print">
      <span>Official School Dossier • Format: Fillable Document & physical sheet</span>
      <button class="print-btn" onclick="window.print()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Print / Save to PDF
      </button>
    </div>

    <!-- Letterhead -->
    <div class="letterhead">
      <div class="header-layout">
        <div class="logo-side">
          <div class="crest-svg">
            <svg width="70" height="70" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer circular background */}
              <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
              <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1" stroke-dasharray="3 3" />
              
              {/* 1. Mortarboard / Graduation Cap on Top */}
              <g id="mortarboard" transform="translate(0, -6)">
                {/* Cap Diamond */}
                <path d="M100 18 L162 42 L100 66 L38 42 Z" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M100 22 L154 42 L100 62 L46 42 Z" fill="#991B1B" opacity="0.3" />
                {/* Cap Base */}
                <path d="M68 47.5 V56 C68 62 82 65 100 65 C118 65 132 62 132 56 V47.5" fill="none" stroke="#7F1D1D" stroke-width="3" stroke-linecap="round" />
                <path d="M70 48 V54 C70 59 83 62 100 62 C117 62 130 59 130 54 V48" fill="#B91C1C" />
                {/* Tassel */}
                <path d="M100 42 C101 42 102 44 102 47 C102 50 101 56 101 56 L104 68 H101 V74 H99 V68 H96 L99 56 C99 56 98 50 98 47 C98 44 99 42 100 42 Z" fill="#F59E0B" />
                <circle cx="100" cy="42" r="2.5" fill="#F59E0B" />
              </g>

              {/* 2. Main Shield (WIS Shield) */}
              <g id="shield">
                {/* Shield Outer Gold Border */}
                <path 
                  d="M50 64 C50 120 72 142 100 155 C128 142 150 120 150 64 C150 56 128 54 100 54 C72 54 50 56 50 64 Z" 
                  fill="#1E1B4B" 
                  stroke="#F59E0B" 
                  stroke-width="3.5" 
                  stroke-linejoin="round" 
                />
                {/* Inner Shield border */}
                <path 
                  d="M55 67 C55 116 75 137 100 149 C125 137 145 116 145 67 C145 61 126 59 100 59 C74 59 55 61 55 67 Z" 
                  fill="#2E2A72" 
                  stroke="#FFFFFF" 
                  stroke-width="1.5" 
                />

                {/* 3. Open Book inside Shield */}
                <g id="book" transform="translate(0, 4)">
                  {/* Book Pages */}
                  <path d="M100 86 C88 80 74 81 64 85 V109 C74 105 88 104 100 110" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1" stroke-linejoin="round" />
                  <path d="M100 86 C112 80 126 81 136 85 V109 C126 105 112 104 100 110" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1" stroke-linejoin="round" />
                  {/* Middle Spine */}
                  <path d="M100 86 V110" stroke="#1E1B4B" stroke-width="1.5" />
                  {/* Dynamic Lines (Text Lines) on Book Pages */}
                  <path d="M68 91 C76 89 86 89 94 92 M68 96 C76 94 86 94 94 97 M68 101 C76 99 86 99 94 102" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" />
                  <path d="M132 91 C124 89 114 89 106 92 M132 96 C124 94 114 94 106 97 M132 101 C124 99 114 99 106 102" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" />

                  {/* Book WIS Lettering */}
                  <text x="76" y="102" fill="#1E1B4B" font-size="11" font-weight="900" font-family="sans-serif" letter-spacing="0.5">W</text>
                  <text x="96" y="102" fill="#1E1B4B" font-size="11" font-weight="900" font-family="sans-serif" letter-spacing="0.5">I</text>
                  <text x="114" y="102" fill="#1E1B4B" font-size="11" font-weight="900" font-family="sans-serif" letter-spacing="0.5">S</text>
                </g>

                {/* 4. "WELLS" Text inside Shield */}
                <text 
                  x="100" 
                  y="128" 
                  fill="#FFFFFF" 
                  font-size="14" 
                  font-weight="900" 
                  font-family="sans-serif" 
                  text-anchor="middle" 
                  letter-spacing="1"
                >
                  WELLS
                </text>

                {/* 5. "INTERNATIONAL SCHOOLS" in Shield Footer */}
                <text 
                  x="100" 
                  y="139" 
                  fill="#F59E0B" 
                  font-size="6.5" 
                  font-weight="800" 
                  font-family="sans-serif" 
                  text-anchor="middle" 
                  letter-spacing="0.5"
                >
                  INTERNATIONAL SCHOOLS
                </text>
              </g>

              {/* 6. Red Ribbon Banner at the Bottom */}
              <g id="ribbon">
                {/* Ribbon Left Fold */}
                <path d="M22 154 L44 142 L44 162 Z" fill="#7F1D1D" stroke="#450A0A" stroke-width="1" />
                {/* Ribbon Right Fold */}
                <path d="M178 154 L156 142 L156 162 Z" fill="#7F1D1D" stroke="#450A0A" stroke-width="1" />
                
                {/* Ribbon Main Body */}
                <path 
                  d="M32 144 C68 138 132 138 168 144 L162 165 C128 158 72 158 38 165 Z" 
                  fill="#B91C1C" 
                  stroke="#7F1D1D" 
                  stroke-width="1.5" 
                  stroke-linejoin="round" 
                />
                
                {/* Ribbon Text: "...WISDOM, INNOVATION & SKILL" */}
                <path id="ribbonTextPath" d="M34 153 C68 147 132 147 166 153" fill="none" stroke="none" />
                <text font-size="7.5" font-weight="800" font-family="sans-serif" fill="#FFFFFF" letter-spacing="0.4">
                  <textPath href="#ribbonTextPath" startOffset="50%" text-anchor="middle">
                    ...WISDOM, INNOVATION & SKILL
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <div class="title-area">
            <h1>Wells</h1>
            <p>International Schools</p>
          </div>
        </div>
        <div class="contact-side">
          <strong>Admissions Secretariat Desk</strong><br>
          12 Wells International Ave, Seaside Academic Estate<br>
          Port Harcourt Sub-District, Niger Delta, NG<br>
          Phone: +234 (0) 803 988 7766 | admissions@wellsintl.edu.ng
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content">
      
      <div style="text-align: center; margin-bottom: 25px;">
        <h2 style="font-family: 'Space Grotesk', sans-serif; margin: 0; color: #003366; font-size: 22px;">OFFICIAL SCHOOL PROSPECTUS & SYLLABUS</h2>
        <span style="font-size: 11px; font-weight: 700; color: #0099FF; text-transform: uppercase; letter-spacing: 0.1em;">Academic Session 2026 / 2027</span>
      </div>

      <p class="intro-text">
        Welcome to Wells International Schools. We provide an advanced educational ecology built on deep intellectual mastery, practical technology systems, high-caliber athletics, and absolute ethical leadership development. Our double-syllabus models allow scholars to sit confidently for local WAEC qualifications as well as globally recognized Cambridge Level certifications.
      </p>

      <div class="section-title">Academic Divisions Overview</div>
      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width: 25%;">Division</th>
            <th style="width: 45%;">Curriculum Structure</th>
            <th style="width: 30%;">Representative Subjects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Nursery School</strong><br><span class="badge">Ages 2 - 5</span></td>
            <td>Montessori-inspired, focusing on motor skills development, sensory speech pathways, and exploratory visual play.</td>
            <td>Early Numeracy & Literacy, French, Sensory Coordination, Puppet Play, Storytelling</td>
          </tr>
          <tr>
            <td><strong>Primary School</strong><br><span class="badge">Ages 5 - 11</span></td>
            <td>Inquiry-based collaborative frameworks cultivating logic, computational thinking, and bilateral communications.</td>
            <td>Advanced Mathematics, Literature, General Science, Junior Coding, Chess, Creative Arts</td>
          </tr>
          <tr>
            <td><strong>Secondary School</strong><br><span class="badge">Ages 11 - 18</span></td>
            <td>Collegiate preparatory rigor preparing leaders for Cambridge IGCSE, SAT, and national WAEC certifications.</td>
            <td>Pure Calculus, AI & Computer Science, Biotech Labs, Macroeconomics, Physics, MUN</td>
          </tr>
        </tbody>
      </table>

      <div class="section-title">Diagnostic Screening & Intake Checklist</div>
      <p class="intro-text" style="margin-bottom: 12px;">
        Each candidate is required to complete standard educational screenings (logic, literacy, quantitative calculations) and attend an interactive family panel prior to formal placement confirmation.
      </p>
      
      <ul class="checklist">
        <li><div style="width:10px; height:10px; border:1px solid #003366; border-radius:2px; display:inline-block; margin-right:8px;"></div> Completed and signed Physical Application form (below)</li>
        <li><div style="width:10px; height:10px; border:1px solid #003366; border-radius:2px; display:inline-block; margin-right:8px;"></div> Copy of Birth Certificate / Passport Information page</li>
        <li><div style="width:10px; height:10px; border:1px solid #003366; border-radius:2px; display:inline-block; margin-right:8px;"></div> Past 2 Years Academic Transcript records & behavioral reference sheets</li>
        <li><div style="width:10px; height:10px; border:1px solid #003366; border-radius:2px; display:inline-block; margin-right:8px;"></div> Official Child Immunization Schedule and blood group clearances</li>
        <li><div style="width:10px; height:10px; border:1px solid #003366; border-radius:2px; display:inline-block; margin-right:8px;"></div> 2 Passport-sized photographs of the child</li>
      </ul>

      <!-- Page break for the actual form when printing -->
      <div class="page-break"></div>
      
      <div class="section-title" style="margin-top: 40px;">Physical Enrollment Form</div>
      <p class="intro-text">
        Please complete the fields below with block lettering and submit physically to our Admissions Secretariat Desk at the main campus entrance.
      </p>

      <div class="form-box">
        <div class="passport-box">
          <br><br>Affix<br>Student Passport<br>Photograph
        </div>
        <h3>STUDENT ADMISSION APPLICATION</h3>

        <!-- Student Name -->
        <div class="form-row">
          <div class="field-group" style="flex: 2;">
            <span class="field-label">Student Full Legal Name (Last Name First)</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <!-- DOB and Gender -->
        <div class="form-row">
          <div class="field-group">
            <span class="field-label">Date of Birth (DD / MM / YYYY)</span>
            <div class="fill-line"></div>
          </div>
          <div class="field-group">
            <span class="field-label">Gender (Male / Female)</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <!-- Class Selection check box -->
        <div class="field-group" style="margin-bottom: 20px;">
          <span class="field-label">Desired Academic Division</span>
          <div class="checkbox-row">
            <div class="checkbox-item"><div class="checkbox-box"></div> Nursery Division</div>
            <div class="checkbox-item"><div class="checkbox-box"></div> Primary Years 1 - 6</div>
            <div class="checkbox-item"><div class="checkbox-box"></div> Secondary JSS 1 - SSS 3</div>
          </div>
        </div>

        <!-- Current Grade or Class -->
        <div class="form-row">
          <div class="field-group">
            <span class="field-label">Current School Grade / Class</span>
            <div class="fill-line"></div>
          </div>
          <div class="field-group">
            <span class="field-label">Previous School Attended</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <!-- Guardian Details -->
        <div class="form-row" style="margin-top: 25px;">
          <div class="field-group">
            <span class="field-label">Parent / Guardian Full Name</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <div class="form-row">
          <div class="field-group">
            <span class="field-label">Contact Email Address</span>
            <div class="fill-line"></div>
          </div>
          <div class="field-group">
            <span class="field-label">Active Telephone Number</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <div class="form-row">
          <div class="field-group">
            <span class="field-label">Residential Home Address</span>
            <div class="fill-line"></div>
          </div>
        </div>

        <!-- Signature blocks -->
        <div class="sign-row">
          <div class="field-group">
            <span class="field-label">Signature of Parent / Guardian</span>
            <div class="fill-line" style="margin-top: 20px;"></div>
          </div>
          <div class="field-group">
            <span class="field-label">Date signed</span>
            <div class="fill-line" style="margin-top: 20px;"></div>
          </div>
        </div>

      </div>

    </div>

    <!-- Official Document footer -->
    <div class="doc-footer">
      © 2026 Wells International Schools. Issued by the Secretariat of Admissions. All rights reserved.<br>
      Document ID: WIS-ADMISSION-FORM-2026 | Location: 12 Wells International Ave, Seaside Academic Estate.
    </div>

  </div>

</body>
</html>`;

  // Create a Blob from the HTML String
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  // Set up download trigger anchor
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'Wells_International_Schools_Prospectus_and_Form_2026.html';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  
  // Clean up
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
};
