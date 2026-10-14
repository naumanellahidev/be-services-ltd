export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] }
export type LegalPage = { slug: string; title: string; summary: string; sections: LegalSection[] }

const contact: LegalSection = {
  heading: 'Contact',
  paragraphs: [
    'BE SERVICES LTD, 5 Wadsworth Road, Perivale, Greenford, UB6 7JD, United Kingdom.',
    'Email: info@beserviceslimited.co.uk. Phone: +447932055272.',
  ],
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    summary: 'How personal information shared through this website or by contacting BE SERVICES LTD is used and protected.',
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          'This website is operated by BE SERVICES LTD, an interior design business based at 5 Wadsworth Road, Perivale, Greenford, UB6 7JD, United Kingdom. For the purposes of UK data protection law, BE SERVICES LTD is the controller of personal information it receives through enquiries.',
        ],
      },
      {
        heading: 'Information we may collect',
        paragraphs: ['We only collect the personal information you choose to give us. This may include:'],
        list: [
          'Your name, email address and phone number when you contact us by email or telephone.',
          'Details you include in your enquiry, such as the type of space or service you are interested in.',
          'Basic technical information (such as IP address and browser type) that is processed automatically by our website hosting provider and by third-party services that deliver fonts and images to the page.',
        ],
      },
      {
        heading: 'The website contact form',
        paragraphs: [
          'The contact form on this website currently checks your details in your browser only. It is not connected to an email service or database, so information typed into it is not sent to or stored by BE SERVICES LTD. To make an enquiry, please email or call us directly.',
          'If a form service is connected in future, this policy will be updated to name that service and explain how submitted information is handled.',
        ],
      },
      {
        heading: 'How we use your information',
        list: [
          'To respond to your enquiry and discuss your interior design requirements.',
          'To keep a record of our correspondence with you.',
          'To meet any legal or regulatory obligations that apply to us.',
        ],
        paragraphs: ['We do not sell your personal information and we do not use it for marketing without your consent.'],
      },
      {
        heading: 'Lawful basis',
        paragraphs: [
          'We generally rely on our legitimate interests in responding to enquiries, or on steps taken at your request before entering into a contract. Where we rely on consent, you may withdraw it at any time.',
        ],
      },
      {
        heading: 'How long we keep information',
        paragraphs: [
          'We keep enquiry information only for as long as it is needed for the purposes above, after which it is deleted or securely disposed of. Where the law requires us to keep certain records, such as financial records, we keep them for the period the law sets.',
        ],
      },
      {
        heading: 'Sharing information',
        paragraphs: [
          'We may share information with service providers who help us run our business (for example email or IT providers), or where we are required to by law. Any such provider must keep your information secure and use it only on our instructions.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: ['Under UK data protection law you have rights including:'],
        list: [
          'The right to be informed and to access your personal information.',
          'The right to have inaccurate information corrected.',
          'The right to ask for your information to be erased or its use restricted.',
          'The right to object to certain processing and to data portability.',
          'The right to complain to the Information Commissioner’s Office (ICO) at ico.org.uk.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    summary: 'The cookies and similar technologies used by this website.',
    sections: [
      {
        heading: 'Our use of cookies',
        paragraphs: [
          'This website does not set its own cookies and does not use analytics, advertising or tracking tools. It also does not store information in your browser’s local storage.',
          'Because no non-essential cookies are used, the site does not display a cookie consent banner.',
        ],
      },
      {
        heading: 'Third-party content',
        paragraphs: [
          'To display the page, your browser loads web fonts from Google Fonts and interior photographs from Unsplash. When these files are requested, those providers receive technical information such as your IP address and browser details. These requests are governed by the providers’ own privacy and cookie policies.',
          'Our hosting provider may also process technical information needed to deliver the website securely.',
        ],
      },
      {
        heading: 'Managing cookies',
        paragraphs: [
          'You can control and delete cookies through your browser settings. Guidance is usually available in your browser’s help section.',
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'If cookies, analytics or a form service are added to the website in future, this policy will be updated before those technologies are used.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Website Terms and Conditions',
    summary: 'The terms that apply when you use this website.',
    sections: [
      {
        heading: 'About these terms',
        paragraphs: [
          'These terms apply to your use of this website, operated by BE SERVICES LTD. By using the website you agree to these terms. If you do not agree, please do not use the website.',
        ],
      },
      {
        heading: 'Use of the website',
        paragraphs: [
          'You may view and use this website for personal, non-commercial purposes in connection with enquiries about our interior design services. You must not use the website in a way that is unlawful or that could damage, disable or impair it.',
        ],
      },
      {
        heading: 'Information on this website',
        paragraphs: [
          'The content on this website is provided for general information about the interior design services we offer. Service descriptions are not an offer to provide any particular service, price or deliverable. Any work would be agreed with you separately.',
          'We aim to keep information accurate and up to date, but we do not guarantee that the website is complete, current or free from errors.',
        ],
      },
      {
        heading: 'Images',
        paragraphs: [
          'Photographs on this website are used to illustrate interior design ideas and inspiration. Unless clearly stated, they do not show projects completed by BE SERVICES LTD.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The website design, text and branding are owned by or licensed to BE SERVICES LTD. Photographs are used under the licence of their respective sources. See our Intellectual Property Notice for more details.',
        ],
      },
      {
        heading: 'External links',
        paragraphs: [
          'The website may contain links to third-party websites, such as Google Maps. We are not responsible for the content or practices of those websites.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the extent permitted by law, we are not liable for any loss arising from your use of, or reliance on, this website. Nothing in these terms limits liability that cannot be limited under English law.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: ['These terms are governed by the law of England and Wales.'],
      },
      contact,
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Website Disclaimer',
    summary: 'Important information about the content of this website.',
    sections: [
      {
        heading: 'General information only',
        paragraphs: [
          'The content of this website is intended as general information about BE SERVICES LTD and its interior design services. It is not professional advice for any specific project and should not be relied upon as such.',
        ],
      },
      {
        heading: 'Design inspiration imagery',
        paragraphs: [
          'Images shown in the Design Inspiration gallery and elsewhere on the website are illustrative and sourced from stock photography. They are not presented as completed projects by BE SERVICES LTD.',
        ],
      },
      {
        heading: 'Services and outcomes',
        paragraphs: [
          'Descriptions of services and our suggested design approach are indicative. They are not a guarantee of results, timescales, prices or specific deliverables. Any engagement would be subject to separate discussion and agreement.',
        ],
      },
      {
        heading: 'Availability',
        paragraphs: [
          'We do not guarantee that the website will always be available or uninterrupted, and we may change or remove content at any time.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    summary: 'Our approach to making this website usable for as many people as possible.',
    sections: [
      {
        heading: 'Our commitment',
        paragraphs: [
          'BE SERVICES LTD wants this website to be easy to use for everyone, including people who use assistive technologies. We have aimed to follow recognised good practice, such as the Web Content Accessibility Guidelines (WCAG) 2.2. This statement describes the steps taken; it is not a formal certification of compliance.',
        ],
      },
      {
        heading: 'What we have done',
        list: [
          'Semantic structure: pages use headings, landmarks and lists in a logical order.',
          'Keyboard navigation: menus, links, buttons and form fields can be reached and used with a keyboard, with visible focus outlines.',
          'Readable text: clear fonts, comfortable line spacing and text that can be resized in the browser.',
          'Contrast: text and button colours have been chosen for good contrast against their backgrounds.',
          'Images: meaningful images have descriptive alternative text.',
          'Forms: every field has a visible label, and validation messages are announced and linked to their fields.',
          'Motion: animations are subtle and are reduced when your device is set to prefer reduced motion.',
        ],
      },
      {
        heading: 'Known limitations',
        paragraphs: [
          'Some content, such as third-party map pages linked from this website, is outside our control and may not meet the same standards.',
        ],
      },
      {
        heading: 'Feedback',
        paragraphs: [
          'If you have difficulty using any part of this website, or need information in a different format, please contact us and we will do our best to help.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'data-protection',
    title: 'Data Protection Information',
    summary: 'A short summary of how BE SERVICES LTD approaches data protection.',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'BE SERVICES LTD handles personal information in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Full details are set out in our Privacy Policy.',
        ],
      },
      {
        heading: 'Principles we follow',
        list: [
          'Collect only the information needed to respond to enquiries and provide our services.',
          'Use information only for the purpose it was provided for.',
          'Keep information accurate, secure and no longer than necessary.',
          'Respect your rights over your personal information.',
        ],
      },
      {
        heading: 'Making a request',
        paragraphs: [
          'To ask for a copy of your information, request a correction or deletion, or raise any data protection concern, please contact us using the details below. We aim to respond within one month, as required by law.',
        ],
      },
      {
        heading: 'Complaints to the regulator',
        paragraphs: [
          'If you are unhappy with how we have handled your personal information, you have the right to complain to the Information Commissioner’s Office (ICO), the UK data protection regulator, at ico.org.uk or on 0303 123 1113.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'complaints-policy',
    title: 'Complaints Policy',
    summary: 'How to raise a concern with BE SERVICES LTD and how it will be handled.',
    sections: [
      {
        heading: 'Our aim',
        paragraphs: [
          'We want every enquiry and interaction to be handled courteously and fairly. If something has not met your expectations, please let us know so we can try to put it right.',
        ],
      },
      {
        heading: 'How to make a complaint',
        paragraphs: ['Please contact us by email or phone and include:'],
        list: [
          'Your name and contact details.',
          'A clear description of your concern.',
          'Any relevant dates or correspondence.',
          'What you would like us to do to resolve it.',
        ],
      },
      {
        heading: 'What happens next',
        paragraphs: [
          'We will acknowledge your complaint and look into it carefully. We will respond with our findings and any proposed resolution as promptly as we can.',
        ],
      },
      {
        heading: 'If you remain unhappy',
        paragraphs: [
          'If you are not satisfied with our response, you may wish to seek independent advice, for example from Citizens Advice.',
        ],
      },
      contact,
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property Notice',
    summary: 'Ownership of the content, branding and images on this website.',
    sections: [
      {
        heading: 'Ownership',
        paragraphs: [
          'Unless otherwise stated, the text, layout, design and BE SERVICES LTD name and branding on this website are owned by or licensed to BE SERVICES LTD.',
        ],
      },
      {
        heading: 'Photography',
        paragraphs: [
          'Interior photographs are sourced from Unsplash and used under the Unsplash licence. They remain the work of their respective photographers and are used for illustration and inspiration only.',
        ],
      },
      {
        heading: 'Permitted use',
        paragraphs: [
          'You may view the website and print or save pages for your own personal reference. You must not copy, reproduce, republish or use any content for commercial purposes without our prior written permission.',
        ],
      },
      {
        heading: 'Reporting concerns',
        paragraphs: ['If you believe any content on this website infringes your rights, please contact us and we will review it promptly.'],
      },
      contact,
    ],
  },
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use Policy',
    summary: 'The rules that apply to how this website may be used.',
    sections: [
      {
        heading: 'Permitted use',
        paragraphs: ['You may use this website only for lawful purposes and in a way that does not affect anyone else’s use of it.'],
      },
      {
        heading: 'You must not',
        list: [
          'Use the website in any way that breaches applicable law or regulation.',
          'Attempt to gain unauthorised access to the website, its hosting or any connected systems.',
          'Introduce viruses, malicious code or other harmful material.',
          'Use automated tools to scrape, overload or disrupt the website.',
          'Send unsolicited or misleading communications using our contact details.',
        ],
      },
      {
        heading: 'Breach of this policy',
        paragraphs: ['We may take any action we consider appropriate if this policy is breached, including restricting access to the website.'],
      },
      contact,
    ],
  },
  {
    slug: 'third-party-links',
    title: 'Third-Party Links Notice',
    summary: 'Information about links and services from other providers.',
    sections: [
      {
        heading: 'Links to other websites',
        paragraphs: [
          'This website includes links to third-party websites and services, such as Google Maps for directions and the website of the site developer. These links are provided for convenience only.',
        ],
      },
      {
        heading: 'No responsibility for third parties',
        paragraphs: [
          'We do not control and are not responsible for the content, availability, security or privacy practices of third-party websites. A link does not mean we endorse the website or its owner.',
        ],
      },
      {
        heading: 'Third-party content on our pages',
        paragraphs: [
          'Our pages load fonts from Google Fonts and photographs from Unsplash. Please review those providers’ own policies to understand how they handle technical information.',
        ],
      },
      contact,
    ],
  },
]

export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug)
