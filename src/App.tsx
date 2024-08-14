import { Tab, Tabs, Box } from '@mui/material';
import { BrowserRouter, Link, matchPath, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Repositories } from './pages/Repositories/Repositories.tsx';
import { Users } from './pages/Users/Users';
import './App.css';

function useRouteMatch(patterns: string[]) {
  const { pathname } = useLocation();

  return patterns.find(pattern => matchPath(pattern, pathname));
}

const tabsData = [
  {
    label: 'User Search',
    value: '/users',
    Component: Users,
  },
  {
    label: 'Repository Search',
    value: '/repositories',
    Component: Repositories,
  },
];

const AppTabs = () => {
  const currentTab = useRouteMatch(tabsData.map(({ value }) => value));

  return (
    <>
      <Tabs value={currentTab} className="tabs">
        {tabsData.map(({ label, value }) => (
          <Tab key={value} to={value} label={label} value={value} component={Link} />
        ))}
      </Tabs>
    </>
  );
};

const CurrentTab = () => {
  const currentTab = useLocation().pathname;

  if (!currentTab) {
    return null;
  }

  const tabData = tabsData.find(({ value }) => value === currentTab);

  if (!tabData) {
    return null;
  }

  const { Component } = tabData;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Component />
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppTabs />
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="*" element={<CurrentTab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
