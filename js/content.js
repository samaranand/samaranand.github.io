/*
 * Editable portfolio content.
 * Add one object to the relevant list to grow the site.
 */
window.portfolioContent = {
  hero: {
    eyebrow: 'Samar Anand / Bengaluru, India',
    title: 'Software engineer at work. Builder when something makes me curious.',
    sideNote: 'Software Engineer II at Zeta. Four-plus years across fintech platforms, distributed workflows, secure operations, and production recovery.',
    summary: 'This is my digital workshop: part professional record, part project shelf, part notebook for the systems I keep thinking about.'
  },

  sections: {
    work: {
      kicker: '/work',
      title: 'Production systems, treated as living machinery.',
      intro: 'Most of my work sits behind financial products: asynchronous services, reconciliation, compliance controls, identity flows, migrations, and reliability fixes where correctness matters after the happy path ends.',
      note: 'Some implementation details are intentionally abstracted for customer, product, and security confidentiality.'
    },
    workshop: {
      kicker: '/workshop',
      title: 'Personal infrastructure and experiments.',
      intro: 'These are not polished products. They are working notes in software form: home systems, release experiments, automations, and small utilities that make me learn by operating them.'
    },
    experience: {
      kicker: '/experience',
      title: 'A compact career trail.',
      intro: 'The resume has the formal version. This page keeps the shape of the work visible: fintech systems, backend platforms, reliability, compliance, and secure workflows.'
    },
    notes: {
      kicker: '/notes',
      title: 'A notebook for things worth untangling.',
      intro: 'I read and write slowly when a topic needs more than a quick thread: systems, engineering judgment, movies, tools, and anything else that keeps returning.'
    },
    about: {
      kicker: '/about',
      title: 'A real person behind the systems.'
    },
    now: {
      kicker: '/now',
      title: 'What has my attention lately.'
    },
    contact: {
      kicker: '/contact',
      title: 'If there is a difficult system to make simpler, I would like to hear about it.'
    }
  },

  work: [
    {
      id: '01',
      area: 'Payments automation / Zeta',
      title: 'Credit Balance Refund automation for HDFC Pixel cards',
      summary: 'Built the Credit Balance Refund path from card balance to bank account with asynchronous reconciliation and recovery, replacing a manual operational loop with a recoverable system.',
      impact: ['100% manual refund operations removed', '400+ transactions per hour handled by reconciliation and recovery'],
      tags: ['Java', 'Spring Boot', 'Distributed recovery', 'Reconciliation']
    },
    {
      id: '02',
      area: 'Secure workflow platform / Zeta',
      title: 'Reusable job-processing platform',
      summary: 'Designed a shared platform for Seclore DRM, SFTP movement, retries, and secure file workflows so internal teams could compose repeatable jobs without rebuilding the risky parts.',
      impact: ['4 internal use cases adopted the platform', 'Secure file workflows standardized across jobs'],
      tags: ['Seclore DRM', 'SFTP', 'Retries', 'Secure workflows']
    },
    {
      id: '03',
      area: 'Compliance and reliability / Zeta',
      title: 'RBI/UPI controls and incident remediation',
      summary: 'Delivered compliance controls across account and transaction flows, and worked through the root cause of Elasticsearch CPU saturation that sat behind repeated production incidents.',
      impact: ['50,000+ accounts impacted by compliance controls', '50+ incidents traced through the reliability investigation'],
      tags: ['Kafka', 'Event-driven systems', 'Batch processing', 'Reliability']
    },
    {
      id: '04',
      area: 'Identity architecture / Zeta',
      title: 'Email verification with Magic Link and Google SSO',
      summary: 'Contributed to verification architecture for secure login and onboarding flows, combining Magic Link and Google SSO for a large user base.',
      impact: ['30,000+ users supported', 'Security-sensitive workflow hardened'],
      tags: ['Security', 'Identity', 'Google SSO', 'Magic Link']
    }
  ],

  workIndex: [
    {
      title: 'Zeta',
      items: [
        'Credit Balance Refund automation for HDFC Pixel cards',
        'Reusable job-processing platform for DRM, SFTP, retries, and secure file workflows',
        'RBI/UPI compliance controls and account-level transaction restrictions',
        'Email verification architecture with Magic Link and Google SSO',
        'Elasticsearch CPU saturation root-cause analysis and remediation'
      ]
    },
    {
      title: 'Bizongo',
      items: [
        'Invoice lending, disbursement, repayment, and risk workflows',
        'Fraud and risk pipelines, KYC onboarding, and invoice processing',
        'ONDC / Beckn working-capital credit integrations',
        'International invoice processing and notification workflows',
        'Finance-service migration from Ruby to Java 17'
      ]
    }
  ],

  experience: [
    {
      period: 'Apr 2025 - Present',
      role: 'Software Engineer II',
      company: 'Zeta',
      location: 'Bengaluru, India',
      summary: 'Working on fintech backend systems across payments automation, secure job processing, compliance controls, identity workflows, and production reliability.'
    },
    {
      period: 'Apr 2024 - Mar 2025',
      role: 'Software Engineer II',
      company: 'Bizongo',
      location: 'Bengaluru, India',
      summary: 'Worked on invoice lending, KYC onboarding, ONDC / Beckn integrations, secure document workflows, and backend services for financial operations.'
    },
    {
      period: 'Jun 2022 - Mar 2024',
      role: 'Software Engineer I',
      company: 'Bizongo',
      location: 'Bengaluru, India',
      summary: 'Built risk and fraud pipelines, invoice-processing workflows, asynchronous backend jobs, and contributed to a finance-service migration from Ruby to Java 17.'
    },
    {
      period: 'Earlier',
      role: 'Intern',
      company: 'Bizongo',
      location: 'Bengaluru, India',
      summary: 'Interned at Bizongo before joining full-time.'
    }
  ],

  projects: [
    {
      id: 'eagle',
      status: 'Active',
      title: 'Eagle',
      subtitle: 'Personal NVR surveillance and Telegram alerting system.',
      summary: 'A practical home system for RTSP camera streams, motion events, evidence capture, and Telegram alerts. It is built to survive boring operational problems: background workers, retry handling, SQLite state, retention, cleanup, and Android / Termux deployment.',
      tags: ['RTSP', 'Python', 'Flask', 'SQLite', 'Telegram', 'Workers', 'Termux'],
      link: null,
      image: null,
      longerDetails: [
        'CP Plus / Dahua-compatible NVR -> RTSP and HTTP event streams -> motion events -> snapshots and video capture -> background processing -> Telegram alert.',
        'Watches selected camera feeds and reacts to motion events instead of asking me to stare at live video.',
        'Keeps retention and cleanup explicit so the system stays useful after the first week.'
      ]
    },
    {
      id: 'home-lab',
      status: 'Ongoing',
      title: 'Home Lab',
      subtitle: 'A small infrastructure corner I can break and repair myself.',
      summary: 'Raspberry Pi, self-hosted services, Docker, Kubernetes, Tailscale, monitoring, networking, and automation. The point is not to cosplay a data center; it is to understand how systems behave when I own the boring edges.',
      tags: ['Raspberry Pi', 'Docker', 'Kubernetes', 'Tailscale', 'Monitoring', 'Automation'],
      link: null,
      image: null,
      longerDetails: [
        'A place for testing deployment habits, network access, service recovery, and observability on a small budget.'
      ]
    },
    {
      id: 'release-ai',
      status: 'Experiment',
      title: 'Release AI',
      subtitle: 'A local release-management experiment.',
      summary: 'An exploration around Git, Helm, Kubernetes, LangChain, Streamlit, and local models. The question is whether an assistant can make release context easier to inspect without hiding the decisions an engineer still needs to own.',
      tags: ['Git', 'Helm', 'Kubernetes', 'LangChain', 'Streamlit', 'Local models'],
      link: null,
      image: null,
      longerDetails: [
        'Focused on release context, chart changes, cluster assumptions, and reviewable explanations rather than one-click magic.'
      ]
    }
  ],

  ideas: [
    { status: 'Thinking about it', title: 'Personal password management' },
    { status: 'Experiment', title: 'Stock analysis' },
    { status: 'Thinking about it', title: 'AI-assisted education' },
    { status: 'Experiment', title: 'Spotify and music applications' },
    { status: 'Thinking about it', title: 'Personal dashboards / personal OS' },
    { status: 'Ongoing habit', title: 'Self-hosted tools and small automations' }
  ],

  notes: {
    link: 'https://samaranand.github.io/blogs/',
    label: 'Open the notes archive',
    items: [
      {
        label: 'Writing mode',
        text: 'Long-form blogs and articles when an idea needs room.'
      },
      {
        label: 'Usual territory',
        text: 'Backend systems, reliability, AI, system design, small tools, movies, and the occasional rabbit hole.'
      }
    ]
  },

  about: {
    caption: 'Samar Anand, off the critical path.',
    paragraphs: [
      'I am a Software Engineer II at Zeta in Bengaluru, with four-plus years of experience across fintech, backend engineering, distributed systems, reliability, and secure workflows.',
      'The work I enjoy most has moving parts: queues, retries, data consistency, compliance constraints, operational recovery, and the small design decisions that decide whether a system is understandable during an incident.',
      'Away from production systems, I like movies, watching cricket, food, long-form blogs and articles, 90s / 2000s Hindi music, building small tools, and learning random things for no immediate reason.'
    ]
  },

  now: [
    {
      label: 'Building',
      text: 'Eagle, home-lab services, and small automations that remove everyday friction.'
    },
    {
      label: 'Learning by operating',
      text: 'Self-hosted infrastructure, networking, monitoring, Docker, Kubernetes, and Tailscale.'
    },
    {
      label: 'Learning',
      text: 'AI fundamentals, practical AI tooling, and system design.'
    },
    {
      label: 'Thinking about',
      text: 'How release workflows can become easier to inspect without making engineers passive.'
    },
    {
      label: 'Offline',
      text: 'Movies, watching cricket, food, long-form writing, and 90s / 2000s Hindi music.'
    }
  ],

  contact: {
    email: 'samarss2015@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/samaranand/' },
      { label: 'GitHub', url: 'https://github.com/samaranand' },
      { label: 'Resume', url: 'assets/Samar-Anand-Resume.pdf' }
    ]
  }
};
