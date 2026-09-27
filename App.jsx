import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://photography-api-88wq.onrender.com';

const FALLBACK_ENDPOINTS = [
  {
    section: 'Authentication',
    items: [
      { method: 'POST', path: '/auth/register', summary: 'Register a new user' },
      { method: 'POST', path: '/auth/verify-email', summary: "Verify a user's email address" },
      { method: 'POST', path: '/auth/resend-verification', summary: 'Resend email verification code' },
      { method: 'POST', path: '/auth/login', summary: 'Login a verified user' },
      { method: 'GET', path: '/auth/me', summary: 'Get the currently authenticated user' },
      { method: 'POST', path: '/auth/change-password', summary: "Change the authenticated user's password" },
    ],
  },
  {
    section: 'Projects',
    items: [
      { method: 'GET', path: '/projects', summary: 'Get all published projects' },
      { method: 'POST', path: '/projects', summary: 'Create a new project' },
      { method: 'GET', path: '/projects/{id}', summary: 'Get a project by ID' },
      { method: 'PATCH', path: '/projects/{id}', summary: 'Update a project' },
      { method: 'DELETE', path: '/projects/{id}', summary: 'Delete a project' },
    ],
  },
  {
    section: 'Services',
    items: [
      { method: 'GET', path: '/services', summary: 'Get all active services' },
      { method: 'POST', path: '/services', summary: 'Create a new service' },
      { method: 'GET', path: '/services/{id}', summary: 'Get a service by ID' },
      { method: 'PATCH', path: '/services/{id}', summary: 'Update a service' },
      { method: 'DELETE', path: '/services/{id}', summary: 'Delete a service' },
    ],
  },
  {
    section: 'Bookings',
    items: [
      { method: 'POST', path: '/bookings', summary: 'Create a booking' },
      { method: 'GET', path: '/bookings', summary: 'Get all bookings' },
      { method: 'GET', path: '/bookings/my', summary: "Get the authenticated user's bookings" },
      { method: 'GET', path: '/bookings/my/{id}', summary: "Get one of the authenticated user's bookings" },
      { method: 'PATCH', path: '/bookings/my/{id}/cancel', summary: "Cancel one of the authenticated user's bookings" },
      { method: 'GET', path: '/bookings/admin/{id}', summary: 'Get a booking by ID as an administrator' },
      { method: 'PATCH', path: '/bookings/admin/{id}', summary: 'Update a booking as an administrator' },
      { method: 'DELETE', path: '/bookings/admin/{id}', summary: 'Delete a booking as an administrator' },
    ],
  },
  {
    section: 'Messages',
    items: [
      { method: 'POST', path: '/messages', summary: 'Send a message' },
      { method: 'GET', path: '/messages', summary: 'Get all messages' },
      { method: 'GET', path: '/messages/{id}', summary: 'Get a message by ID' },
      { method: 'DELETE', path: '/messages/{id}', summary: 'Delete a message' },
      { method: 'PATCH', path: '/messages/{id}/status', summary: 'Update message status' },
    ],
  },
  {
    section: 'Admin',
    items: [{ method: 'GET', path: '/admin/dashboard', summary: 'Get admin dashboard statistics' }],
  },
  {
    section: 'Users',
    items: [{ method: 'GET', path: '/users', summary: 'Get all users' }],
  },
];

const FALLBACK_SCHEMAS = ['Error', 'User', 'Project', 'Service', 'Booking', 'Message'];

function extractSwaggerDoc(scriptText) {
  if (!scriptText) return null;

  const marker = '"swaggerDoc"';
  const markerIndex = scriptText.indexOf(marker);
  if (markerIndex === -1) return null;

  const objectStart = scriptText.indexOf('{', markerIndex);
  if (objectStart === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = objectStart; i < scriptText.length; i += 1) {
    const char = scriptText[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        const jsonText = scriptText.slice(objectStart, i + 1);
        try {
          return JSON.parse(jsonText);
        } catch (error) {
          return null;
        }
      }
    }
  }

  return null;
}

function buildSectionsFromSpec(spec) {
  if (!spec || !spec.paths) return FALLBACK_ENDPOINTS;

  const groups = new Map();

  Object.entries(spec.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([methodName, operation]) => {
      const lowerMethod = methodName.toLowerCase();
      if (!['get', 'post', 'patch', 'delete', 'put'].includes(lowerMethod)) {
        return;
      }

      const tag = operation.tags && operation.tags[0] ? operation.tags[0] : 'General';
      const summary = operation.summary || operation.description || `${methodName.toUpperCase()} ${path}`;

      if (!groups.has(tag)) {
        groups.set(tag, []);
      }

      groups.get(tag).push({
        method: methodName.toUpperCase(),
        path,
        summary,
      });
    });
  });

  return Array.from(groups.entries()).map(([section, items]) => ({ section, items }));
}

function buildSchemasFromSpec(spec) {
  if (!spec || !spec.components || !spec.components.schemas) return FALLBACK_SCHEMAS;
  return Object.keys(spec.components.schemas);
}

function App() {
  const [endpointSections, setEndpointSections] = useState(FALLBACK_ENDPOINTS);
  const [schemaData, setSchemaData] = useState(FALLBACK_SCHEMAS);
  const [openSections, setOpenSections] = useState(
    Object.fromEntries(FALLBACK_ENDPOINTS.map((section) => [section.section, true]))
  );

  useEffect(() => {
    let cancelled = false;

    async function loadSpec() {
      try {
        const response = await fetch(`${API_BASE_URL}/api-docs/swagger-ui-init.js`);
        if (!response.ok) throw new Error('Failed to fetch live API spec');

        const scriptText = await response.text();
        const spec = extractSwaggerDoc(scriptText);

        if (!cancelled) {
          setEndpointSections(buildSectionsFromSpec(spec));
          setSchemaData(buildSchemasFromSpec(spec));
          setOpenSections(
            Object.fromEntries(buildSectionsFromSpec(spec).map((section) => [section.section, true]))
          );
        }
      } catch (error) {
        if (!cancelled) {
          setEndpointSections(FALLBACK_ENDPOINTS);
          setSchemaData(FALLBACK_SCHEMAS);
        }
      }
    }

    loadSpec();

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleSection = (sectionName) => {
    setOpenSections((current) => ({
      ...current,
      [sectionName]: !current[sectionName],
    }));
  };

  return (
    <div className="swagger-shell">
      <header className="topbar">
        <div className="server-strip">
          <div className="server-block">
            <span className="server-label">Servers</span>
            <div className="server-value">{API_BASE_URL}</div>
          </div>

          <div className="app-brand">
            <span className="app-brand-mark">◼</span>
            <span>WhatsApp</span>
          </div>

          <div className="right-status">
            <span className="status-pill">L</span>
            <span className="status-pill status-pill--dark">LTE</span>
            <span className="status-pill status-pill--signal">265</span>
          </div>
        </div>
      </header>

      <main className="doc-shell">
        {endpointSections.map((section) => (
          <section className="api-section" key={section.section}>
            <button type="button" className="section-header" onClick={() => toggleSection(section.section)}>
              <span>{section.section}</span>
              <span className="toggle-indicator">{openSections[section.section] ? '▾' : '▸'}</span>
            </button>

            {openSections[section.section] && (
              <div className="endpoint-list">
                {section.items.map((item) => (
                  <div key={`${section.section}-${item.path}`} className="endpoint-row">
                    <span className={`method method-${item.method.toLowerCase()}`}>{item.method}</span>
                    <span className="endpoint-path">{item.path}</span>
                    <span className="endpoint-summary">{item.summary}</span>
                    <span className="endpoint-icon">◌</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="api-section schemas">
          <div className="section-header static-header">
            <span>Schemas</span>
          </div>

          <div className="schema-list">
            {schemaData.map((name) => (
              <div key={name} className="schema-item">
                <span>{name}</span>
                <span className="schema-chevron">›</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="doc-footer">
          <div className="footer-domain">{API_BASE_URL.replace('https://', '')}</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
