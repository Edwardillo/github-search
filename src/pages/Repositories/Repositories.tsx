import { useState } from 'react';
import { SearchPage } from '../../components/SearchPage/SearchPage.tsx';
import { RepositoryCard } from './components/RepositoryCard.tsx';
import { fetchRepositories } from '../../services/apiClient.ts';

export const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (newSearch: string) => {
    return loadRepos(newSearch);
  };

  const loadRepos = async (query: string) => {
    if (query.trim().length === 0)
      return setRepos([]);

    try {
      setLoading(true);
      const newRepos = await fetchRepositories(query);
      setRepos(newRepos);
    } catch {
      console.log('Error fetching repositories');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchPage
        isLoading={loading}
        onChange={handleChange}
        data={repos}
        displayComponent={RepositoryCard}
      />
    </div>
  );
};
