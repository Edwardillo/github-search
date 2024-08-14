import { useState } from 'react';
import { SearchPage } from '../../components/SearchPage/SearchPage.tsx';
import { UserCard } from './components/UserCard.tsx';
import { fetchUsers } from '../../services/apiClient.ts';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (newSearch: string) => {
    loadUsers(newSearch);
  };

  const loadUsers = async (query: string) => {
    if (query.trim().length === 0)
      return setUsers([]);
    try {
      setLoading(true);
      const newUsers = await fetchUsers(query);
      setUsers(newUsers);
    } catch {
      console.log('something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchPage
        isLoading={loading}
        onChange={handleChange}
        data={users}
        displayComponent={UserCard}
      />
    </div>
  );
};
