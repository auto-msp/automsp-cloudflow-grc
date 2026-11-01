window.WORKSPACE_CONFIG = {
  "slug": "cloudflow",
  "name": "CloudFlow",
  "industry": "B2B SaaS",
  "framework": "ISO 27001",
  "accent": "#8a4bc0",
  "accentDark": "#6d389c",
  "tagline": "Build governance into growth.",
  "module": "Policy governance",
  "moduleKey": "policies",
  "moduleIntro": "Assign ownership, track versions, and record policy review decisions. Approval is a workspace record, not a signed legal attestation.",
  "recordName": "Policy",
  "fields": [
    {
      "key": "name",
      "label": "Policy name",
      "required": true
    },
    {
      "key": "version",
      "label": "Version",
      "required": true
    },
    {
      "key": "domain",
      "label": "Policy domain",
      "options": [
        "Access governance",
        "Information security",
        "Data protection",
        "Incident response",
        "Supplier security"
      ]
    },
    {
      "key": "status",
      "label": "Lifecycle stage",
      "options": [
        "Draft",
        "In review",
        "Approved",
        "Retired"
      ]
    },
    {
      "key": "approver",
      "label": "Approver / reviewing role",
      "required": true
    },
    {
      "key": "owner",
      "label": "Policy owner",
      "required": true
    },
    {
      "key": "review",
      "label": "Next review",
      "type": "date"
    }
  ],
  "records": [
    {
      "id": "POL-001",
      "name": "Access Control Policy · ACP-001",
      "version": "0.1",
      "domain": "Access governance",
      "status": "Draft",
      "approver": "CTO",
      "owner": "Security Lead",
      "review": "2026-11-20",
      "origin": "Repository scenario"
    },
    {
      "id": "POL-002",
      "name": "Information Security Policy · Sample",
      "version": "0.1",
      "domain": "Information security",
      "status": "In review",
      "approver": "Executive Sponsor",
      "owner": "Security Lead",
      "review": "2026-11-27",
      "origin": "Illustrative sample"
    },
    {
      "id": "POL-003",
      "name": "Supplier Security Standard · Sample",
      "version": "0.1",
      "domain": "Supplier security",
      "status": "Draft",
      "approver": "CTO",
      "owner": "Vendor Management",
      "review": "2026-12-04",
      "origin": "Illustrative sample"
    }
  ],
  "risks": [
    {
      "title": "Onboarding and offboarding policies are undocumented",
      "category": "Identity & access",
      "likelihood": 4,
      "impact": 4,
      "owner": "Security Lead",
      "status": "Open",
      "due": "2026-11-20",
      "description": "The source audit log describes employee access procedures based on tribal knowledge and the initiation of ACP-001. Publish and review documented procedures.",
      "origin": "Repository scenario"
    },
    {
      "title": "Security policy ownership needs formalization",
      "category": "Governance",
      "likelihood": 3,
      "impact": 4,
      "owner": "Executive Sponsor",
      "status": "In progress",
      "due": "2026-11-27",
      "description": "Illustrative governance item based on the source policy-establishment scenario.",
      "origin": "Illustrative sample"
    },
    {
      "title": "Supplier security policy not reviewed",
      "category": "Third parties",
      "likelihood": 2,
      "impact": 4,
      "owner": "Vendor Management",
      "status": "Open",
      "due": "2026-12-04",
      "description": "Illustrative audit planning item.",
      "origin": "Illustrative sample"
    }
  ],
  "controls": [
    [
      "CF-01",
      "Joiner / mover / leaver procedure",
      "Identity & access",
      "Security Lead",
      "Gap"
    ],
    [
      "CF-02",
      "Information security policy ownership",
      "Governance",
      "Executive Sponsor",
      "In review"
    ],
    [
      "CF-03",
      "Policy approval record",
      "Governance",
      "Security Lead",
      "Not assessed"
    ],
    [
      "CF-04",
      "Supplier security requirements",
      "Third parties",
      "Vendor Management",
      "Not assessed"
    ],
    [
      "CF-05",
      "Security awareness record",
      "People",
      "People Operations",
      "Not assessed"
    ],
    [
      "CF-06",
      "Periodic access review",
      "Identity & access",
      "Engineering",
      "Not assessed"
    ]
  ],
  "focusTitle": "Replace tribal knowledge with ownership",
  "focusText": "Create a policy inventory, name accountable owners, and move the access-control policy from draft to an evidenced review decision.",
  "focusAction": "Open policy governance",
  "frameworkNote": "ISO 27001-oriented control themes are planning aids. They are not a complete standard checklist or certification assessment."
};
