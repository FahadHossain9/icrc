import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LegacyPage } from './components/LegacyPage';
import { ScopePage } from './pages/ScopePage';
import { legacySlugs } from './legacySlugs';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LegacyPage slug="body" />} />
        <Route path="scope" element={<ScopePage />} />
        {legacySlugs.map((slug) => (
          <Route key={slug} path={slug} element={<LegacyPage slug={slug} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
