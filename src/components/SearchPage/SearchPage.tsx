import React from 'react';
import { Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from '../../Utils/utils.ts';
import { EmptyMessage } from '../EmptyMessage/EmptyMessage.tsx';
import { Loading } from '../Loading/Loading.tsx';

interface SearchPageProps {
  onChange: (newSearch: string) => void;
  data: unknown[];
  displayComponent: React.FC<any>;
  emptyMessage?: string;
  isLoading: boolean;
  loadingMessage?: string;
}


export const SearchPage: React.FC<SearchPageProps> = ({
                                                        onChange,
                                                        data,
                                                        displayComponent,
                                                        emptyMessage,
                                                        isLoading,
                                                        loadingMessage,
                                                      }) => {
  const debouncedSearch = debounce((event) => {
    onChange(event.target.value);
  }, 300);

  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        variant="standard"
        onChange={debouncedSearch}
        style={{ marginBottom: '20px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {isLoading ? <Loading message={loadingMessage} /> : null}
      {data.length === 0 ? <EmptyMessage message={emptyMessage} /> : null}
      {data.length > 0 ? <Grid container spacing={2}>
        {data.map(displayComponent)}
      </Grid> : null}
    </div>
  );
};
